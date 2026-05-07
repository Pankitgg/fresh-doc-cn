---
description: |
  Partials 允许页面的某些区域在不重新加载浏览器的情况下更新内容。它们使您的网站感觉更像应用，因为只会更新需要更新的部分。
---

# Partials

Partials 允许页面的某些区域在不重新加载浏览器的情况下更新内容。它们使您的网站感觉更像应用，因为只会更新需要更新的部分。

## 启用 Partials

通过向 HTML 元素添加 `f-client-nav` 属性，并将页面中的一个或多个区域包装在 `<Partial name="my-partial">` 组件中来启用 partials。

最快的入门方法是在 `routes/_app.tsx` 中为每个页面启用 partials，方法如下：

```diff routes/_app.tsx
  import { define } from "../utils.ts";
+ import { Partial } from "fresh/runtime";

  export default define.page(function App({ Component }) {
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>My Fresh app</title>
        </head>
-       <body>
+       <body f-client-nav>
+         <Partial name="body">
            <Component />
+         </Partial>
        </body>
      </html>
    );
  });
```

通过添加 `f-client-nav` 属性，我们为 `<body>` 标签下的每个元素启用 partials。要将页面的某个区域标记为 partial，我们使用唯一的名称将其包装在 `<Partial>` 组件中。

在幕后，当用户点击 `<a>` 标签时，Fresh 会获取新页面，并仅从 HTML 响应中提取相关内容。当它找到匹配的 partial 区域时，会更新 partial 内的内容。

> [info]: `<Partial>` 组件的 `name` 属性在 Partials 中应该是唯一的。这就是 Fresh 知道响应的哪些部分需要放在当前页面上的方式。

> [info]: 传递 `f-client-nav={false}` 会禁用当前节点下所有元素的客户端导航。

### 优化 partial 请求

默认情况下，设置 `f-client-nav` 后，Fresh 会获取完整的下一页，并只从响应中提取相关部分。我们可以通过只渲染需要的部分来进一步优化这种模式，而不是总是渲染完整的页面。这是通过向链接添加 `f-partial` 属性来完成的。

```diff routes/_app.tsx
- <a href="/docs/routes">Routes</a>
+ <a href="/docs/routes" f-partial="/partials/docs/routes">Routes</a>
```

当存在 `f-partial` 属性时，Fresh 会导航到 `href` 属性中定义的页面 URL，但会从 `f-partial` 中指定的 URL 获取更新的 UI。这可以是一个高度优化的路由，只提供您关心的内容。

让我们以一个典型的文档页面布局为例。它通常有一个主内容区域和一个侧边栏，其中包含切换到文档页面的链接（这里标记为绿色）。

<!-- 典型文档页面的草图布局，左侧边栏由绿色链接组成，右侧是主内容区域。主内容区域标记为 Partial docs-content: /docs/fresh-partial-docs.png -->

此类页面的代码（不包括样式）可能如下所示：

```tsx routes/docs/[id].tsx
import { define } from "../../utils.ts";

export default define.page(async (ctx) => {
  const content = await loadContent(ctx.params.id);

  return (
    <div>
      <aside>
        <a href="/docs/page1">Page 1</a>
        <a href="/docs/page2">Page 2</a>
      </aside>
      <Partial name="docs-content">
        {content}
      </Partial>
    </div>
  );
});
```

一个只渲染内容而不是带有侧边栏的外部布局的最佳路由可能分别如下所示。

```tsx routes/partials/docs/[id].tsx
import { define } from "../utils.ts";
import { Partial } from "fresh/runtime";

// 我们只想要渲染内容，所以禁用
// `_app.tsx` 模板以及任何可能
// 继承的布局
export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default define.page(async (ctx) => {
  const content = await loadContent(ctx.params.id);

  // 只渲染新内容
  return (
    <Partial name="docs-content">
      {content}
    </Partial>
  );
});
```

通过添加 `f-partial` 属性，我们告诉 Fresh 从我们新添加的 `/partials/docs/[id].tsx` 路由获取内容。

```diff routes/docs/[id].tsx
  <aside>
-   <a href="/docs/page1">Page 1</a>
-   <a href="/docs/page2">Page 2</a>
+   <a href="/docs/page1" f-partial="/partials/docs/page1">Page 1</a>
+   <a href="/docs/page2" f-partial="/partials/docs/page2">Page 2</a>
  </aside>
```

有了这个设置，当点击两个链接中的任何一个时，Fresh 会导航到新页面，并*只*加载我们优化的 partial 路由渲染的内容。

> 目前，`f-partial` 的范围限于 `<a>`、`<button>` 和 `<form>` 元素。将来可能会扩展到更多元素。

