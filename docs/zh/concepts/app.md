---
description: |
  App 类是 Fresh 的核心，用于定义路由、中间件、布局等。
---

`App` 类是 Fresh 的核心，将传入的请求路由到正确的[中间件](/docs/concepts/middleware)。路由、中间件、[布局](/docs/concepts/layouts)等都在这里定义。

```ts main.ts
const app = new App()
  .use(staticFiles())
  .get("/", () => new Response("hello"));

// Start server
app.listen();
```

> [tip]: 要在 `main` 文件中使用 JSX（例如使用 `ctx.render(<h1>Hello</h1>)`），请将其重命名为 `main.tsx`，并在 `vite.config.ts` 中的 `fresh()` 插件选项中设置 `serverEntry: "main.tsx"`。

## 配置

`App` 构造函数接受一个选项对象：

```ts
const app = new App({
  // Serve the app from a sub-path instead of root.
  // All routes will be prefixed with this path.
  basePath: "/my-app",
});
```

使用 `basePath: "/my-app"` 时，注册在 `/about` 的路由将响应 `/my-app/about`。当 Fresh 运行在反向代理后面或与其他应用一起挂载时，这非常有用。基础路径可通过 `ctx.config.basePath` 在处理器中访问。

### 反向代理支持

当运行在反向代理（nginx、Caddy 等）后面时，设置 `trustProxy` 使 `ctx.url` 反映面向客户端的 URL 而不是内部 URL：

```ts
const app = new App({ trustProxy: true });
```

启用此选项后，Fresh 会读取 `X-Forwarded-Proto` 和 `X-Forwarded-Host` 头，并相应地重写 `ctx.url`。例如，如果代理终止了 TLS 并转发 `X-Forwarded-Proto: https`，则 `ctx.url.protocol` 将是 `https:` 而不是 `http:`。

> [warn]: 仅在应用实际位于可信的反向代理后面时启用 `trustProxy`。否则，不受信任的客户端可能会伪造这些头。

所有项目都从上到下应用。这意味着当你在 `.get()` 处理器之后定义了中间件时，它不会被包含。

```ts
const app = new App()
  .use((ctx) => {
    // Will be called for all middlewares
    return ctx.next();
  })
  .get("/", () => new Response("hello"))
  .use((ctx) => {
    // Will only be called for `/about`
    return ctx.next();
  })
  .get("/about", () => new Response("About me"));
```

## `.use()`

添加一个或多个[中间件](/docs/concepts/middleware)。中间件从左到右匹配。

```ts
// Add a middleware at the root
app.use(async (ctx) => {
  console.log("my middleware");
  return await ctx.next();
});
```

你也可以添加多个中间件：

```ts
app.use(middleware1, middleware2, middleware3);
```

在特定路径添加中间件：

```ts
app.use("/foo/bar", middleware);
```

中间件也可以延迟实例化：

```ts
app.use("/foo/bar", async () => {
  const mod = await import("./path/to/my/middleware.ts");
  return mod.default;
});
```

## `.get()`

使用指定的中间件响应 `GET` 请求。

```ts
app.get("/about", async (ctx) => {
  return new Response(`GET: ${ctx.url.pathname}`);
});
```

使用多个中间件响应：

```ts
app.get("/about", middleware1, middleware2, async (ctx) => {
  return new Response(`GET: ${ctx.url.pathname}`);
});
```

你也可以传递延迟中间件：

```ts
app.get("/about", async () => {
  const mod = await import("./middleware-or-handler.ts");
  return mod.default;
});
```

## `.post()`

使用指定的中间件响应 `POST` 请求。

```ts
app.post("/api/user/:id", async (ctx) => {
  await somehowCreateUser(ctx.params.id);
  return new Response(`User created`);
});
```

使用多个中间件响应：

```ts
app.post("/api/user/:id", middleware1, middleware2, async (ctx) => {
  await somehowCreateUser(ctx.params.id);
  return new Response(`User created`);
});
```

你也可以传递延迟中间件：

```ts
app.post("/api/user/:id", async () => {
  const mod = await import("./middleware-or-handler.ts");
  return mod.default;
});
```

## `.put()`

使用指定的中间件响应 `PUT` 请求。

```ts
app.put("/api/user/:id", async (ctx) => {
  await somehowSaveUser(ctx.params.id);
  return new Response(`Updated user`);
});
```

使用多个中间件响应：

```ts
app.put("/api/user/:id", middleware1, middleware2, async (ctx) => {
  await somehowSaveUser(ctx.params.id);
  return new Response(`Updated user`);
});
```

你也可以传递延迟中间件：

```ts
app.put("/api/user/:id", async () => {
  const mod = await import("./middleware-or-handler.ts");
  return mod.default;
});
```

## `.delete()`

使用指定的中间件响应 `DELETE` 请求。

```ts
app.delete("/api/user/:id", async (ctx) => {
  await somehowDeleteUser(ctx.params.id);
  return new Response(`User deleted`);
});
```

