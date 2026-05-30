---
description: |
  向路由添加自定义处理程序以自定义 HTTP 头、实现 API 路由、为渲染页面获取数据，或处理表单提交。
---

路由实际上由两部分组成：处理程序和页面组件。到目前为止，本章只讨论了页面组件。

处理程序是 `Request => Response` 或 `Request => Promise<Response>` 形式的函数，当对特定路由发出请求时会被调用。可以有一个处理程序覆盖所有 HTTP 方法，或者每个方法一个处理程序。

处理程序可以访问支持路由请求的 `Request` 对象，并且必须返回一个 `Response` 对象。响应对象可以手动创建（例如 API 路由的 JSON 响应），也可以通过渲染页面组件创建。默认情况下，所有未定义自定义处理程序的路由都使用一个只渲染页面组件的默认处理程序。

要在路由模块中定义处理程序，必须将其作为名为 `handler` 的命名导出导出。处理程序可以有两种形式：普通函数（所有 HTTP 方法的通配符）或普通对象，其中每个属性都是一个以其处理的 HTTP 方法命名的函数。

这是一个自定义 `GET` 处理程序的示例，它渲染页面组件，然后在返回之前向响应添加自定义头：

```tsx routes/about.tsx
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>关于</h1>
      <p>这是关于页面。</p>
    </main>
  );
}
```

请注意，处理程序不需要调用 `ctx.render()`。此功能可用于创建 API 路由。这是一个返回随机 UUID 作为 JSON 响应的 API 路由：

```ts routes/api/random-uuid.ts
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req) {
    const uuid = crypto.randomUUID();
    return new Response(JSON.stringify(uuid), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
```

处理程序可以做更多事情，包括从数据库或外部 API 获取数据并将其传递给路由。
