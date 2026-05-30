---
description: |
  使用客户端 HTML `<form>` 元素和服务端表单提交处理程序来稳健地处理用户输入。
---

表单是让用户与应用程序交互的常见机制。在过去几年中，Web 应用程序将表单提交完全移到客户端变得越来越常见。这对于交互性可能有用，但对于弹性和整体用户体验来说要差得多。浏览器有很好的内置系统用于表单提交，围绕 HTML `<form>` 元素。

Fresh 围绕原生 `<form>` 元素构建其表单提交基础设施的核心。本页面解释如何在 Fresh 中使用 `<form>`，下一章解释如何使用客户端 JavaScript 渐进式增强你的表单以使其更具交互性。

表单在浏览器中的工作方式是，当用户提交表单时，它们执行 HTML 导航操作。在大多数情况下，这意味着当表单提交时，一个 `GET` 或 `POST` 请求被发送到服务器，其中包含表单数据，然后服务器响应一个新页面进行渲染。

Fresh 可以通过路由的[自定义处理程序][custom-handlers]功能处理 `GET` 和 `POST` 请求。处理程序可以对表单数据进行任何必要的处理，然后将数据传递给 `ctx.render()` 调用来渲染新页面。

这是一个实现搜索表单的示例，它在服务端过滤一个名字数组：

```tsx routes/search.tsx
import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <div>
      <form>
        <input type="text" name="q" value={query} class="border p-1" />
        <button type="submit" class="ml-1 px-2 py-1 bg-gray-100 border">
          搜索
        </button>
      </form>
      <ul>
        {results.map((name) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  );
}
```

当用户提交表单时，浏览器将导航到 `/search`，并将查询设置为 URL 中的 `q` 查询参数。然后 `GET` 处理程序将根据查询过滤名字数组，并将其传递给页面组件进行渲染。

[了解更多关于在 Fresh 中使用表单的内容][concepts-forms]。

[custom-handlers]: /docs/1.x/getting-started/custom-handlers
[concepts-forms]: /docs/1.x/concepts/forms
