---
description: |
  使用 HTML `<form>` 元素在客户端稳健地处理用户输入，并在服务器端处理表单提交。
---

为了更强的弹性和用户体验，Fresh 依赖浏览器对 HTML `<form>` 元素表单提交的本机支持。

在浏览器中，`<form>` 提交会向服务器发送一个 HTML action（通常是 `GET` 或 `POST`），服务器响应一个新页面进行渲染。

## 使用 `application/x-www-form-urlencoded` 的 POST 请求

表单通常作为 `GET` 请求提交，数据编码在 URL 的搜索参数中，或者作为 `POST` 请求提交，数据在 `application/x-www-form-urlencoded` 或 `multipart/form-data` 正文中。

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

    // 重定向用户到感谢页面。
    const headers = new Headers();
    headers.set("location", "/thanks-for-subscribing");
    return new Response(null, {
      status: 303, // 参见其他
      headers,
    });
  },
});

export default define.page<typeof handlers>(function Subscribe() {
  return (
    <>
      <form method="post">
        <input type="email" name="email" value="" />
        <button type="submit">Subscribe</button>
      </form>
    </>
  );
});
```

当用户提交表单时，Deno 将使用请求的 `formData()` 方法获取 `email` 值，将邮箱添加到列表中，然后将用户重定向到感谢页面。

## 处理文件上传

文件上传的处理方式与上面的示例非常相似。请注意，这次我们必须显式声明表单的编码为 `multipart/form-data`。

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
      return { data: { message: "Please try again" } };
    }

    const name = file.name;
    const contents = await file.text();

    console.log(contents);

    return { data: { message: `${name} uploaded!` } };
  },
});

export default define.page<typeof handler>(function Upload(props) {
  const { message } = props.data;
  return (
    <>
      <form method="post" encType="multipart/form-data">
        <input type="file" name="my-file" />
        <button type="submit">Upload</button>
      </form>
      {message ? <p>{message}</p> : null}
    </>
  );
});
```

## 注意事项

这些示例经过简化，以演示 Deno 和 Fresh 如何处理 HTTP 请求。在现实世界中，你需要验证数据（_尤其是文件类型_）并防止跨站请求伪造。请注意这一点。
