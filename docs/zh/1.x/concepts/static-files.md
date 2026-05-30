---
description: |
  Fresh 有内置的支持来服务静态文件。这对于服务图像、CSS 和其他静态资产很有用。
---

Fresh 自动服务放置在项目根目录 `static/` 目录中的静态资产。这些资产在 Web 服务器的根目录服务，优先级高于路由。这意味着如果请求匹配 `static/` 文件夹中的文件，它总是被服务，即使有一个路由也会匹配该请求。

静态资产响应会根据文件的扩展名自动获得 `content-type` 头。资产还会从磁盘流式传输到客户端，以提高用户和服务器的性能和效率。

Fresh 还会自动向资产添加 `etag` 头，并处理传入请求的 `If-None-Match` 头。

### 缓存

默认情况下，资产不会添加缓存头。这在许多场景中可能不利，因此 Fresh 使服务具有长缓存生命周期的资产变得容易。

做到这一点的第一种方法是手动的。客户端运行时导出一个 `asset` 函数，该函数接受静态资产的绝对路径并返回包含构建 ID 的"锁定"版本路径用于缓存破坏。当资产在此"锁定"路径请求时，它将提供一年的缓存生命周期。

```tsx routes/page.tsx
import { asset } from "$fresh/runtime.ts";

export default function Page() {
  return (
    <p>
      <a href={asset("/brochure.pdf")}>查看手册</a>
    </p>
  );
}
```

Fresh 还会自动为 `<img>` 和 `<source>` HTML 标签中的 `src` 和 `srcset` 属性执行此操作。如果 Fresh 认为安全，这些将自动使用"锁定"路径。你始终可以通过添加 `data-fresh-disable-lock` 属性来退出此行为。

```tsx routes/user.tsx
{/* 锁定 URL 源 */}
<img src="/user.png" />;

{/* 保留 URL 源并禁用锁定 */}
<img src="/user.png" data-fresh-disable-lock />;
```
