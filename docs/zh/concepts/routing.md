---
description: |
  How routing works in Fresh, including route patterns, matching priority, method-specific handlers, and URLPattern support.
---

路由定义了哪些中间件和路由应该响应特定请求。

```ts main.ts
import { App } from "fresh";

const app = new App()
  .get("/", () => new Response("hello")) // 响应：GET /
  .get("/other", () => new Response("other")) // 响应：GET /other
  .post("/upload", () => new Response("upload")) // 响应：POST /upload
  .get("/books/:id", (ctx) => {
    // 响应：GET /books/my-book, /books/cool-book 等
    const id = ctx.params.id;
    return new Response(`Book id: ${id}`);
  })
  .get("/blog/:post/comments", (ctx) => {
    // 响应：GET /blog/my-post/comments, /blog/hello/comments 等
    const post = ctx.params.post;
    return new Response(`Blog post comments for post: ${post}`);
  })
  .get("/foo/*", (ctx) => {
    // 响应：GET /foo/bar, /foo/bar/baz 等
    return new Response("foo");
  });
```

Fresh 支持完整的
[`URLPattern`](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API)
语法来设置路径名。

## 路由匹配优先级

路由按以下顺序匹配：

1. **静态路由**（精确路径匹配，如 `/about`）首先检查，始终优先。
2. **动态路由**（如 `/posts/:id` 这样的模式）按照注册顺序检查。第一个匹配的路由获胜。

这意味着动态路由的注册顺序很重要：

```ts main.ts
const app = new App()
  // 由于先注册，因此先检查
  .get("/posts/featured", () => new Response("Featured posts"))
  // 后检查——由于上面已经处理，不会匹配 "/posts/featured"
  .get("/posts/:id", (ctx) => new Response(`Post: ${ctx.params.id}`));
```

## HTTP 方法处理器

Fresh 通过 `.get()`、`.post()`、`.put()`、`.delete()`、`.head()`、`.patch()` 和 `.options()` 提供特定于方法的路由注册。每个方法只响应其匹配的 HTTP 动词。

使用 `.all()` 响应任何 HTTP 方法：

```ts main.ts
app.all("/api/health", () => new Response("ok"));
```

如果路由注册了 `GET` 但收到 `POST` 请求，Fresh 返回 `405 Method Not Allowed`（方法不允许）响应。如果没有定义专门的 `HEAD` 处理器，`HEAD` 请求会自动回退到 `GET` 处理器。

## 基于文件的路由处理器

在基于文件的路由中，导出一个带有特定方法函数的 `handlers` 对象：

```ts routes/api/users.ts
import { define } from "@/utils.ts";

export const handlers = define.handlers({
  GET(ctx) {
    return new Response(JSON.stringify({ users: [] }), {
      headers: { "Content-Type": "application/json" },
    });
  },
  POST(ctx) {
    return new Response("Created", { status: 201 });
  },
});
```

要处理所有方法，可以改为导出一个单一函数：

```ts routes/api/health.ts
import { define } from "@/utils.ts";

export const handlers = define.handlers((ctx) => {
  return new Response(`Received a ${ctx.req.method} request`);
});
```

有关基于文件的路由约定的更多信息，请参阅[文件路由](/docs/concepts/file-routing)。
