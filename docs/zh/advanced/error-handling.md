---
description: |
  错误页面可用于自定义应用程序发生错误时显示的页面。
---

错误页面用于确保你的应用保持运行，并向请求者显示相关的反馈。

Fresh 支持两种错误页面：

1. 通用错误页面
2. 404 未找到错误页面

> [tip]: 请确保返回适当的
> [HTTP 状态码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)。这使应用的客户端更容易做出适当的响应。也更容易在追踪失败请求时找到它们。

## 通用错误页面

要添加错误页面，请使用 [`app.onError()`](/docs/concepts/app#onerror)。

```ts main.ts
import { App } from "fresh";

const app = new App()
  .onError("*", (ctx) => {
    console.log(`Error: ${ctx.error}`);
    return new Response("Oops!", { status: 500 });
  })
  .get("/thrower", () => {
    throw new Error("fail");
  });
```

当你访问 `/thrower` 时，错误会被捕获并调用 `onError` 回调。

你也可以嵌套错误页面：

```ts
const app = new App()
  // 顶级错误页面
  .onError("*", (ctx) => {
    return new Response("Oops!", { status: 500 });
  })
  .onError("/foo/bar", (ctx) => {
    return new Response("nested error!", { status: 500 });
  })
  .get("/foo/bar/thrower", () => {
    throw new Error("fail");
  });
```

## 未找到错误

未找到错误通常与通用错误处理方式不同。你可以使用 `.onError()` 的方式处理它们，但通过添加特定的 `.notFound()` 处理器，Fresh 确保每个 404 错误都会调用此回调。

```ts
const app = new App()
  // 顶级错误页面
  .notFound((ctx) => {
    return new Response("Page not found", { status: 404 });
  })
  .get("/", () => new Response("foo"));
```

访问未知路由（如 `/invalid`）将触发 `notFound`[中间件](/docs/concepts/middleware)。与通用错误页面不同，此处理器不能嵌套。

## 抛出 HTTP 错误

如果你需要中止执行并使用特定的 HTTP 错误码进行响应，可以使用 Fresh 的 `HttpError` 类：

```ts
import { HttpError } from "fresh";
```

`HttpError` 接受一个状态码和一个可选的消息：

```ts middleware/auth.ts
import { HttpError } from "fresh";

async function authMiddleware(ctx) {
  const user = ctx.state.user;

  // 检查用户是否已认证，如果未认证则抛出 404 错误
  if (!isAuthenticated(user)) {
    throw new HttpError(404);
  }

  // 禁止访问，并附带自定义消息
  if (!isAdmin(user)) {
    throw new HttpError(403, "Admin access required");
  }

  return await ctx.next();
}
```

当抛出 `HttpError` 时，Fresh 会捕获它并调用错误处理器。你可以在错误处理器中检查状态码：

```ts
import { HttpError } from "fresh";

app.onError("*", (ctx) => {
  if (ctx.error instanceof HttpError) {
    const status = ctx.error.status;
    return new Response("oops", { status });
  }

  // ...
});
```

`HttpError` 也可以通过 `fresh/runtime` 在浏览器中使用，用于 [island 代码](/docs/concepts/islands)。
