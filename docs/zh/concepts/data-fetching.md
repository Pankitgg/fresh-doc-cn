---
description: |
  Load data on the server in handlers and pass it to page components with full type safety.
---

Fresh 中的数据获取发生在服务器端。处理器加载数据并通过 `page()` 辅助函数将其传递给页面组件。这样可以将 API 密钥、数据库连接和敏感逻辑排除在浏览器之外。

## 处理器与页面组件

处理器获取数据并使用 `page()` 返回。页面组件通过 `props.data` 接收数据：

```tsx routes/projects/[id].tsx
import { HttpError, page } from "fresh";
import { define } from "@/utils.ts";

interface Data {
  project: { name: string; stars: number };
}

export const handler = define.handlers({
  async GET(ctx) {
    const project = await db.projects.findOne(ctx.params.id);
    if (!project) {
      throw new HttpError(404);
    }
    return page({ project });
  },
});

export default define.page<typeof handler>(({ data }) => {
  return (
    <div>
      <h1>{data.project.name}</h1>
      <p>{data.project.stars} stars</p>
    </div>
  );
});
```

`define.page<typeof handler>` 泛型将处理器的返回类型关联到组件的 props，让你在 `data` 上获得完整的自动补全。

## 设置响应头和状态码

向 `page()` 传递选项来自定义 HTTP 响应：

```ts
return page(data, {
  status: 201,
  headers: { "Cache-Control": "public, max-age=3600" },
});
```

## 异步页面组件

对于更简单的场景，你可以直接在异步组件中获取数据，而无需单独的处理器：

```tsx routes/projects/[id].tsx
import { HttpError } from "fresh";
import { define } from "@/utils.ts";

export default define.page(async (ctx) => {
  const project = await db.projects.findOne(ctx.params.id);
  if (!project) {
    throw new HttpError(404);
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.stars} stars</p>
    </div>
  );
});
```

当你不需要处理器和组件之间的类型安全数据桥接时，这种方式很方便。

## 从中间件传递状态

[中间件](/docs/concepts/middleware) 可以在 `ctx.state` 上设置值，这些值可供所有下游处理器和组件使用：

```ts routes/_middleware.ts
import { define } from "@/utils.ts";

export default define.middleware(async (ctx) => {
  const session = await getSession(ctx.req);
  ctx.state.user = session?.user ?? null;
  return ctx.next();
});
```

```tsx routes/dashboard.tsx
import { page } from "fresh";
import { define } from "@/utils.ts";

export const handler = define.handlers({
  GET(ctx) {
    if (!ctx.state.user) {
      return ctx.redirect("/login");
    }
    return page();
  },
});

export default define.page((ctx) => {
  return <h1>Welcome, {ctx.state.user.name}</h1>;
});
```

## 页面 props 中可用的内容

页面组件接收以下属性：

| 属性        | 类型                     | 描述                                      |
| ----------- | ------------------------ | ----------------------------------------- |
| `data`      | `Data`                   | 处理器通过 `page()` 返回的数据             |
| `url`       | `URL`                    | 请求 URL                                  |
| `params`    | `Record<string, string>` | 路由参数（例如 `:id`）                    |
| `req`       | `Request`                | 原始 HTTP 请求                            |
| `state`     | `State`                  | 中间件设置的共享状态                       |
| `config`    | `ResolvedFreshConfig`    | 已解析的 Fresh 配置                       |
| `route`     | `string \| null`         | 匹配的路由模式                             |
| `info`      | `Deno.ServeHandlerInfo`  | 服务器连接信息                            |
| `error`     | `unknown \| null`        | 捕获的错误（在错误页面上）                  |
| `isPartial` | `boolean`                | 是否为部分请求                            |
| `Component` | `FunctionComponent`      | 子组件（在布局中）                        |
