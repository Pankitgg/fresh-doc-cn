---
description: |
  添加中间件路由来拦截请求或响应，用于分析目的、访问控制或其他任何用途。
---

# 中间件

中间件是一个函数，它接收带有 [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) 的 [`Context`](/docs/concepts/context) 对象并返回 [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)。它们通常用于设置 HTTP 头、测量响应时间或获取数据并将其传递给另一个中间件。

```tsx main.ts
const app = new App<{ greeting: string }>()
  .use((ctx) => {
    // 传递数据的中间件
    ctx.state.greeting = "Hello world";
    return ctx.next();
  })
  .use(async (ctx) => {
    // 添加 HTTP 头的中间件
    const res = await ctx.next();
    res.headers.set("server", "fresh server");
    return res;
  })
  // 处理程序是一种响应的中间件形式。这里我们渲染 HTML 并返回它。
  .get("/", (ctx) => {
    return ctx.render(<h1>{ctx.state.greeting}</h1>);
  });
```

中间件可以以任何您想要的方式链接和组合。它们是使 HTTP 相关逻辑在服务器上可重用的绝佳方式。

## 中间件助手

使用 `define.middleware()` 助手来获得开箱即用的类型：

```ts middleware/my-middleware.ts
import { define } from "../utils.ts";

const middleware = define.middleware(async (ctx) => {
  console.log("我的中间件");
  return await ctx.next();
});
```

## 内置中间件

Fresh 内置了以下中间件：

- [cors()](/docs/plugins/cors) - 设置 CORS HTTP 头
- [csrf()](/docs/plugins/csrf) - CSRF 保护
- [csp()](/docs/plugins/csp) - 内容安全策略头
- [trailingSlashes()](/docs/plugins/trailing-slashes) - 强制尾部斜杠

## 基于文件系统的中间件

使用[基于文件系统的路由](/docs/concepts/file-routing)，您可以在 `routes/` 文件夹或其任何子文件夹中的 `_middleware.ts` 文件中定义中间件。

```ts routes/_middleware.ts
import { define } from "../utils.ts";

export default define.middleware(async (ctx) => {
  console.log("我的中间件");
  return await ctx.next();
});
```

您也可以导出中间件数组：

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
