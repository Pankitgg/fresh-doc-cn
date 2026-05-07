---
description: |
  Define 辅助函数是一种不那么 TypeScript 风格的方式来声明 [中间件](/docs/concepts/middleware)、路由和 [布局](/docs/concepts/layouts)
---

Define 辅助函数可用于减少您必须自己输入的类型数量。它们完全是可选的，因为一些开发者喜欢类型的显式性，另一些则喜欢 `define.*` 辅助函数的便利性。

不使用 define 辅助函数：

```ts util.ts
export interface State {
  foo: string;
}
```

```ts middleware.ts
import type { State } from "./util.ts";

export async function myMiddleware(ctx: Context<State>): Promise<Response> {
  return new Response("hello " + ctx.state.foo);
}

export async function otherMiddleware(ctx: Context<State>): Promise<Response> {
  return new Response("other " + ctx.state.foo);
}
```

使用 define 辅助函数：

```ts util.ts
import { createDefine } from "fresh";

// 设置，在一个文件中执行一次，然后在其他地方导入它。
export const define = createDefine<{ foo: string }>();
```

```ts middleware.ts
import { define } from "./util.ts";

// 使用
export const myMiddleware = define.middleware((ctx) => {
  return new Response("hello " + ctx.state.foo);
});

export const otherMiddleware = define.middleware((ctx) => {
  return new Response("other " + ctx.state.foo);
});
```

## 文件路由

`define.*` 辅助函数包括 `define.handler()` 和 `define.page()` 函数，以便 TypeScript 可以轻松地在两者之间建立关系。这样您可以以类型安全的方式将数据从处理器传递到组件。

```tsx routes/index.tsx
export const handler = define.handlers({
  GET(ctx) {
    return { data: { foo: "Deno" } };
  },
});

// 当您输入 `props.data.*` 时，您将获得自动补全
export default define.page<typeof handler>((props) => {
  return (
    <div>
      <h1>I like {props.data.foo}</h1>
    </div>
  );
});
```

还有一个用于 [布局](/docs/concepts/layouts) 的 `define.layout()` 辅助函数：

```tsx
export default define.layout((props) => {
  return (
    <div>
      <h1>I like {props.state.foo}</h1>
    </div>
  );
});
```