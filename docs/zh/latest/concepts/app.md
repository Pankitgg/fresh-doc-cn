---
description: |
  App 类是 Fresh 的核心，用于定义路由、中间件、布局等。
---

# App 类

`App` 类是 Fresh 的核心，负责将传入的请求路由到正确的[中间件](/docs/concepts/middleware)。路由、中间件、[布局](/docs/concepts/layouts)等都在这里定义。

```ts main.ts
const app = new App()
  .use(staticFiles())
  .get("/", () => new Response("hello"));

// 启动服务器
app.listen();
```

> [提示]: 要在 `main` 文件中使用 JSX（例如 `ctx.render(<h1>Hello</h1>)`），请将其重命名为 `main.tsx` 并在 `vite.config.ts` 的 `fresh()` 插件选项中设置 `serverEntry: "main.tsx"`。

## 配置

`App` 构造函数接受一个选项对象：

```ts
const app = new App({
  // 从子路径而不是根路径提供应用服务。
  // 所有路由都将以此路径为前缀。
  basePath: "/my-app",
});
```

使用 `basePath: "/my-app"`，注册在 `/about` 的路由将响应 `/my-app/about`。当 Fresh 在反向代理后面运行或与其他应用一起挂载时，这很有用。基础路径可通过 `ctx.config.basePath` 在处理程序中访问。

### 反向代理支持

在反向代理（nginx、Caddy 等）后面运行时，设置 `trustProxy` 使 `ctx.url` 反映客户端面对的 URL 而不是内部 URL：

```ts
const app = new App({ trustProxy: true });
```

启用此选项后，Fresh 会读取 `X-Forwarded-Proto` 和 `X-Forwarded-Host` 标头并相应地重写 `ctx.url`。例如，如果代理终止 TLS 并转发 `X-Forwarded-Proto: https`，`ctx.url.protocol` 将是 `https:` 而不是 `http:`。

> [警告]: 仅当应用确实在受信任的反向代理后面时才启用 `trustProxy`。否则不受信任的客户端可能会伪造这些标头。

所有项目从上到下应用。这意味着当您在 `.get()` 处理程序之后定义中间件时，它不会被包含。

```ts
const app = new App()
  .use((ctx) => {
    // 将为所有中间件调用
    return ctx.next();
  })
  .get("/", () => new Response("hello"))
  .use((ctx) => {
    // 仅对 `/about` 调用
    return ctx.next();
  })
  .get("/about", () => new Response("About me"));
```

## `.use()`

添加一个或多个[中间件](/docs/concepts/middleware)。中间件从左到右匹配。

```ts
// 在根路径添加中间件
app.use(async (ctx) => {
  console.log("我的中间件");
  return await ctx.next();
});
```

您也可以添加多个中间件：

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

您也可以传递延迟中间件：

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
  return new Response(`用户已创建`);
});
```

使用多个中间件响应：

```ts
app.post("/api/user/:id", middleware1, middleware2, async (ctx) => {
  await somehowCreateUser(ctx.params.id);
  return new Response(`用户已创建`);
});
```

您也可以传递延迟中间件：

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
  return new Response(`用户已更新`);
});
```

使用多个中间件响应：

```ts
app.put("/api/user/:id", middleware1, middleware2, async (ctx) => {
  await somehowSaveUser(ctx.params.id);
  return new Response(`用户已更新`);
});
```

您也可以传递延迟中间件：

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
  return new Response(`用户已删除`);
});
```

使用多个中间件响应：

```ts
app.delete("/api/user/:id", middleware1, middleware2, async (ctx) => {
  await somehowDeleteUser(ctx.params.id);
  return new Response(`用户已删除`);
});
```

您也可以传递延迟中间件：

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

您也可以传递延迟中间件：

```ts
app.head("/api/user/:id", async () => {
  const mod = await import("./middleware-or-handler.ts");
  return mod.default;
});
```

## `.all()`

使用指定的中间件响应所有 HTTP 动词的请求。

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

您也可以传递延迟中间件：

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

您可以选择性地传递一个路径来挂载它们。

```ts
app.fsRoutes("/foo/bar");
```

> [信息]: 如果可能，路由会延迟加载。设置路由配置并设置 `routeOverride` 的路由永远不会延迟加载，因为 Fresh 需要加载文件来获取路由模式。

## `.route()`

注册带有组件和可选数据加载处理程序的路由。

```tsx
app.route("/about", {
  component: (ctx) => <h1>关于 {ctx.data.name}</h1>,
  handler: {
    GET(ctx) {
      return page({ name: "Fresh" });
    },
  },
});
```

## `.appWrapper()`

设置[应用包装器](/docs/advanced/app-wrapper)组件。这是渲染外部 HTML（通常直到 `<body>` 标签）的地方。

## `.layout()`

在指定路径设置[布局](/docs/advanced/layouts)组件。默认情况下，应用包装器组件和先前的布局会被继承，除非选择退出。

## `.onError()`

设置一个错误路由或中间件，在捕获错误时渲染。

设置中间件：

```ts
// 顶级错误处理程序
app.onError("*", (ctx) => {
  return new Response(String(ctx.error), { status: 500 });
});
```

设置带组件的路由：

```tsx
app.onError("*", {
  component: (ctx) => <h1>哎呀！{String(ctx.error)}</h1>,
});
```

## `.notFound()`

每当捕获到 HTTP 404 错误时调用此中间件或路由。

```ts
app.notFound(() => {
  return new Response("未找到", { status: 404 });
});
```

带组件：

```tsx
app.notFound((ctx) => {
  return ctx.render(<h1>页面未找到</h1>);
});
```

## `.mountApp()`

在指定路径挂载另一个完整的应用。

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

从您的应用创建一个处理函数。这是一个函数，您可以向其传递 [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) 实例并接收 [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)。

```ts
const app = new App()
  .get("/", () => new Response("hello"));

const handler = app.handler();

const response = await handler(new Request("http://localhost"));
console.log(await response.text()); // 输出: "hello"
```

此功能通常在测试期间或在其他框架内运行 Fresh 时使用。

## `.listen()`

生成服务器并监听传入连接。这在内部调用 `Deno.serve()`。

```ts
const app = new App()
  .get("/", () => new Response("hello"));

app.listen();
```

您可以传递一个选项对象来自定义监听的端口和其他方面。

```ts
app.listen({ port: 4000 });
```

> **重要:** `.listen()` 仅在使用 `deno run -A main.ts` 直接运行应用时使用。默认项目设置使用 `deno task dev`（Vite 开发服务器）和 `deno task start`（`deno serve`），它们会生成自己的服务器 - 与这些一起调用 `.listen()` 将创建第二个服务器并导致 `AddrInUse` 错误。
>
> 要在默认设置中自定义端口：
>
> - **开发:** 在 `vite.config.ts` 中设置 `server.port`
> - **生产:** 在任务中向 `deno serve` 传递 `--port`，例如 `"start": "deno serve --port 4000 -A _fresh/server.js"`
