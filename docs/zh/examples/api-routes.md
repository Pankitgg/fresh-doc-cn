---
description: |
  Create JSON API endpoints by defining handler-only routes without a page component.
---

只导出 `handlers`（没有默认组件导出）的路由会变成 API 端点——它直接返回响应而不是渲染 HTML。

## 基本的 JSON API

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

## 按方法定义处理器

可以为每个 HTTP 方法定义不同的逻辑。未定义的方法会自动返回 `405 Method Not Allowed`：

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

## 通配处理器

导出一个函数而不是方法对象来处理所有 HTTP 方法：

```ts routes/api/health.ts
import { define } from "@/utils.ts";

export const handlers = define.handlers((ctx) => {
  return Response.json({ status: "ok", method: ctx.req.method });
});
```

## 以编程方式定义 API 路由

API 路由也可以直接在应用上定义，而不使用[文件路由](/docs/concepts/file-routing)：

```ts main.ts
const app = new App()
  .get("/api/time", () => Response.json({ time: new Date().toISOString() }))
  .post("/api/echo", async (ctx) => {
    const body = await ctx.req.text();
    return new Response(body);
  });
```
