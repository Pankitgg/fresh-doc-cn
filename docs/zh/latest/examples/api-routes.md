---
description: |
  通过定义仅包含处理器的路由（无页面组件）来创建 JSON API 端点。
---

仅导出 `handlers`（无默认组件导出）的路由成为 API 端点——它直接返回响应而不是渲染 HTML。

## 基本 JSON API

```ts routes/api/users.ts
import { define } from "@/utils.ts";

export const handlers = define.handlers({
  GET(ctx) {
    const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
    return Response.json(users);
  },
});
```

`GET /api/users` 请求返回：

```json
[{ "id": 1, "name": "Alice" }, { "id": 2, "name": "Bob" }]
```

## 特定方法的处理器

为每个 HTTP 方法定义不同的逻辑。未定义的方法将自动返回 `405 Method Not Allowed`：

```ts routes/api/posts/[id].ts
import { define } from "@/utils.ts";

export const handlers = define.handlers({
  async GET(ctx) {
    const post = await db.posts.find(ctx.params.id);
    if (!post) {
      return Response.json({ error: "Not found" }, { status: 404 });
    }
    return Response.json(post);
  },

  async PUT(ctx) {
    const body = await ctx.req.json();
    const post = await db.posts.update(ctx.params.id, body);
    return Response.json(post);
  },

  async DELETE(ctx) {
    await db.posts.delete(ctx.params.id);
    return new Response(null, { status: 204 });
  },
});
```

## 捕获所有方法的处理器

导出单个函数而不是方法对象来处理所有 HTTP 方法：

```ts routes/api/health.ts
import { define } from "@/utils.ts";

export const handlers = define.handlers((ctx) => {
  return Response.json({ status: "ok", method: ctx.req.method });
});
```

## 程序化 API 路由

API 路由也可以直接在应用上定义，无需使用
[基于文件的路由](/docs/concepts/file-routing)：

```ts main.ts
const app = new App()
  .get("/api/time", () => Response.json({ time: new Date().toISOString() }))
  .post("/api/echo", async (ctx) => {
    const body = await ctx.req.text();
    return new Response(body);
  });
```