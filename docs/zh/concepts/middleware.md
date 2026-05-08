---
description: |
  Add middleware routes to intercept requests or responses for analytics purposes, access control, or anything else.
---

中间件是一个函数，它接收一个包含[`请求`](https://developer.mozilla.org/en-US/docs/Web/API/Request)的[`上下文`](/docs/concepts/context)对象，并返回一个[`响应`](https://developer.mozilla.org/en-US/docs/Web/API/Response)。中间件通常用于设置 HTTP 标头、测量响应时间或获取数据并将其传递给另一个中间件。

```tsx main.ts
const app = new App<{ greeting: string }>()
  .use((ctx) => {
    // Middleware to pass data
    ctx.state.greeting = "Hello world";
    return ctx.next();
  })
  .use(async (ctx) => {
    // Middleware to add a HTTP header
    const res = await ctx.next();
    res.headers.set("server", "fresh server");
    return res;
  })
  // A handler is a form of middleware that responds. Here we
  // render HTML and return it.
  .get("/", (ctx) => {
    return ctx.render(<h1>{ctx.state.greeting}</h1>);
  });
```

中间件可以按您想要的方式链接和组合。它们是在服务器上使 HTTP 相关逻辑可复用的绝佳方式。

## 中间件辅助函数

使用 `define.middleware()` 辅助函数来获取开箱即用的类型定义：

```ts middleware/my-middleware.ts
import { define } from "../utils.ts";

const middleware = define.middleware(async (ctx) => {
  console.log("my middleware");
  return await ctx.next();
});
```

## 内置中间件

Fresh 自带以下内置中间件：

- [cors()](/docs/plugins/cors) - 设置 CORS HTTP 标头
- [csrf()](/docs/plugins/csrf) - CSRF 保护
- [csp()](/docs/plugins/csp) - 内容安全策略标头
- [trailingSlashes()](/docs/plugins/trailing-slashes) - 强制尾部斜杠

## 基于文件系统路由的中间件

通过[基于文件系统路由](/docs/concepts/file-routing)，您可以在 `routes/` 文件夹或其任何子文件夹中的 `_middleware.ts` 文件中定义中间件。

```ts routes/_middleware.ts
import { define } from "../utils.ts";

export default define.middleware(async (ctx) => {
  console.log("my middleware");
  return await ctx.next();
});
```

您也可以导出一个中间件数组：

```ts routes/_middleware.ts
import { define } from "../utils.ts";

const middleware1 = define.middleware(async (ctx) => {
  console.log("A");
  return await ctx.next();
});

const middleware2 = define.middleware(async (ctx) => {
  console.log("B");
  return await ctx.next();
});

export default [middleware1, middleware2];
```