使用多个中间件响应：

```ts
app.delete("/api/user/:id", middleware1, middleware2, async (ctx) => {
  await somehowDeleteUser(ctx.params.id);
  return new Response(`User deleted`);
});
```

你也可以传递延迟中间件：

```ts
app.delete("/api/user/:id", async () => {
  const mod = await import("./middleware-or-handler.ts");
  return mod.default;
});
```

## `.head()`

使用指定的中间件响应 `HEAD` 请求。

```ts
app.head("/api/user/:id", async (ctx) => {
  return new Response(null, { status: 200 });
});
```

使用多个中间件响应：

```ts
app.head("/api/user/:id", middleware1, middleware2, async (ctx) => {
  return new Response(null, { status: 200 });
});
```

你也可以传递延迟中间件：

```ts
app.head("/api/user/:id", async () => {
  const mod = await import("./middleware-or-handler.ts");
  return mod.default;
});
```

## `.all()`

使用指定的中间件响应所有 HTTP 方法的请求。

```ts
app.all("/api/foo", async (ctx) => {
  return new Response("hehe");
});
```

使用多个中间件响应：

```ts
app.all("/api/foo", middleware1, middleware2, async (ctx) => {
  return new Response("hehe");
});
```

你也可以传递延迟中间件：

```ts
app.all("/api/foo", async () => {
  const mod = await import("./middleware-or-handler.ts");
  return mod.default;
});
```

## `.fsRoute()`

将所有[基于文件的路由](/docs/concepts/file-routing)、中间件、布局和[错误页面](/docs/advanced/error-handling)注入到应用实例中。

```ts
app.fsRoutes();
```

你也可以选择传递一个挂载路径。

```ts
app.fsRoutes("/foo/bar");
```

> [info]: 如果可能，路由会被延迟加载。设置了路由配置和 `routeOverride` 的路由永远不会被延迟加载，因为 Fresh 需要加载文件来获取路由模式。

## `.route()`

使用组件和可选的数据加载处理器注册一个路由。

```tsx
app.route("/about", {
  component: (ctx) => <h1>About {ctx.data.name}</h1>,
  handler: {
    GET(ctx) {
      return page({ name: "Fresh" });
    },
  },
});
```

## `.appWrapper()`

设置[应用包装器](/docs/advanced/app-wrapper)组件。这是渲染外部 HTML（通常直到 `<body>` 标签之前）的地方。

## `.layout()`

在指定路径设置一个[布局](/docs/advanced/layouts)组件。应用包装器组件和先前的布局默认会被继承，除非选择退出。

## `.onError()`

设置一个错误路由或中间件，当它捕获到错误时会被渲染。

设置一个中间件：

```ts
// top level error handler
app.onError("*", (ctx) => {
  return new Response(String(ctx.error), { status: 500 });
});
```

使用组件设置路由：

```tsx
app.onError("*", {
  component: (ctx) => <h1>Oops! {String(ctx.error)}</h1>,
});
```

## `.notFound()`

当捕获到 HTTP 404 错误时调用此中间件或路由。

```ts
app.notFound(() => {
  return new Response("Not found", { status: 404 });
});
```

使用组件：

```tsx
app.notFound((ctx) => {
  return ctx.render(<h1>Page not found</h1>);
});
```

## `.mountApp()`

在指定路径挂载另一个完整应用。

```ts
const someRoutes = new App()
  .get("/sitemap.xml", (ctx) => {/* ... */})
  .get("/robots.txt", (ctx) => {/* ... */});

export const app = new App()
  .use(staticFiles())
  .mountApp("/", someRoutes())
  .fsRoutes();
```

## `.handler()`

从你的应用创建一个处理器函数。这是一个可以传入 [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) 实例并接收 [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) 的函数。

```ts
const app = new App()
  .get("/", () => new Response("hello"));

const handler = app.handler();

const response = await handler(new Request("http://localhost"));
console.log(await response.text()); // Logs: "hello"
```

此功能通常用于测试或在 other 框架中运行 Fresh。

## `.listen()`

生成一个服务器并监听传入的连接。这在内部调用 `Deno.serve()`。

```ts
const app = new App()
  .get("/", () => new Response("hello"));

app.listen();
```

你可以传递一个选项对象来自定义要监听的端口和其他方面。

```ts
app.listen({ port: 4000 });
```

> **重要:** `.listen()` 仅在你直接使用 `deno run -A main.ts` 运行应用时使用。默认项目设置使用 `deno task dev`（Vite 开发服务器）和 `deno task start`（`deno serve`），它们会生成自己的服务器——与这些一起调用 `.listen()` 会创建第二个服务器并导致 `AddrInUse` 错误。
>
> 要在默认设置中自定义端口：
>
> - **开发:** 在 `vite.config.ts` 中设置 `server.port`
> - **生产:** 在任务中向 `deno serve` 传递 `--port`，例如
>   `"start": "deno serve --port 4000 -A _fresh/server.js"`
