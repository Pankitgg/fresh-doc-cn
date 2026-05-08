---
description: |
  How to render markdown on your Fresh site.
---

[Markdown](https://www.markdownguide.org/basic-syntax/) 是一种常见的基于文本的文件格式，通常用于编写文档、博客等。在本示例中，我们将把 Markdown 内容转换为 HTML 并发送给浏览器。

首先，安装能够将 Markdown 转换为 HTML 的 [`@deno/gfm`](https://jsr.io/@deno/gfm) 包。

1. 运行 `deno install jsr:@deno/gfm`
2. 创建一个 Markdown 文件，比如 `content/example.md`：

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

要了解更完善的 Fresh Markdown 系统，请查看这个文档网站的[源代码](https://github.com/denoland/fresh/tree/main/www)。

## 其他库

除了 `@deno/gfm` 之外，还有几个其他流行的库可以用于渲染 Markdown。最常用的有：

- [marked](https://marked.js.org/)
- [remark](https://remark.js.org/)
