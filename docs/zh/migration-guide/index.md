---
description: |
  Fresh 2.x 迁移指南
---

我们尽量将 Fresh 2 中的破坏性更改保持在最少，但有些更改需要手动更新。Fresh 2 带来了许多提升开发体验的[改进](https://deno.com/blog/an-update-on-fresh)，使扩展和调整 Fresh 变得更加容易。作为升级我们自己的应用程序的一部分，我们创建了这个升级指南。

使用本指南将 Fresh 1.x 应用程序迁移到 Fresh 2。

## 应用自动更新

大多数更改可以通过更新脚本自动应用。在项目目录中运行它来启动更新：

```sh Terminal
deno run -Ar jsr:@fresh/update
```

这将自动应用 Fresh 2 中的大多数 API 更改，例如将 `$fresh/server.ts` 导入更改为 `fresh`。

## 准备 `main.ts` 和 `dev.ts`

配置 Fresh 不再需要专用的配置文件。您可以删除 `fresh.config.ts` 文件。`fresh.gen.ts` 清单文件也不再需要。

```diff Project structure
  <project root>
  ├── routes/
- ├── dev.ts
- ├── fresh.gen.ts
- ├── fresh.config.ts
  └── main.ts
```

Fresh 2 非常注意确保仅在开发期间需要的代码与生产代码分离。这种分离使部署包更小、上传更快，并允许它们在生产环境中更快启动。

### 用 `vite.config.ts` 替换 `dev.ts`

删除 `dev.ts` 并创建 `vite.config.ts` 文件。将您的自定义 Fresh 配置传递给 [Fresh Vite 插件](/docs/advanced/vite)。

```ts vite.config.ts
import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    fresh(),
    tailwindcss(),
  ],
});
```

### 添加 `client.ts` 文件

`client.ts` 文件是客户端代码的主入口文件。由于 Vite 需要所有内容都成为内部模块图的一部分才能实现热模块替换，这也是导入 CSS 资源的地方。

```diff Project structure
  <project root>
  ├── routes/
+ ├── client.ts
  ├── vite.config.ts
  └── main.ts
```

```ts client.ts
// 在此导入 CSS 文件以使热模块替换生效。
import "./assets/styles.css";
```

### 更新 `main.ts`

同样，与在生产环境中运行 Fresh 相关的配置可以传递给 `new App()`：

```ts main.ts
import { App, staticFiles } from "fresh";

export const app = new App()
  // 添加静态文件服务中间件
  .use(staticFiles())
  // 启用基于文件系统的路由
  .fsRoutes();
```

## 合并错误页面

`_500.tsx` 和 `_404.tsx` 模板已统一为单个 `_error.tsx` 模板。详见[错误页面](/docs/advanced/error-handling)。

```diff Project structure
  └── <root>/routes/
-     ├── _404.tsx
-     ├── _500.tsx
+     ├── _error.tsx
      └── ...
```

在 `_error.tsx` 模板中，您可以根据错误或状态码显示不同的内容，代码如下：

```tsx routes/_error.tsx
export default function ErrorPage(props: PageProps) {
  const error = props.error; // 包含抛出的 Error 或 HttpError
  if (error instanceof HttpError) {
    const status = error.status; // HTTP 状态码

    // 渲染 404 未找到页面
    if (status === 404) {
      return <h1>404 - Page not found</h1>;
    }
  }

  return <h1>Oh no...</h1>;
}
```

## 更新任务

服务器入口点现在由 Fresh 生成，以获得更优的启动时间。这意味着您需要在以生产模式启动 Fresh 时更新任务。

以生产模式启动 Fresh：

```diff
- deno run -A main.ts
+ deno serve -A _fresh/server.js
```

您可能在该命令中将其放在 `deno.json` 作为任务。请相应地进行更新。

```diff deno.json
  {
    "tasks":
-     "dev": "deno run -A dev.ts",
-     "build": "deno run -A dev.ts build",
-     "preview": "deno run -A main.ts"
+     "dev": "vite",
+     "build": "vite build",
+     "preview": "deno serve -A _fresh/server.js"
   }
  }
```

## 更新导入

将 `jsr:@fresh/plugin-vite` 和 `npm:vite` 添加到 `deno.json` 文件的 `imports` 中，可以手动添加或使用此命令：

```shell
deno install npm:vite jsr:@fresh/plugin-vite
```

在大多数情况下这就足够了。如果您仍然遇到问题，您可能还需要更新 `compilerOptions` 和其他部分。要获得完整的最新示例，请生成一个新的应用程序（参见下面的"通过示例迁移"），然后进行比较。

> 注意：使用 Vite 时，不需要 Fresh 的 Tailwind 插件（`jsr:@fresh/plugin-tailwindcss*`）；请改用 Vite 集成（例如 `npm:@tailwindcss/vite`）。

## 更新部署设置

Fresh 2 需要在部署期间构建资源，而不是按需构建。作为部署过程的一部分运行 `deno task build` 或 `deno run build` 命令。

如果您已经设置了 Fresh 1.x 的"预构建"，则不需要任何更改。

## 尾部斜杠处理

尾部斜杠的处理已提取为可选中间件，您可以根据需要添加。此中间件可用于确保 URL 始终以斜杠结尾或永远不会以斜杠结尾。

```diff main.ts
-  import { App, staticFiles } from "fresh";
+  import { App, staticFiles, trailingSlashes } from "fresh";

  export const app = new App({ root: import.meta.url })
    .use(staticFiles())
+   .use(trailingSlashes("never"));
```

## 自动更新

> [info]：此处列出的更改在运行 [`@fresh/update`](https://jsr.io/@fresh/update) 脚本时会自动应用，您不需要自己进行这些更改。

### 统一的中间件签名

[中间件](/docs/concepts/middleware)、处理程序和路由组件的签名已统一，看起来都相同。它们不再接收两个参数，而是接收一个参数。`Request` 对象作为 `ctx.req` 存储在上下文对象上。

```diff middleware.ts
- const middleware = (req, ctx) => new Response("ok");
+ const middleware = (ctx) => new Response("ok");
```

处理程序也是如此：

```diff route/page.tsx
  export const handler = {
-   GET(req, ctx) {
+   GET(ctx) {
      return new Response("ok");
    },
  };
```

……以及异步路由组件：

```diff routes/my-page.tsx
-  export default async function MyPage(req: Request, ctx: RouteContext) {
+  export default async function MyPage(props: PageProps) {
    const value = await loadFooValue();
    return <p>foo is: {value}</p>;
  }
```

各种上下文接口已合并简化：

| Fresh 1.x                                     | Fresh 2.x                           |
| --------------------------------------------- | ----------------------------------- |
| `AppContext`、`LayoutContext`、`RouteContext` | [`Context`](/docs/concepts/context) |

### 上下文方法

`ctx.renderNotFound()` 方法已被删除，改用抛出 `HttpError` 实例。这允许所有中间件选择性地参与错误处理。其他属性已移动或重命名，以便更轻松地在内部重用现有对象，作为一项小性能优化。

| Fresh 1.x              | Fresh 2.x                  |
| ---------------------- | -------------------------- |
| `ctx.renderNotFound()` | `throw new HttpError(404)` |
| `ctx.basePath`         | `ctx.config.basePath`      |
| `ctx.remoteAddr`       | `ctx.info.remoteAddr`      |

### `ctx.render()`

`ctx.render()` 的*含义*已发生变化。在 Fresh 1.x 中，这用于将数据从处理程序传递到组件。在 Fresh 2.x 中，此函数已泛化为渲染 JSX，因此不再需要。

Fresh 1.x：

```ts
export const handler = {
  async GET(req, ctx) {
    const data = await Query();
    await ctx.render({ value: data });
  },
};

export default function Page({ data }) {
  // ...
}
```

Fresh 2（已移除）：

```ts
export const handler = {
  async GET(ctx) {
    const data = await Query();
    return { data: { value: data } };
  },
};

export default function Page({ data }) {
  // ...
}
```

要渲染一般 JSX，请使用 `ctx.render()` 函数：

```tsx
const app = new App()
  .get("/", (ctx) => ctx.render(<h1>hello</h1>));
```

## `createHandler`

`createHandler` 函数常用于启动 Fresh 进行测试。现在可以通过 Vite 的 `createBuilder` 函数完成此操作。详见[测试页面](/docs/testing)。

## `deno compile`

如果您正在使用 `deno compile` 从 Fresh 应用程序生成二进制文件，请确保[更新命令](/docs/deployment/deno-compile)来生成二进制文件。

## 获取帮助

### 1. 通过示例迁移

如果在升级应用程序时遇到问题，首先尝试启动一个新的 Fresh 2 项目并查看新结构。

例如：`mkdir fresh2-demo && cd fresh2-demo && deno run -Ar jsr:@fresh/init`

### 2. 记录问题

如果您仍然无法解决迁移问题。请通过在此处创建 issue 来联系我们 https://github.com/denoland/fresh/issues/new 。这样我们就可以为每个人改进这个迁移指南。
