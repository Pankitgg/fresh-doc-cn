---
description: |
  如何在你的 Fresh 站点上渲染 markdown。
---

如果你想在你的站点上渲染一些 markdown 怎么办？有几种可能性：

1. markdown 来自远程源
2. markdown 定义在字符串中
3. markdown 在文件上

以下文件使用[动态路由](https://fresh.deno.dev/docs/getting-started/dynamic-routes)来处理这三种情况。假设此文件名为 `[slug].tsx`：

```ts routes/[slug].tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import { extract } from "$std/front_matter/yaml.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";

interface Page {
  markdown: string;
  data: Record<string, unknown>;
}

export const handler: Handlers<Page> = {
  async GET(_req, ctx) {
    let rawMarkdown = "";
    if (ctx.params.slug === "remote") {
      const resp = await fetch(
        `https://raw.githubusercontent.com/denoland/fresh/main/docs/latest/introduction/index.md`,
      );
      if (resp.status !== 200) {
        return ctx.render(undefined);
      }
      rawMarkdown = await resp.text();
    } else if (ctx.params.slug === "string") {
      rawMarkdown = `---
description: 测试
---

## 大文本

看，它在工作。_这是斜体。_
      
      `;
    } else if (ctx.params.slug === "file") {
      rawMarkdown = await Deno.readTextFile("text.md");
    } else {
      return ctx.render(undefined);
    }
    const { attrs, body } = extract(rawMarkdown);
    return ctx.render({ markdown: body, data: attrs });
  },
};

export default function MarkdownPage({ data }: PageProps<Page | null>) {
  if (!data) {
    return <h1>未找到文件。</h1>;
  }

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <main>
        <div>{JSON.stringify(data.data)}</div>
        <div
          class="markdown-body"
          dangerouslySetInnerHTML={{ __html: render(data?.markdown) }}
        />
      </main>
    </>
  );
}
```

`text.md` 文件的内容如下：

```md text.md
---
description: 测试文本
---

# 真的很大文本

**粗体**
```

你还需要导入 `Github Flavored Markdown` 模块：

```sh Terminal
deno add jsr:@deno/gfm
```

Andy 在 Deno Blog 上有一篇有用的[文章](https://deno.com/blog/build-a-blog-with-fresh)，介绍了一个稍微更实际的示例。
