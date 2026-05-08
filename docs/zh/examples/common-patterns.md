---
description: |
  Common patterns and recipes for Fresh applications: authentication, redirects, content negotiation, cookies, and more.
---

本页面收集了构建 Fresh 应用时会遇到的常见模式。

## 受保护的路由

使用[中间件](/docs/concepts/middleware)检查身份验证并重定向未认证的用户：

```ts routes/dashboard/_middleware.ts
import { define } from "@/utils.ts";

export default define.middleware(async (ctx) => {
  const session = await getSession(ctx.req);
  if (!session) {
    return ctx.redirect("/login");
  }
  ctx.state.user = session.user;
  return ctx.next();
});
```

`routes/dashboard/` 下的所有路由现在都受到保护。用户数据可通过 `ctx.state.user` 在任何下游处理器或组件中使用。

## 重定向旧 URL

使用中间件处理 URL 迁移：

```ts routes/_middleware.ts
import { define } from "@/utils.ts";

const REDIRECTS: Record<string, string> = {
  "/old-page": "/new-page",
  "/blog/old-slug": "/blog/new-slug",
};

export default define.middleware((ctx) => {
  const redirect = REDIRECTS[ctx.url.pathname];
  if (redirect) {
    return ctx.redirect(redirect, 301);
  }
  return ctx.next();
});
```

> [info]：`ctx.redirect()` 包含针对开放重定向攻击的保护。协议相对 URL（如 `//evil.com`）会被拒绝。

## 内容协商

根据 `Accept` 头返回不同格式：

```ts routes/api/users/[id].ts
import { HttpError } from "fresh";
import { define } from "@/utils.ts";

export const handler = define.handlers({
  async GET(ctx) {
    const user = await db.users.find(ctx.params.id);
    if (!user) {
      throw new HttpError(404);
    }

    const accept = ctx.req.headers.get("Accept") ?? "";
    if (accept.includes("text/html")) {
      return ctx.render(<UserProfile user={user} />);
    }
    return Response.json(user);
  },
});
```

## 设置 Cookie

使用 `@std/http` 的 Cookie 工具：

```ts routes/_middleware.ts
import { getCookies, setCookie } from "@std/http";
import { define } from "@/utils.ts";

export default define.middleware(async (ctx) => {
  const cookies = getCookies(ctx.req.headers);
  ctx.state.theme = cookies["theme"] ?? "light";

  const response = await ctx.next();

  // Set a cookie on the response
  setCookie(response.headers, {
    name: "theme",
    value: ctx.state.theme,
    path: "/",
    httpOnly: true,
    sameSite: "Lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });

  return response;
});
```

请参阅[会话管理](/docs/examples/session-management)以获取完整的会话示例。

## 读取查询参数

从上下文中访问 URL 搜索参数：

```ts routes/search.tsx
import { page } from "fresh";
import { define } from "@/utils.ts";

export const handler = define.handlers({
  GET(ctx) {
    const query = ctx.url.searchParams.get("q") ?? "";
    const pageNum = Number(ctx.url.searchParams.get("page") ?? "1");
    const results = search(query, pageNum);
    return page({ query, results });
  },
});
```

## 添加响应头

在中间件中设置自定义头：

```ts routes/_middleware.ts
import { define } from "@/utils.ts";

export default define.middleware(async (ctx) => {
  const response = await ctx.next();
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  return response;
});
```

或者使用 `page()` 在特定路由上设置头：

```ts
import { page } from "fresh";

return page(data, {
  headers: { "Cache-Control": "public, max-age=3600" },
});
```

## 流式响应

从处理器返回流式响应：

```ts routes/api/stream.ts
import { define } from "@/utils.ts";

export const handler = define.handlers({
  GET() {
    const body = new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode("Hello "));
        setTimeout(() => {
          controller.enqueue(new TextEncoder().encode("World!"));
          controller.close();
        }, 1000);
      },
    });
    return new Response(body, {
      headers: { "Content-Type": "text/plain" },
    });
  },
});
```

## WebSocket

Fresh 通过 `ctx.upgrade()` 提供一流的 WebSocket 支持。请参阅完整的 [WebSocket 指南](/docs/advanced/websockets)以了解所有选项。

## 子域路由

使用带有 `URLPattern` 的中间件根据子域进行路由：

```ts routes/_middleware.ts
import { define } from "@/utils.ts";

const SUBDOMAIN_PATTERN = new URLPattern({ hostname: ":sub.example.com" });

export default define.middleware(async (ctx) => {
  const match = SUBDOMAIN_PATTERN.exec(ctx.req.url);
  if (match) {
    const sub = match.hostname.groups["sub"];
    ctx.state.subdomain = sub;

    // Route to different handlers based on subdomain
    if (sub === "api") {
      return ctx.next(); // Let API routes handle it
    }
    if (sub !== "www") {
      // Tenant-specific logic
      ctx.state.tenant = await getTenant(sub);
    }
  }
  return ctx.next();
});
```

## 代理请求

从路由处理器将请求转发到上游服务器：

```ts routes/api/[...path].ts
import { define } from "@/utils.ts";

const UPSTREAM = "https://api.example.com";

export const handler = define.handlers({
  async GET(ctx) {
    const url = new URL(ctx.params.path, UPSTREAM);
    url.search = ctx.url.search;

    const response = await fetch(url, {
      headers: ctx.req.headers,
    });

    return new Response(response.body, {
      status: response.status,
      headers: response.headers,
    });
  },
});
```

这对于代理到后端服务或在开发过程中绕过 CORS 限制很有用。

## 延迟加载岛屿内容

使用 Preact 的 `lazy()` 和 `<Suspense>` 对岛屿内的重型组件进行代码分割，这样它们的 JavaScript 只在需要时才加载：

```tsx islands/HeavyFeature.tsx
import { lazy, Suspense } from "preact/compat";

const Chart = lazy(() => import("../components/Chart.tsx"));

export function HeavyFeature() {
  return (
    <Suspense fallback={<p>Loading chart...</p>}>
      <Chart />
    </Suspense>
  );
}
```

`Chart` 组件的代码被分割到一个单独的块中，只在浏览器中渲染 `HeavyFeature` 时才会被获取。

## 计时中间件

测量请求处理所需的时间：

```ts routes/_middleware.ts
import { define } from "@/utils.ts";

export default define.middleware(async (ctx) => {
  const start = performance.now();
  const response = await ctx.next();
  const duration = performance.now() - start;
  response.headers.set("Server-Timing", `total;dur=${duration.toFixed(1)}`);
  return response;
});
```
