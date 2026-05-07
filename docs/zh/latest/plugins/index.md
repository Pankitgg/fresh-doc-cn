---
description: "使用插件扩展 Fresh"
---

Fresh 本身可以通过 [`App`](/docs/concepts/app) 类或 `Builder` 类上可用的方法进行扩展。Fresh 本身的大多数功能都是使用这些 API 构建的。

## 自定义中间件

如果您需要修改请求、添加 HTTP 头或通过 `ctx.state` 向其他
[中间件](/docs/concepts/middleware) 传递额外数据，那么使用中间件是最佳选择。

```ts middleware/fresh.ts
const addXFreshHeader = define.middleware(async (ctx) => {
  const res = await ctx.next();
  res.headers.set("X-Fresh", "served by Fresh");
  return res;
});
```

了解更多关于 [中间件](/docs/concepts/middleware) 的信息。

## 创建可复用的插件

由于 Fresh 插件只是中间件和路由处理器，创建可复用的插件就像导出一个返回中间件的函数一样简单：

```ts plugins/request-id.ts
import type { MiddlewareFn } from "fresh";

export function requestId(): MiddlewareFn<{ requestId: string }> {
  return async (ctx) => {
    ctx.state.requestId = crypto.randomUUID();
    const res = await ctx.next();
    res.headers.set("X-Request-Id", ctx.state.requestId);
    return res;
  };
}
```

```ts main.ts
import { App, staticFiles } from "fresh";
import { requestId } from "./plugins/request-id.ts";

const app = new App()
  .use(staticFiles())
  .use(requestId())
  .fsRoutes();
```

对于更复杂的插件，您可以组合多个中间件、添加路由，或使用
[`Builder`](/docs/advanced/builder) 钩子进行构建时处理。

## 内置插件

Fresh 附带以下插件：

- [cors()](/docs/plugins/cors) - 设置 CORS HTTP 头
- [csrf()](/docs/plugins/csrf) - CSRF 保护
- [csp()](/docs/plugins/csp) - 内容安全策略头
- [trailingSlashes()](/docs/plugins/trailing-slashes) - 强制尾部斜杠行为