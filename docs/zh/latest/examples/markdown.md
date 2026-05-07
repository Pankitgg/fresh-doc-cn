---
description: |
  如何在您的 Fresh 网站上渲染 markdown。
---

[Markdown](https://www.markdownguide.org/basic-syntax/) 是一种常见的基于文本的文件格式，通常用于编写文档、博客等。在这个示例中，我们将把 markdown 内容转换为 HTML 并发送到浏览器。

首先，让我们安装可以将 markdown 转换为 html 的 [`@deno/gfm`](https://jsr.io/@deno/gfm) 包。

1. 运行 `deno install jsr:@deno/gfm`
2. 创建一个 markdown 文件，如 `content/example.md`：

```md content/example.md
## some heading

and some interesting text here

> oh look a blockquote
```

3. 添加一个渲染该文件的路由

```tsx routes/markdown.tsx
import { define } from "@/utils.ts";
import { CSS, render as renderMarkdown } from "@deno/gfm";

export default define.page(async () => {
  const content = await Deno.readTextFile("./content/example.md");
  const html = renderMarkdown(content);

  return (
    <div>
      <h1>Here comes a markdown post:</h1>
      {/* deno-lint-ignore react-no-danger */}
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {/* deno-lint-ignore react-no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
});
```

有关使用 Fresh 的更复杂的 markdown 系统，请查看此文档网站的
[源代码](https://github.com/denoland/fresh/tree/main/www)。

## 其他库

除了 `@deno/gfm`，还有几个其他流行的库可用于渲染 markdown。最常见的是：

- [marked](https://marked.js.org/)
- [remark](https://remark.js.org/)