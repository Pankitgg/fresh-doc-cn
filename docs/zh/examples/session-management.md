---
description: |
  How to manage a session using cookies.
---

_会话_ 允许你跟踪每个用户的状态，例如身份验证或购物车内容。Cookie 是最常见的会话管理机制。由于 [Deno](https://deno.com) 使用标准的 Web API（如 `Request` 和 `Response`），使用 Cookie 非常简单。

## 设置

添加标准库中的 `@std/http` 包：

```sh
deno add jsr:@std/http
```

## 解决方案

使用中间件为每个访问者分配一个存储在 Cookie 中的会话 ID。中间件从请求中读取现有 Cookie，或生成一个新的，并通过 `ctx.state` 使其对下游路由可用。

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

  // Set the cookie for new sessions
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

> [info]：这是一个基本实现。在生产环境中，你通常会将会话数据存储在以会话 ID 为键的数据库中，并在通过 HTTPS 提供服务时添加 `secure: true` 属性。

更多背景信息，请参阅 [MDN HTTP Cookie 指南](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies)。
