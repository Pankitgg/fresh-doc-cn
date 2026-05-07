---
description: |
  使用 HTML `<form>` 元素在客户端稳健地处理用户输入，并在服务器端使用表单提交处理程序。
---

# 表单

为了更强的弹性和用户体验，Fresh 依赖原生浏览器支持使用 HTML `<form>` 元素进行表单提交。

在浏览器中，`<form>` 提交将向服务器发送一个 HTML 动作（通常是 `GET` 或 `POST`），服务器响应一个新页面进行渲染。

## 使用 `application/x-www-form-urlencoded` 的 POST 请求

表单通常作为 `GET` 请求提交，数据编码在 URL 的搜索参数中，或作为 `POST` 请求，使用 `application/x-www-form-urlencoded` 或 `multipart/form-data` 正文。

此示例演示如何处理 `application/x-www-form-urlencoded` `<form>` 提交：

```tsx routes/subscribe.tsx
import { define } from "../utils.ts";

export const handlers = define.handlers({
  async GET(ctx) {
    return { data: {} };
  },
  async POST(ctx) {
    const form = await ctx.req.formData();
    const email = form.get("email")?.toString();

    // 将邮箱添加到列表。

    // 将用户重定向到感谢页面。
    const headers = new Headers();
    headers.set("location", "/thanks-for-subscribing");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
});

export default define.page<typeof handlers>(function Subscribe() {
  return (
    <>
      <form method="post">
        <input type="email" name="email" value="" />
        <button type="submit">订阅</button>
      </form>
    </>
  );
});
```

当用户提交表单时，Deno 将使用请求的 `formData()` 方法检索 `email` 值，将邮箱添加到列表中，并将用户重定向到感谢页面。

## 处理文件上传

文件上传可以以与上述示例非常相似的方式处理。请注意，这次我们必须显式声明表单的编码为 `multipart/form-data`。

```tsx routes/subscribe.tsx
import { define } from "../utils.ts";

export const handler = define.handlers({
  async GET(ctx) {
    return { data: { message: null } };
  },
  async POST(ctx) {
    const form = await ctx.req.formData();
    const file = form.get("my-file") as File;

    if (!file) {
      return { data: { message: "请重试" } };
    }

    const name = file.name;
    const contents = await file.text();

    console.log(contents);

    return { data: { message: `${name} 已上传！` } };
  },
});

export default define.page<typeof handler>(function Upload(props) {
  const { message } = props.data;
  return (
    <>
      <form method="post" encType="multipart/form-data">
        <input type="file" name="my-file" />
        <button type="submit">上传</button>
      </form>
      {message ? <p>{message}</p> : null}
    </>
  );
});
```

## 注意事项

这些示例经过简化，以演示 Deno 和 Fresh 如何处理 HTTP 请求。在现实世界中™，您需要验证您的数据（尤其是文件类型）并防止跨站请求伪造。请谨慎行事。
