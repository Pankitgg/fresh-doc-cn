---
description: |
  如何使用 cookies 管理会话。
---

_会话_ 允许您跟踪每个用户的状态，例如身份验证或购物车内容。Cookies 是会话管理最常见的机制。由于
[Deno](https://deno.com) 使用标准的 Web API（如 `Request` 和 `Response`），因此处理 cookies 非常简单。

## 设置

从标准库添加 `@std/http` 包：

```sh
deno add jsr:@std/http
```

## 解决方案

使用中间件为每个访问者分配一个存储在 cookie 中的会话 ID。中间件从请求中读取现有的 cookie，或者生成一个新的 cookie，并通过 `ctx.state` 使其对下游路由可用。

```ts main.ts
import { getCookies, setCookie } from "@std/http";

interface SessionState {
  session: string;
}

app.use(async (ctx: Context<SessionState>) => {
  const cookies = getCookies(ctx.req.headers);
  const session = cookies["session"];
  ctx.state.session = session ?? crypto.randomUUID();

  const response = await ctx.next();

  // 为新会话设置 cookie
  if (!session) {
    setCookie(response.headers, {
      name: "session",
      value: ctx.state.session,
      path: "/",
      httpOnly: true,
      sameSite: "Lax",
    });
  }

  return response;
});

app.get("/", (ctx: Context<SessionState>) => {
  return new Response(`Your session ID is: ${ctx.state.session}`);
});
```

> [info]: 这是一个基本实现。在生产环境中，您通常会将会话数据存储在以会话 ID 为键的数据库中，并在通过 HTTPS 服务时添加 `secure: true` 属性。

有关更多背景信息，请参阅
[MDN 关于 HTTP cookies 的指南](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies)。