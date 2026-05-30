---
description: |
  Fresh 中的错误页面可用于处理 404 和 500 错误。
---

Fresh 支持自定义错误页面。你可以为 404（未找到）和 500（内部服务器错误）错误创建自定义页面。

## 404 错误页面

要创建自定义 404 页面，请在 `routes` 文件夹中创建一个 `_404.tsx` 文件。

```tsx routes/_404.tsx
import { PageProps } from "$fresh/server.ts";

export default function NotFound(props: PageProps) {
  return (
    <div>
      <h1>404 - 未找到</h1>
      <p>未找到页面：{props.url.pathname}</p>
    </div>
  );
}
```

## 500 错误页面

要创建自定义 500 页面，请在 `routes` 文件夹中创建一个 `_500.tsx` 文件。

```tsx routes/_500.tsx
import { PageProps } from "$fresh/server.ts";

export default function InternalServerError(props: PageProps) {
  return (
    <div>
      <h1>500 - 内部服务器错误</h1>
      <p>发生错误。</p>
    </div>
  );
}
```

## 错误处理

Fresh 自动捕获路由处理程序和组件中抛出的错误。如果发生错误，Fresh 将渲染 `_500.tsx` 页面（如果存在）。如果不存在 `_500.tsx` 页面，Fresh 将返回默认的 500 响应。
