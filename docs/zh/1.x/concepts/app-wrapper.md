---
description: |
  添加全局应用包装器以提供通用元标签或应用路由的上下文。
---

应用包装器定义在 `routes/` 文件夹中的 `_app.tsx` 文件中，通常用于创建 HTML 文档的外部结构。它必须包含一个默认导出，该导出是一个常规的 Preact 组件。每个应用程序只允许一个这样的包装器。

除了其他一些东西外，还要通过 props 接收要包装的组件。这允许引入一个全局容器，该容器可以用作模板，该模板可以根据 state 和 params 进行条件化。请注意，通过中间件设置的任何 state 都可以通过 `props.state` 获得。

```tsx routes/_app.tsx
import { PageProps } from "$fresh/server.ts";

export default function App({ Component, state }: PageProps) {
  // 在这里处理 state
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>我的 Fresh 应用</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
```

## 异步应用包装器

与路由和布局类似，应用包装器可以是异步的。这会更改函数签名，使第一个参数是 `Request` 实例，第二个参数是 `FreshContext`。

```tsx routes/_app.tsx
import { FreshContext } from "$fresh/server.ts";

export default async function App(req: Request, ctx: FreshContext) {
  const data = await loadData();

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>我的 Fresh 应用</title>
      </head>
      <body>
        <h1>你好 {data.name}</h1>
        <ctx.Component />
      </body>
    </html>
  );
}
```

### 定义辅助函数

为了更快地输入异步应用包装器，Fresh 包含一个 `defineApp` 辅助函数，它已经为你推断出正确的类型。

```tsx routes/_app.tsx
import { defineApp } from "$fresh/server.ts";

export default defineApp(async (req, ctx) => {
  const data = await loadData();

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>我的 Fresh 应用</title>
      </head>
      <body>
        <h1>你好 {data.name}</h1>
        <ctx.Component />
      </body>
    </html>
  );
});
```

## 禁用应用包装器

可以在路由或布局基础上跳过渲染应用包装器。要做到这一点，请将 `skipAppWrapper: true` 设置到布局或路由配置中。

```tsx routes/my-special-route.tsx
import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  skipAppWrapper: true, // 在渲染期间跳过应用包装器
};

export default function Page() {
  // ...
}
```
