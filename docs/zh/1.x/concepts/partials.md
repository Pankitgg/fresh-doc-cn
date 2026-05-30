---
description: |
  Fresh 支持部分页面更新，无需完全重新加载。
---

Fresh 支持部分页面更新。这允许你更新页面的一部分，而无需完全重新加载整个页面。这对于更新页面的动态部分（如计数器或通知）很有用。

## 使用部分更新

部分更新是通过使用 `Partial` 组件实现的。此组件定义页面的一个区域，该区域可以独立于页面的其余部分更新。

```tsx routes/page.tsx
import { Partial } from "$fresh/runtime.ts";

export default function Page() {
  return (
    <div>
      <h1>页面标题</h1>
      <Partial name="content">
        <p>这是可以更新的内容。</p>
      </Partial>
    </div>
  );
}
```

## 触发更新

部分更新可以通过链接到具有 `f-partial` 属性的 URL 来触发。

```tsx routes/page.tsx
import { Partial } from "$fresh/runtime.ts";

export default function Page() {
  return (
    <div>
      <nav>
        <a href="/page/1" f-partial>第 1 页</a>
        <a href="/page/2" f-partial>第 2 页</a>
      </nav>
      <Partial name="content">
        <p>这是内容区域。</p>
      </Partial>
    </div>
  );
}
```

当用户点击其中一个链接时，只有 `Partial` 组件的内容会更新，而页面的其余部分保持不变。

## 部分更新和表单

部分更新也可以与表单一起使用。当表单提交时，只有 `Partial` 组件的内容会更新。

```tsx routes/page.tsx
import { Partial } from "$fresh/runtime.ts";

export default function Page() {
  return (
    <div>
      <form action="/search" method="GET" f-partial>
        <input type="text" name="q" />
        <button type="submit">搜索</button>
      </form>
      <Partial name="results">
        <p>搜索结果将显示在这里。</p>
      </Partial>
    </div>
  );
}
```
