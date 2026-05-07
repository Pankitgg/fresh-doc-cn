---
description: Context 对象在所有中间件之间共享，提供对请求、URL、参数、状态和响应助手的访问。
---

# Context 对象

`Context` 实例在 Fresh 的所有[中间件](/docs/concepts/middleware)之间共享。使用它来响应 HTML、触发重定向、访问传入的 [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) 或读取其他元数据。

## `.config`

包含解析后的 Fresh 配置。

```ts
app.get("/", (ctx) => {
  console.log("配置: ", ctx.config);
  return new Response("hey");
});
```

## `.url`

包含请求 URL 的 [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) 实例。

```ts
app.get("/", (ctx) => {
  console.log("路径: ", ctx.url.pathname);

  const hasParam = ctx.url.searchParams.has("q");
  return new Response(`是否有 q 参数: ${hasParam}`);
});
```

## `.req`

包含传入的 [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) 实例。

```ts
app.get("/", (ctx) => {
  console.log("请求: ", ctx.req);

  if (ctx.req.headers.has("X-Foo")) {
    // 做一些事情
  }

  return new Response("hello");
});
```

## `.route`

包含匹配的路由模式（字符串形式）。如果没有匹配的模式，则为 `null`。

```ts
app.get("/foo/:id", (ctx) => {
  console.log(ctx.route); // 输出: "/foo/:id"
  // ...
});
```

## `.params`

包含匹配路由模式的参数。

```ts
app.get("/foo/:id", (ctx) => {
  console.log("id: ", ctx.params.id);

  return new Response(`访问: /foo/${ctx.params.id}`);
});
```

## `.state`

通过状态将数据传递给下一个中间件。每个请求都有自己的状态对象。

```ts
interface State {
  text?: string;
}

const app = new App<State>();

app.use((ctx) => {
  ctx.state.text = "foo";
  return ctx.next();
});
app.use((ctx) => {
  console.log(ctx.state.text); // 输出: "foo"
  return ctx.next();
});
```

## `.error`

如果抛出了错误，此属性将保存捕获的值（默认值：`null`）。这通常主要在[错误页面](/docs/advanced/error-handling)上使用。

```ts
app.onError((ctx) => {
  const message = ctx.error instanceof Error
    ? ctx.error.message
    : String(ctx.error);

  return new Response(message, { status: 500 });
});
```

## `.redirect()`

从中间件触发重定向：

```ts
app.get("/old-url", (ctx) => {
  return ctx.redirect("/new-url");
});
```

设置自定义状态码（默认是 `302`）：

```ts
app.get("/old-url", (ctx) => {
  return ctx.redirect("/new-url", 307);
});
```

## `.render()`

渲染 JSX 并创建一个 HTML `Response`。

```tsx
app.get("/", (ctx) => {
  return ctx.render(<h1>hello world</h1>);
});
```

设置自定义响应头或其他元数据：

```tsx
app.get("/teapot", (ctx) => {
  return ctx.render(
    <h1>I'm a teapot</h1>,
    {
      status: 418,
      headers: {
        "X-Foo": "abc",
      },
    },
  );
});
```