## 同时发送多个 Partials

Fresh 中 partials 的一个巧妙方面是，响应可以根据需要返回任意数量的 partials。这样您就可以在一个 HTTP 响应中更新页面上多个不相关的区域。一个这样的场景是在线商店。

```tsx routes/partials/cart.tsx
export default function AddToCartPartial() {
  return (
    <>
      <Partial name="cart-items" mode="append" key={newItem.id}>
        {/* 在这里渲染新的购物车商品 */}
      </Partial>
      <Partial name="total-price">
        <p>总计: {totalPrice} €</p>
      </Partial>
    </>
  );
}
```

两个 partials 都将应用于当前页面。

## 替换模式

默认情况下，partial 内的所有内容都会被替换，但在某些情况下，您希望前置或追加新内容。这可以通过向 `Partial` 组件添加 `mode` 属性来实现。

- `replace` - 替换现有 partial 的内容（默认）
- `prepend` - 在现有内容之前插入新内容
- `append` - 在现有内容之后插入新内容

就个人而言，我们发现当 UI 显示日志消息或类似的列表数据时，`append` 模式非常有用。

```tsx routes/log.tsx
export default function LogView() {
  const lines = getNewLogLines();

  return (
    <Partial name="logs-list" mode="append" key={lines[0]}>
      {lines.map((line) => {
        return <li key={line}>{line}</li>;
      })}
    </Partial>
  );
}
```

> [warn]: 使用 `prepend` 或 `append` 模式时，您**必须**向 `<Partial>` 组件添加 `key` 属性。没有它，Preact 无法区分新子项和现有子项，导致微妙的渲染错误。如果 Fresh 检测到在 append/prepend partial 上缺少 key，它会记录警告。

## 视图过渡

Partial 更新可以使用浏览器的[视图过渡 API](/docs/advanced/view-transitions)进行动画处理。在 `f-client-nav` 旁边添加 `f-view-transition` 以启用页面之间的平滑动画过渡，无需 JavaScript 动画代码。

## 加载指示器

当 partial 请求正在进行时，您可能想要显示加载旋转器或禁用按钮。Fresh 通过 `_freshIndicator` 属性支持这一点。

将带有 `value` 属性的对象附加到任何触发 partial 导航的元素。Fresh 会在请求开始时将 `value` 设置为 `true`，在请求完成（或失败）时将其设置回 `false`。

```tsx
import { useSignal } from "@preact/signals";

function NavLink() {
  const loading = useSignal(false);

  return (
    <a
      href="/next-page"
      f-partial="/partials/next-page"
      ref={(el) => {
        if (el) el._freshIndicator = loading;
      }}
    >
      {loading.value ? "Loading..." : "Go"}
    </a>
  );
}
```

这适用于链接、表单和提交按钮。对于表单提交，Fresh 首先检查提交者元素（例如点击的按钮），然后回退到表单元素本身。这允许您在表单有多个提交按钮时显示每个按钮的指示器。

```tsx
import { useSignal } from "@preact/signals";

function MyForm() {
  const saving = useSignal(false);

  return (
    <form action="/save" f-partial="/partials/save">
      {/* 指示器在按钮上，而不是表单上 */}
      <button
        type="submit"
        ref={(el) => {
          if (el) el._freshIndicator = saving;
        }}
      >
        {saving.value ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
```

> [info]: 任何带有可变 `value` 属性的对象都可以使用 — Preact signals 是最方便的选择，因为当值更改时它们会自动重新渲染组件。

## 绕过或禁用 Partials

如果您想 exempt 特定元素不触发 partial 请求，例如在特定链接、表单或按钮上，您可以通过在元素或其祖先元素之一上设置 `f-client-nav={false}` 来选择退出。

```tsx routes/_app.tsx
<body f-client-nav>
  {/* 这将导致 partial 导航 */}
  <a href="/docs/page1">With partials</a>

  {/* 这不会导致 partial 导航 */}
  <a href="/docs/page1" f-client-nav={false}>No partials</a>

  {/* 这不会导致下面任何元素的 partial 导航 */}
  <div f-client-nav={false}>
    <div>
      <a href="/docs/page1">No partials</a>
    </div>
  </div>
</body>;
```

每当点击一个元素时，Fresh 会检查它是否有 `f-client-nav` 属性，以及它是否设置为 `true`。如果元素本身没有这样的属性，它会检查任何祖先元素是否有。如果找到带有 truthy `f-client-nav` 属性的元素，将触发 partial 请求。如果没有这样的属性，或者它设置为 `false`，则不会发生 partial 请求。
