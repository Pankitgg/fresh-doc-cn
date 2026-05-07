---
description: |
  错误页面可用于自定义应用程序中发生错误时显示的页面。
---

# 错误处理

错误页面用于确保您的应用保持运行，并向发出请求的人显示相关反馈。

Fresh 支持两种错误页面：

1. 通用错误页面
2. 404 未找到错误页面

> [提示]: 确保返回适当的 [HTTP 状态码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)。这使您的应用的客户端更容易采取适当的行动。在查看跟踪时，也更容易找到失败的请求。

## 通用错误页面

要添加错误页面，请使用 [`app.onError()`](/docs/concepts/app#onerror)。

```ts main.ts
import { App } from "fresh";

const app = new App()
  .onError("*", (ctx) => {
    console.log(`错误: ${ctx.error}`);
    return new Response("哎呀！", { status: 500 });
  })
  .get("/thrower", () => {
    throw new Error("失败");
  });
```

当您访问 `/thrower` 时，错误将被捕获，并调用 `onError` 回调。

您还可以嵌套错误页面：

```ts
const app = new App()
  // 顶级错误页面
  .onError("*", (ctx) => {
    return new Response("哎呀！", { status: 500 });
  })
  .onError("/foo/bar", (ctx) => {
    return new Response("嵌套错误！", { status: 500 });
  })
  .get("/foo/bar/thrower", () => {
    throw new Error("失败");
  });
```

## 未找到错误

未找到错误通常与通用错误不同。您可以使用 `.onError()` 方式处理它们，但通过添加特定的 `.notFound()` 处理程序，Fresh 确保每个 404 错误都会调用此回调。

```ts
const app = new App()
  // 顶级错误页面
  .notFound((ctx) => {
    return new Response("页面未找到", { status: 404 });
  })
  .get("/", () => new Response("foo"));
```

访问未知路由（如 `/invalid`）将触发 `notFound` [中间件](/docs/concepts/middleware)。与通用错误页面不同，此处理程序不能嵌套。

## 抛出 HTTP 错误

如果您需要退出执行并需要使用特定的 HTTP 错误代码进行响应，您可以使用 Fresh 的 `HttpError` 类：

```ts
import { HttpError } from "fresh";
```

`HttpError` 接受状态码和可选消息：

```ts middleware/auth.ts
import { HttpError } from "fresh";

async function authMiddleware(ctx) {
  const user = ctx.state.user;

  // 检查用户是否已认证，如果未认证则抛出 404 错误
  if (!isAuthenticated(user)) {
    throw new HttpError(404);
  }

  // 禁止访问，带有自定义消息
  if (!isAdmin(user)) {
    throw new HttpError(403, "需要管理员权限");
  }

  return await ctx.next();
}
```

当抛出 `HttpError` 时，Fresh 会捕获它并调用错误处理程序。您可以在错误处理程序中检查状态码：

```ts
import { HttpError } from "fresh";

app.onError("*", (ctx) => {
  if (ctx.error instanceof HttpError) {
    const status = ctx.error.status;
    return new Response("哎呀", { status });
  }

  // ...
});
```

`HttpError` 也可通过 `fresh/runtime` 在浏览器中使用，用于[岛屿代码](/docs/concepts/islands)。
