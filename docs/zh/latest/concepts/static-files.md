---
description: |
  Fresh 内置支持提供静态文件。这对于提供图像、CSS 和其他静态资源很有用。
---

# 静态文件

放置在 `static/` 目录中的静态资源通过 `staticFiles()` 中间件在 Web 服务器的根目录下提供。它们通过 [`ETag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag) 标头直接从磁盘流式传输以获得最佳性能。

```ts main.ts
import { staticFiles } from "fresh";

const app = new App()
  .use(staticFiles());
```

## 导入的资产 vs 静态文件

当将 Fresh 与 [Vite](/docs/advanced/vite) 一起使用时（现在是默认选项），**您在 JavaScript/TypeScript 代码中导入的文件不应放在 `static/` 文件夹中**。这可以防止在构建过程中文件重复。

```tsx
// 不要从 static/ 导入
import "./static/styles.css";

// 从 static/ 外部导入（例如 assets/）
import "./assets/styles.css";
```

**经验法则：**

- **在代码中导入的文件**（CSS、图标等）：放在 `static/` 外部（例如在 `assets/` 文件夹中）
- **通过 URL 路径引用的文件**（favicon.ico、字体、robots.txt、PDF 等）：放在 `static/` 中

> [提示]: 在 HTML 中引用静态文件时，始终使用根相对 URL（以 `/` 开头）。例如，使用 `src="/image/photo.png"` 而不是 `src="image/photo.png"`。相对路径相对于浏览器的当前 URL 解析，这在路由之间导航时会中断。

当您在代码中导入文件时，Vite 通过其构建管道处理它，对其进行优化，并向文件名添加内容哈希以进行缓存破坏。将这些文件放在 `static/` 外部可确保它们在构建输出中只包含一次。

## 多个静态目录

您可以通过将数组传递给 `staticDir` 选项来从多个目录提供文件。当多个目录中存在相同的文件名时，数组中的第一个目录优先。

```ts vite.config.ts
import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";

export default defineConfig({
  plugins: [
    fresh({
      staticDir: ["static", "generated"],
    }),
  ],
});
```

当您有一个构建步骤将资产生成到单独的目录中，并且您希望将它们与手动编写的静态文件分开时，这很有用。

> [信息]: 如果您使用 [Builder](/docs/advanced/builder) API 而不是 Vite，相同的 `staticDir` 选项接受字符串或字符串数组。

## 缓存头

默认情况下，Fresh 会在 `<img>` 和 `<source>` 标签的 `src` 和 `srcset` 属性上添加缓存头。

```ts
// 将自动添加缓存头
app.get("/user", (ctx) => ctx.render(<img src="/user.png" />));
```

您始终可以通过添加 `data-fresh-disable-lock` 属性来逐个标签选择退出此行为。

```ts
// 选择退出自动缓存头
app.get(
  "/user",
  (ctx) => ctx.render(<img src="/user.png" data-fresh-disable-lock />),
);
```

## 手动添加缓存头

使用 `asset()` 函数手动添加缓存头。它将以一年的缓存生命周期提供服务。

```tsx routes/about.tsx
import { asset } from "fresh/runtime";

export default function About() {
  // 手动添加缓存头
  return <a href={asset("/brochure.pdf")}>查看手册</a>;
}
```

对于带有 `srcset` 属性的 `<img>` 标签，使用 `assetSrcSet()`：

```tsx routes/gallery.tsx
import { assetSrcSet } from "fresh/runtime";

export default function Gallery() {
  return (
    <img
      src="/photo.jpg"
      srcset={assetSrcSet("/photo-640.jpg 640w, /photo-1280.jpg 1280w")}
    />
  );
}
```

## 图像优化

Fresh 不包含内置的图像优化管道，但由于 Fresh 2 使用 Vite，您可以使用 Vite 插件或外部服务来优化图像。

### 使用 Vite 进行构建时优化

[vite-imagetools](https://github.com/JonasKruckenberg/imagetools) 允许您使用查询参数导入图像，以在构建时调整大小、转换格式并生成 `srcset`：

```ts
deno add -D npm:vite-imagetools
```

```ts vite.config.ts
import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [fresh(), imagetools()],
});
```

然后直接导入优化后的图像：

```tsx
import heroAvif from "../static/hero.jpg?format=avif&w=800";

export default function Page() {
  return <img src={heroAvif} alt="Hero" width={800} />;
}
```

### CDN 图像服务

对于无需构建步骤的动态优化，使用 CDN 图像服务即时转换图像：

- [Cloudflare Images](https://developers.cloudflare.com/images/)
- [imgix](https://imgix.com/)
- [Cloudinary](https://cloudinary.com/)

这些服务根据 URL 参数调整大小、压缩和转换图像为现代格式（WebP、AVIF），并在边缘自动缓存。

### 最佳实践

- 使用现代格式（WebP、AVIF）并使用 `<picture>` 降级
- 使用 `srcset` 和 `sizes` 属性提供响应式图像
- 在 `<img>` 标签上设置 `width` 和 `height` 以防止布局偏移
- 对折叠下方的图像使用 `loading="lazy"`
- 对缓存破坏的 URL 使用 `asset()` / `assetSrcSet()`
