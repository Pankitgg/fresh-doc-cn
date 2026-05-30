---
description: |
  添加布局以提供通用元标签、应用子路由的上下文和通用布局。
---

布局定义在 `routes/` 文件夹下任何子目录（任何级别）中的 `_layout.tsx` 文件中。它必须包含一个默认导出，该导出是一个常规的 Preact 组件。每个子目录只允许一个这样的布局。

```txt Project structure
<project root>
└── routes
    ├── sub
    │   ├── page.tsx
    │   └── index.tsx
    ├── other
    │   ├── _layout.tsx  # 将在 `routes/_layout.tsx` 之上应用
    │   └── page.tsx
    ├── _layout.tsx  # 将应用于所有路由
    └── _app.tsx
```

除了其他一些东西外，还要通过 props 接收要包装的组件。这允许引入一个全局容器，该容器可以用作模板，该模板可以根据 state 和 params 进行条件化。请注意，通过中间件设置的任何 state 都可以通过 `props.state` 获得。

```tsx routes/sub/_layout.tsx
import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // 在这里处理 state
  return (
    <div class="layout">
      <Component />
    </div>
  );
}
```

## 异步布局

如果你在渲染布局之前需要异步获取数据，你可以使用异步布局来做到这一点。

```tsx routes/sub/_layout.tsx
import { FreshContext } from "$fresh/server.ts";

export default async function Layout(req: Request, ctx: FreshContext) {
  // 在这里处理 state
  const data = await loadData();

  return (
    <div class="layout">
      <p>{data.greeting}</p>
      <ctx.Component />
    </div>
  );
}
```

### 定义辅助函数

为了更快地编写异步布局，Fresh 提供了一个 `defineLayout` 辅助函数，它会自动为函数参数推断正确的类型。

```tsx routes/greet/_layout.tsx
import { defineLayout } from "$fresh/server.ts";

export default defineLayout(async (req, ctx) => {
  const data = await loadData();

  return (
    <div class="layout">
      <p>{data.greeting}</p>
      <ctx.Component />
    </div>
  );
});
```

## 退出布局继承机制

有时你想为特定路由退出布局继承机制。这可以通过路由配置来完成。想象这样的目录结构：

```txt Project structure
└── <root>/routes
    ├── sub
    │   ├── _layout_.tsx
    │   ├── special.tsx  # 不应继承布局
    │   └── index.tsx
    └── _layout.tsx
```

要使 `routes/sub/special.tsx` 退出渲染布局，我们可以设置 `skipInheritedLayouts: true`。

```tsx routes/sub/special.tsx
import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true, // 跳过已继承的布局
};

export default function MyPage() {
  return <p>Hello world</p>;
}
```

你可以在布局文件中跳过已继承的布局：

```tsx routes/special/_layout.tsx
import { LayoutConfig } from "$fresh/server.ts";

export const config: LayoutConfig = {
  skipInheritedLayouts: true, // 跳过已继承的布局
};

export default function MyPage() {
  return <p>Hello world</p>;
}
```
