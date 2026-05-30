---
description: |
  Fresh 围绕原生 `<form>` 元素构建其表单提交基础设施。
---

表单是 Web 应用程序中用户交互的核心部分。Fresh 围绕原生 `<form>` 元素构建其表单基础设施，使其易于处理用户输入。

## 基本表单

最基本的表单是一个简单的 HTML 表单，提交时会向服务器发送请求。

```tsx routes/search.tsx
export default function Search() {
  return (
    <form>
      <input type="text" name="q" />
      <button type="submit">搜索</button>
    </form>
  );
}
```

当用户提交此表单时，浏览器会向当前 URL 发送 `GET` 请求，并将表单数据作为查询参数附加。

## 处理表单提交

要处理表单提交，你可以使用路由的处理程序。对于 `GET` 表单，数据通过查询参数传递。对于 `POST` 表单，数据在请求体中传递。

```tsx routes/search.tsx
import { Handlers, PageProps } from "$fresh/server.ts";

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
        <input type="text" name="q" value={query} />
        <button type="submit">搜索</button>
      </form>
      <ul>
        {results.map((name) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  );
}
```

## POST 请求

对于修改服务器数据的操作，你应该使用 `POST` 请求。这需要一个带有 `method="POST"` 属性的表单。

```tsx routes/contact.tsx
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const form = await req.formData();
    const name = form.get("name");
    const email = form.get("email");
    // 处理表单数据
    return new Response(null, {
      status: 303,
      headers: { Location: "/success" },
    });
  },
};

export default function Contact() {
  return (
    <form method="POST">
      <input type="text" name="name" />
      <input type="email" name="email" />
      <button type="submit">提交</button>
    </form>
  );
}
```

## 使用岛屿进行客户端增强

你还可以使用岛屿来增强表单的客户端交互性，例如添加验证或在提交时显示加载指示器。

```tsx islands/EnhancedForm.tsx
import { useSignal } from "@preact/signals";

export default function EnhancedForm() {
  const loading = useSignal(false);

  async function handleSubmit(e: Event) {
    e.preventDefault();
    loading.value = true;
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    await fetch(form.action, {
      method: form.method,
      body: formData,
    });
    loading.value = false;
  }

  return (
    <form onSubmit={handleSubmit} method="POST">
      <input type="text" name="name" />
      <button type="submit" disabled={loading.value}>
        {loading.value ? "提交中..." : "提交"}
      </button>
    </form>
  );
}
```
