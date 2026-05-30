---
description: |
  使用 HTTP CRUD 方法对资源执行操作。了解如何使用 HTTP 处理程序创建 RESTful API。
---

# 创建 CRUD API

MDN [文档](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)是了解更多关于 HTTP 方法的绝佳资源。我们将在此处介绍创建基本 CRUD（创建、读取、更新、删除）API 所需的四种基本方法。此外，我们还将简要提及 CORS 请求以及 `OPTIONS` 如何发挥作用。

使用 HTTP 方法是创建 REST API 的常见方式。Fresh 在处理程序中开箱即用地支持常见的 HTTP 方法。也支持异步 HTTP 请求。在此[阅读](/zh/getting-started/custom-handlers)更多关于自定义处理程序的信息。

在这个示例中，我们将创建一个小型 API，使用 [Deno KV](https://deno.com/kv) 将用户存储在数据库中。

我们的项目结构将如下所示（除了新项目中的其余 Fresh 代码）：

```txt Project Structure
<project root>
└── routes
    └── api
        └── users
            ├── [id].ts
            └── index.ts
```

在关于每个方法的部分中，只会显示相关的处理程序。完整文件可在底部获取以供参考。

## POST

`POST`（创建）用于创建资源。

```tsx routes/api/users/index.ts
export const handler: Handlers<User | null> = {
  async POST(req, _ctx) {
    const user = (await req.json()) as User;
    const userKey = ["user", user.id];
    const ok = await kv.atomic().set(userKey, user).commit();
    if (!ok) throw new Error("Something went wrong.");
    return new Response(JSON.stringify(user));
  },
};
```

使用 Postman（或你喜欢的客户端）通过类似 `http://localhost:8000/api/users` 的 URL 和 `POST` 方法进行测试。确保有一个类似这样的负载：

```json Request body
{
  "id": "2",
  "name": "TestUserName"
}
```

你应该收到相同的内容：

```json Response body
{ "id": "2", "name": "TestUserName" }
```

## GET

`GET`（读取）用于检索资源，是迄今为止最常见的 HTTP 方法。你可以使用 `GET` 来获取数据库内容、Markdown 或静态文件。

```tsx routes/api/users/[id].ts
export const handler: Handlers<User | null> = {
  async GET(_req, ctx) {
    const id = ctx.params.id;
    const key = ["user", id];
    const user = (await kv.get<User>(key)).value!;
    return new Response(JSON.stringify(user));
  },
};
```

让我们练习检索我们的用户！向 `http://localhost:8000/api/users/2` 发送 `GET` 请求应该返回：

```json Response body
{ "id": "2", "name": "TestUserName" }
```

## PUT（和 PATCH）

`PUT`（更新）和 `PATCH` 用于更新资源。虽然它们相似，但存在差异，你应该使用最适合你用例的那个。在 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) 上阅读更多关于 HTTP 方法的信息。

简而言之：`PUT` 需要提交整个对象，而 `PATCH` 只需要提交不同的属性。

使用 `PUT` 的更新端点示例：

```tsx routes/api/users/[id].ts
export const handler: Handlers<User | null> = {
  async PUT(req, ctx) {
    const id = ctx.params.id;
    const user = (await req.json()) as User;
    const userKey = ["user", id];
    const userRes = await kv.get(userKey);
    if (!userRes.value) return new Response(`no user with id ${id} found`);
    const ok = await kv.atomic().check(userRes).set(userKey, user).commit();
    if (!ok) throw new Error("Something went wrong.");
    return new Response(JSON.stringify(user));
  },
};
```

是时候更改他们的名字了。我们现在向 `http://localhost:8000/api/users/2` 发送 `PUT` 请求，类似这样：

```json Request body
{
  "id": "2",
  "name": "New Name"
}
```

我们应该收到：

```json Response body
{ "id": "2", "name": "New Name" }
```

另一方面，如果我们选择将其实现为 `PATCH` 操作，则请求将只涉及更改的属性，像这样：

```json Response body
{
  "name": "New Name"
}
```

在这种情况下，无需发送 id。

## DELETE

`DELETE`（删除）用于删除资源。

```tsx routes/api/users/[id].ts
export const handler: Handlers<User | null> = {
  async DELETE(_req, ctx) {
    const id = ctx.params.id;
    const userKey = ["user", id];
    const userRes = await kv.get(userKey);
    if (!userRes.value) return new Response(`no user with id ${id} found`);
    const ok = await kv.atomic().check(userRes).delete(userKey).commit();
    if (!ok) throw new Error("Something went wrong.");
    return new Response(`user ${id} deleted`);
  },
};
```

尝试向 `http://localhost:8000/api/users/2` 发送不带正文的 `DELETE` 请求。我们将收到：

```txt Response body
user 2 deleted
```

## OPTIONS

Options 可用于一些高级情况，包括为复杂的 CORS 用例实现预检请求检查。在 [CORS 文档](/docs/1.x/examples/dealing-with-cors)中查看更多信息。

## 完整文件参考

<details>
<summary><code>[id].ts</code></summary>

```ts routes/api/users/[id].ts
import { Handlers } from "$fresh/server.ts";

type User = {
  id: string;
  name: string;
};

const kv = await Deno.openKv();

export const handler: Handlers<User | null> = {
  async GET(_req, ctx) {
    const id = ctx.params.id;
    const key = ["user", id];
    const user = (await kv.get<User>(key)).value!;
    return new Response(JSON.stringify(user));
  },
  async DELETE(_req, ctx) {
    const id = ctx.params.id;
    const userKey = ["user", id];
    const userRes = await kv.get(userKey);
    if (!userRes.value) return new Response(`no user with id ${id} found`);
    const ok = await kv.atomic().check(userRes).delete(userKey).commit();
    if (!ok) throw new Error("Something went wrong.");
    return new Response(`user ${id} deleted`);
  },
  async PUT(req, ctx) {
    const id = ctx.params.id;
    const user = (await req.json()) as User;
    const userKey = ["user", id];
    const userRes = await kv.get(userKey);
    if (!userRes.value) return new Response(`no user with id ${id} found`);
    const ok = await kv.atomic().check(userRes).set(userKey, user).commit();
    if (!ok) throw new Error("Something went wrong.");
    return new Response(JSON.stringify(user));
  },
};
```

</details>

<details>
<summary><code>index.ts</code></summary>

```ts routes/api/users/index.ts
import { Handlers } from "$fresh/server.ts";

type User = {
  id: string;
  name: string;
};

const kv = await Deno.openKv();

export const handler: Handlers<User | null> = {
  async GET(_req, _ctx) {
    const users = [];
    for await (const res of kv.list({ prefix: ["user"] })) {
      users.push(res.value);
    }
    return new Response(JSON.stringify(users));
  },
  async POST(req, _ctx) {
    const user = (await req.json()) as User;
    const userKey = ["user", user.id];
    const ok = await kv.atomic().set(userKey, user).commit();
    if (!ok) throw new Error("Something went wrong.");
    return new Response(JSON.stringify(user));
  },
};
```

</details>
