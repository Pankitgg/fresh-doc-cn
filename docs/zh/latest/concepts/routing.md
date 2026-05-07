---
description: |
  Fresh 中的路由工作原理，包括路由模式、匹配优先级、特定方法的处理程序和 URLPattern 支持。
---

# 路由

路由定义哪些中间件和路由应该响应特定的请求。

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
2. **动态路由**（模式如 `/posts/:id`）按注册顺序检查。第一个匹配的路由获胜。

这意味着动态路由的注册顺序很重要：

```ts main.ts
const app = new App()
  // 这首先被检查，因为它先注册
  .get("/posts/featured", () => new Response("精选文章"))
  // 这第二个被检查 - 不会匹配 "/posts/featured"，因为它
  // 已经被上面的处理了
  .get("/posts/:id", (ctx) => new Response(`文章: ${ctx.params.id}`));
```

## HTTP 方法处理程序

Fresh 通过 `.get()`、`.post()`、`.put()`、`.delete()`、`.head()`、`.patch()` 和 `.options()` 提供特定方法的路由注册。每个方法只响应其匹配的 HTTP 动词。

使用 `.all()` 来响应任何 HTTP 方法：

```ts main.ts
app.all("/api/health", () => new Response("ok"));
```

如果为 `GET` 注册的路由收到 `POST` 请求，Fresh 返回 `405 Method Not Allowed` 响应。如果没有定义专用的 `HEAD` 处理程序，`HEAD` 请求会自动回退到 `GET` 处理程序。

## 基于文件的路由处理程序

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
    return new Response("已创建", { status: 201 });
  },
});
```

要处理所有方法，改为导出一个单独的函数：

```ts routes/api/health.ts
import { define } from "@/utils.ts";

export const handlers = define.handlers((ctx) => {
  return new Response(`收到 ${ctx.req.method} 请求`);
});
```

有关基于文件的路由约定的更多信息，请参阅[文件路由](/docs/concepts/file-routing)。
