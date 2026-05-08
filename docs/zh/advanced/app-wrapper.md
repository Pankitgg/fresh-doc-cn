---
description: |
  App wrapper 定义了所有页面共享的最外层 HTML 结构——包括 <html>、<head> 和 <body> 标签。
---

App wrapper 是 Fresh 渲染层级中最外层的组件。它定义了每个页面共享的 `<html>`、`<head>` 和 `<body>` 标签。它只在服务器端渲染。

## 何时使用 App Wrapper

在以下情况下使用 App Wrapper：

- 设置文档语言（`<html lang="zh">`）
- 引入全局 `<meta>` 标签、字体或样式表
- 为每个页面添加分析脚本或结构化数据
- 设置全局 `<body>` 类或数据属性
- 提供一致的 HTML 骨架，而无需在每个布局中重复

如果你使用[基于文件的路由](/docs/concepts/file-routing)，请创建 `routes/_app.tsx` 文件。否则，请使用 `app.appWrapper()` 以编程方式注册。

## 基本示例

```tsx routes/_app.tsx
import { define } from "../utils.ts";

export default define.page(({ Component, url }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
```

## 编程式注册

当你使用 `new App()` 而不是基于文件的路由来构建应用时：

```tsx
function AppWrapper({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>My App</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}

app.appWrapper(AppWrapper);
```

每个 [`App`](/docs/concepts/app) 实例只支持一个 App Wrapper。

## 它在渲染层级中的位置

当 Fresh 渲染页面时，组件的嵌套结构如下：

1. **App Wrapper**（`_app.tsx`）——最外层，提供 `<html>`/`<head>`/`<body>`
2. **[布局](/docs/concepts/layouts)**（`_layout.tsx`）——共享的页面外壳（导航栏、侧边栏、页脚）
3. **页面组件**——路由本身

App Wrapper 包裹所有内容。布局位于其内部，并包裹页面。

## 访问请求数据

App Wrapper 接收与页面组件相同的 props——`url`、`state`、`params` 等。这对于条件逻辑很有用：

```tsx routes/_app.tsx
import { define } from "../utils.ts";

export default define.page(({ Component, url, state }) => {
  return (
    <html lang="en" data-theme={state.theme ?? "light"}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
        <meta property="og:url" content={url.href} />
        <link rel="canonical" href={url.href} />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
```

## 跳过 App Wrapper

某些路由可能需要完全绕过 App Wrapper——例如，返回 JSON 的 API 路由，或需要完全不同 HTML 结构的页面。使用路由配置中的 `skipAppWrapper`：

```tsx routes/embed.tsx
import { type RouteConfig } from "fresh";
import { define } from "../utils.ts";

export const config: RouteConfig = {
  skipAppWrapper: true,
};

export default define.page(() => {
  return (
    <html>
      <head>
        <title>Embed</title>
      </head>
      <body>
        <div id="widget">Embeddable widget</div>
      </body>
    </html>
  );
});
```

使用编程式布局时，将 `skipAppWrapper` 作为选项传递：

```ts main.ts
app.layout("/embed", EmbedLayout, { skipAppWrapper: true });
```
