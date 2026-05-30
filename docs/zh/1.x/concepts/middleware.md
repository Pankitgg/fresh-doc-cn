---
description: |
  中间件路由用于拦截请求或响应以进行分析、访问控制或其他用途。
---

中间件定义在 `_middleware.ts` 文件中。它将拦截请求，以便你在路由处理程序之前或之后执行自定义逻辑。这允许修改或检查请求和响应。常见的用例包括日志记录、访问控制和性能监控。

每个中间件会在上下文参数中传入一个 `next` 函数，用于触发子处理程序。`ctx` 还有一个 `state` 属性，可用于向下游（或上游）处理程序传递任意数据。此 `state` 默认包含在 `PageProps` 中，可用于特殊的 [_app](/docs/1.x/concepts/app-wrapper.md) 包装器和普通[路由](/docs/1.x/concepts/routes.md)。`ctx.state` 通常通过修改其属性来设置，例如 `ctx.state.loggedIn = true`，但你也可以替换整个对象，如 `ctx.state = { loggedIn: true }`。

```ts routes/_middleware.ts
import { FreshContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: FreshContext<State>,
) {
  ctx.state.data = "myData";
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
}
```

```ts routes/myHandler.ts
export const handler: Handlers<any, { data: string }> = {
  GET(_req, ctx) {
    return new Response(`中间件数据是 ${ctx.state.data}`);
  },
};
```

中间件是作用域的，可以分层。这意味着项目可以有多个中间件，每个中间件覆盖不同的路由集。如果多个中间件覆盖一个路由，它们将全部按顺序运行（最不具体的优先）。

例如，取一个具有以下路由的项目：

```txt 项目结构
└── <root>/routes
    ├── _middleware.ts
    ├── index.ts
    └── admin
        ├── _middleware.ts
        └── index.ts
        └── signin.ts
```

对于对 `/` 的请求，请求流程如下：

1. 调用 `routes/_middleware.ts` 中间件。
2. 调用 `ctx.next()` 将调用 `routes/index.ts` 处理程序。

对于对 `/admin` 的请求，请求流程如下：

1. 调用 `routes/_middleware.ts` 中间件。
2. 调用 `ctx.next()` 将调用 `routes/admin/_middleware.ts` 中间件。
3. 调用 `ctx.next()` 将调用 `routes/admin/index.ts` 处理程序。

对于对 `/admin/signin` 的请求，请求流程如下：

1. 调用 `routes/_middleware.ts` 中间件。
2. 调用 `ctx.next()` 将调用 `routes/admin/_middleware.ts` 中间件。
3. 调用 `ctx.next()` 将调用 `routes/admin/signin.ts` 处理程序。

单个中间件文件也可以通过导出处理程序数组而不是单个处理程序来定义多个中间件（全部用于同一路由）。例如：

```ts routes/_middleware.ts
export const handler = [
  async function middleware1(req, ctx) {
    // 做一些事情
    return ctx.next();
  },
  async function middleware2(req, ctx) {
    // 做一些事情
    return ctx.next();
  },
];
```

值得注意的是，`middleware` 可以访问路由参数。如果你运行一个虚构的 `routes/[tenant]/admin/_middleware.ts`，如下所示：

```ts routes/[tenant]/admin/_middleware.ts
import { FreshContext } from "$fresh/server.ts";

export async function handler(_req: Request, ctx: FreshContext) {
  const currentTenant = ctx.params.tenant;
  // 用租户做一些事情
  const resp = await ctx.next();
  return resp;
}
```

并且请求是 `mysaas.com/acme/admin/`，那么 `currentTenant` 在你的中间件中将具有值 `acme`。

## 中间件目标

为了本节的目的，让我们关注 `FreshContext` 中看起来像这样的部分：

```ts fresh 🍋
export interface FreshContext<State = Record<string, unknown>> {
  ...
  next: () => Promise<Response>;
  state: State;
  destination: router.DestinationKind;
  remoteAddr: {
    transport: "tcp" | "udp";
    hostname: string;
    port: number;
  };
  ...
}
```

并且 `router.DestinationKind` 定义如下：

```ts fresh 🍋
export type DestinationKind = "internal" | "static" | "route" | "notFound";
```

这很有用，如果你想让你的中间件仅在请求前往 `route` 时运行，而不是像 `http://localhost:8001/favicon.ico` 这样的东西。

### 示例

初始化一个新的 Fresh 项目（`deno run -A -r https://fresh.deno.dev/`），然后在 `routes` 文件夹中创建一个 `_middleware.ts` 文件，如下所示：

```ts routes/_middleware.ts
import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  console.log(ctx.destination);
  console.log(req.url);
  const resp = await ctx.next();
  return resp;
}
```

如果你启动服务器（`deno task start`），你将看到以下内容：

```sh Terminal
Task start deno run -A --watch=static/,routes/ dev.ts
Watcher Process started.
The manifest has been generated for 4 routes and 1 islands.

 🍋 Fresh ready
    Local: http://localhost:8000/

route
http://localhost:8000/
internal
http://localhost:8000/_frsh/js/3c7400558fc00915df88cb181036c0dbf73ab7f5/deserializer.js
internal
http://localhost:8000/_frsh/js/3c7400558fc00915df88cb181036c0dbf73ab7f5/signals.js
internal
http://localhost:8000/_frsh/js/3c7400558fc00915df88cb181036c0dbf73ab7f5/plugin-twind-main.js
internal
http://localhost:8000/_frsh/js/3c7400558fc00915df88cb181036c0dbf73ab7f5/main.js
internal
http://localhost:8000/_frsh/js/3c7400558fc00915df88cb181036c0dbf73ab7f5/island-counter.js
internal
http://localhost:8000/_frsh/refresh.js
static
http://localhost:8000/logo.svg?__frsh_c=3c7400558fc00915df88cb181036c0dbf73ab7f5
internal
http://localhost:8000/_frsh/alive
internal
http://localhost:8000/_frsh/js/3c7400558fc00915df88cb181036c0dbf73ab7f5/chunk-PDMKJVJ5.js
internal
http://localhost:8000/_frsh/js/3c7400558fc00915df88cb181036c0dbf73ab7f5/chunk-UGFDDSOV.js
internal
http://localhost:8000/_frsh/js/3c7400558fc00915df88cb181036c0dbf73ab7f5/chunk-RCK7U3UF.js
```

第一个 `route` 请求是当 `Fresh` 响应根级别 `index.tsx` 路由时。其余的，正如你所看到的，要么是 `internal` 要么是 `static` 请求。你可以使用 `ctx.destination` 来过滤这些，如果你的中间件只应该处理路由。

## 中间件重定向

如果你想从中间件重定向请求，你可以通过返回以下内容来实现：

```ts routes/_middleware.ts
export function handler(req: Request): Response {
  return Response.redirect("https://example.com", 307);
}
```

`307` 表示临时重定向。你也可以使用 `301` 进行永久重定向。你还可以通过以下方式重定向到相对路径：

```ts routes/_middleware.ts
export function handler(req: Request): Response {
  return new Response("", {
    status: 307,
    headers: { Location: "/my/new/relative/path" },
  });
}
```
