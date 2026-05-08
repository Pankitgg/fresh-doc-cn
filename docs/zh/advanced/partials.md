---
description: |
  Partials 允许页面的特定区域在不导致浏览器重新加载页面的情况下进行更新。它们支持优化的细粒度 UI 更新，并可用于客户端导航。
---

Partials 允许页面的特定区域由服务器用新内容更新，而不会导致浏览器重新加载页面。它们让你的网站感觉更像是一个应用，因为只有需要更新的页面部分会被更新。

## 启用 Partials

通过向 HTML 元素添加 `f-client-nav` 属性，并在页面中用一个或多个区域包装 `<Partial name="my-partial">` 组件来启用 Partials。

最快的入门方法是在 `routes/_app.tsx` 中为每个页面启用 Partials，进行以下更改。

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

通过添加 `f-client-nav` 属性，我们为 `<body>` 标签下的每个元素启用了 Partials。为了将页面的某个区域标记为 partial，我们用带有唯一名称的 `<Partial>` 组件包装它。

在幕后，当用户点击 `<a>` 标签时，Fresh 会获取新页面，并只从 HTML 响应中提取相关的内容。当它找到匹配的 partial 区域时，就会更新 partial 内部的内容。

> [info]: `<Partial>` 组件的 `name` prop 应该在多个 Partials 之间是唯一的。这就是 Fresh 知道响应的哪些部分需要放到当前页面上的方式。

> [info]: 传递 `f-client-nav={false}` 会禁用当前节点下所有元素的客户端导航。

### 优化 partial 请求

默认情况下，当设置了 `f-client-nav` 时，Fresh 会获取完整的下一个页面，只选取响应的相关部分。我们可以通过只渲染我们需要的部分来进一步优化这个模式，而不是总是渲染完整的页面。这是通过向链接添加 `f-partial` 属性来实现的。

```diff routes/_app.tsx
- <a href="/docs/routes">Routes</a>
+ <a href="/docs/routes" f-partial="/partials/docs/routes">Routes</a>
```

当存在 `f-partial` 属性时，Fresh 会导航到 `href` 属性定义的页面 URL，但改为从 `f-partial` 指定的 URL 获取更新的 UI。这可以是一个高度优化的路由，只提供你关心的内容。

让我们用一个典型的文档页面布局作为例子。它通常有一个主内容区域和一个侧边栏链接，用于在文档页面之间切换（这里用绿色标记）。

![一个典型文档页面的布局草图，左侧是绿色链接组成的侧边栏，右侧是主内容区域。主内容区域标记为 Partial docs-content](/docs/fresh-partial-docs.png)

这样的页面的代码（不包括样式）可能如下：

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

一个只渲染内容而不是带侧边栏的外部布局的最优路由可能是这样。

```tsx routes/partials/docs/[id].tsx
import { define } from "../utils.ts";
import { Partial } from "fresh/runtime";

// 我们只想渲染内容，所以也要禁用
// `_app.tsx` 模板以及任何可能继承的布局
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

通过添加 `f-partial` 属性，我们告诉 Fresh 从新添加的 `/partials/docs/[id].tsx` 路由获取内容。

```diff routes/docs/[id].tsx
  <aside>
-   <a href="/docs/page1">Page 1</a>
-   <a href="/docs/page2">Page 2</a>
+   <a href="/docs/page1" f-partial="/partials/docs/page1">Page 1</a>
+   <a href="/docs/page2" f-partial="/partials/docs/page2">Page 2</a>
  </aside>
```

有了这个设置，Fresh 会在点击两个链接中的任何一个时导航到新页面，_只_加载由我们的优化 partial 路由渲染的内容。

> 目前，`f-partial` 作用域限定在 `<a>`、`<button>` 和 `<form>` 元素上。将来可能会扩展到更多元素。

## 同时发送多个 Partials

Fresh 中 Partials 的一个很好的特性是，响应可以返回任意数量的 Partials。这样你就可以在一个 HTTP 响应中更新页面上多个不相关的区域。这种场景的一个有用例子是在线商店。

```tsx routes/partials/cart.tsx
export default function AddToCartPartial() {
  return (
    <>
      <Partial name="cart-items" mode="append" key={newItem.id}>
        {/* 在这里渲染新的购物车项目 */}
      </Partial>
      <Partial name="total-price">
        <p>Total: {totalPrice} €</p>
      </Partial>
    </>
  );
}
```

两个 partials 都会被应用到当前页面。

## 替换模式

默认情况下，partial 内的全部内容都会被替换，但有些场景下你希望在新内容之前或之后插入内容。这可以通过向 `Partial` 组件添加 `mode` prop 来实现。

- `replace`——替换现有 partial 的内容（默认）
- `prepend`——在新内容之前插入现有内容
- `append`——在新内容之后插入现有内容

就个人而言，我们发现 `append` 模式在有显示日志消息或类似列表数据的 UI 时非常有用。

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

> [warn]: 当使用 `prepend` 或 `append` 模式时，你**必须**为 `<Partial>` 组件添加一个 `key` prop。没有它，Preact 无法区分新的子元素和现有的子元素，导致微妙的渲染错误。如果检测到 append/prepend partial 上缺少 key，Fresh 会记录警告。

## 视图过渡

可以使用浏览器的[视图过渡 API](/docs/advanced/view-transitions) 为 partial 更新添加动画效果。将 `f-view-transition` 与 `f-client-nav` 结合使用，可以实现页面之间零 JavaScript 动画代码的平滑过渡动画。

## 加载指示器

当 partial 请求在进行中时，你可能希望显示加载旋转器或禁用按钮。Fresh 通过 `_freshIndicator` 属性支持此功能。

将带有 `value` 属性的对象附加到任何触发 partial 导航的元素上。当请求开始时，Fresh 会将 `value` 设置为 `true`，完成后（或失败时）设置回 `false`。

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

这适用于链接、表单和提交按钮。对于表单提交，Fresh 首先检查提交元素（例如点击的按钮），然后回退到表单元素本身。这让你可以在表单有多个提交按钮时显示每个按钮的指示器。

```tsx
import { useSignal } from "@preact/signals";

function MyForm() {
  const saving = useSignal(false);

  return (
    <form action="/save" f-partial="/partials/save">
      {/* 指示器在按钮上，不是在表单上 */}
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

> [info]: 任何带有可变 `value` 属性的对象都可以使用——Preact signals 是最方便的选择，因为当值改变时它们会自动重新渲染组件。

## 绕过或禁用 Partials

如果你想将某个特定元素（如特定链接、表单或按钮）排除在触发 partial 请求之外，可以通过在该元素或其中一个祖先元素上设置 `f-client-nav={false}` 来选择退出。

```tsx routes/_app.tsx
<body f-client-nav>
  {/* 这将导致 partial 导航 */}
  <a href="/docs/page1">With partials</a>

  {/* 这不会导致 partial 导航 */}
  <a href="/docs/page1" f-client-nav={false}>No partials</a>

  {/* 这不会导致下方任何元素的 partial 导航 */}
  <div f-client-nav={false}>
    <div>
      <a href="/docs/page1">No partials</a>
    </div>
  </div>
</body>;
```

每当点击元素时，Fresh 会检查它是否有 `f-client-nav` 属性且设置为 `true`。如果元素本身没有这个属性，它会检查任何祖先元素是否有该属性。如果找到带有真值 `f-client-nav` 属性的元素，则会触发 partial 请求。如果没有这样的属性或设置为 `false`，则不会发生 partial 请求。
