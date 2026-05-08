---
description: The Context object is shared across all middlewares and provides access to the request, URL, params, state, and response helpers.
---

`Context` 对象在 Fresh 的所有[中间件](/docs/concepts/middleware)中共享。使用它可以响应 HTML、触发重定向、访问传入的[`请求`](https://developer.mozilla.org/en-US/docs/Web/API/Request) 或读取其他元数据。

## `.config`

包含已解析的 Fresh 配置。

```ts
app.get("/", (ctx) => {
  console.log("Config: ", ctx.config);
  return new Response("hey");
});
```

## `.url`

包含请求 URL 的 [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) 实例。

```ts
app.get("/", (ctx) => {
  console.log("path: ", ctx.url.pathname);

  const hasParam = ctx.url.searchParams.has("q");
  return new Response(`Has q param: ${hasParam}`);
});
```

## `.req`

包含传入的[`请求`](https://developer.mozilla.org/en-US/docs/Web/API/Request)实例。

```ts
app.get("/", (ctx) => {
  console.log("Request: ", ctx.req);

  if (ctx.req.headers.has("X-Foo")) {
    // do something
  }

  return new Response("hello");
});
```

## `.route`

包含匹配路由模式的 `string` 类型的字符串。如果没有匹配到模式，则为 `null`。

```ts
app.get("/foo/:id", (ctx) => {
  console.log(ctx.route); // Logs: "/foo/:id"
  // ...
});
```

## `.params`

包含匹配路由模式的参数。

```ts
app.get("/foo/:id", (ctx) => {
  console.log("id: ", ctx.params.id);

  return new Response(`Accessed: /foo/${ctx.params.id}`);
});
```

## `.state`

使用 state 向下一个中间件传递数据。每个请求都有自己独立的 state 对象。

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
  console.log(ctx.state.text); // Logs: "foo"
  return ctx.next();
});
```

## `.error`

如果抛出了错误，此属性将保存捕获的值（默认为 `null`）。这通常主要用于[错误页面](/docs/advanced/error-handling)。

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

设置自定义状态码（默认为 `302`）：

```ts
app.get("/old-url", (ctx) => {
  return ctx.redirect("/new-url", 307);
});
```

## `.render()`

渲染 JSX 并创建 HTML `Response`。

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
