---
description: |
  在你的 Fresh 项目中为路由启用 CORS。
---

# 处理 CORS

所以你遇到了一些 CORS 问题并正在寻找解决方案？你来对地方了。

这是一个很好的[资源](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)，详细讲解了 CORS，以防你不完全了解问题所在。

## 简单 CORS -- 中间件

根据上面的链接，"简单"请求涉及 `GET`、`HEAD` 或 `POST` 请求。你可以通过以下方式对所有受某些 `middleware` 影响的路由启用 CORS：

```ts routes/_middleware.ts
import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const origin = req.headers.get("Origin") || "*";
  const resp = await ctx.next();
  const headers = resp.headers;

  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Access-Control-Allow-Credentials", "true");
  headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
  );
  headers.set(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS, GET, PUT, DELETE",
  );

  return resp;
}
```

## 复杂 CORS -- 中间件

对于其他 HTTP 方法呢？那么你需要处理"预检请求"。假设你想要支持一个 `DELETE` 路由。那么你需要做类似这样的事情：

```ts routes/_middleware.ts
import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  if (req.method == "OPTIONS") {
    const resp = new Response(null, {
      status: 204,
    });
    const origin = req.headers.get("Origin") || "*";
    const headers = resp.headers;
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "DELETE");
    return resp;
  }
  const origin = req.headers.get("Origin") || "*";
  const resp = await ctx.next();
  const headers = resp.headers;

  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Access-Control-Allow-Credentials", "true");
  headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
  );
  headers.set(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS, GET, PUT, DELETE",
  );

  return resp;
}
```

这些复杂请求需要两步处理：

1. 浏览器发送 `OPTIONS` 请求以了解允许的方法
2. 浏览器发送实际请求

所以你可以看到中间件有一些特殊处理来应对 `OPTIONS` 请求。

## 路由中的 CORS

当然，你没有理由必须使用中间件来解决这个问题。你也可以直接在[处理程序](/docs/1.x/getting-started/custom-handlers)中设置这些头部信息。
