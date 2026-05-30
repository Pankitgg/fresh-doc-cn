---
description: |
  路由是 Fresh 应用程序的基本构建块。它们用于定义当给定路径被请求时应用程序的行为。
---

路由的核心是描述如何处理给定路径的请求，以及响应应该是什么。为此，路由有两个主要部分：处理程序和组件。路由可以有其中一个，或两者都有，但绝不能两者都没有。

处理程序是为路由的每个请求调用的函数。它需要返回一个响应，然后发送给客户端。响应可以是任何东西：纯文本字符串、JSON 对象、HTML 页面、WebSocket 连接、流文件，或其他几乎任何东西。处理程序会传入一个 `render` 函数，它可以调用该函数来渲染组件。

组件是页面的模板。它是在服务端渲染的 JSX 元素。页面组件会传入可以用于确定应该渲染什么的属性。默认情况下，组件会接收由以下组成的属性：请求 URL、匹配的路由（作为字符串）、URL 模式匹配的匹配项、中间件设置的任何 state，以及处理程序的 `render` 函数传入的任何数据。

## 处理程序路由

让我们看一个返回纯文本字符串的基本路由：

```tsx routes/plain.tsx
import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req: Request, _ctx: FreshContext) {
    return new Response("Hello World");
  },
};
```

要定义处理程序，需要从路由模块导出 `handler` 函数或对象。如果处理程序是对象，则对象中的每个键是应该调用处理程序的 HTTP 方法的名称。例如，上面的 `GET` 处理程序会为 `GET` 请求调用。如果处理程序是函数，则无论方法如何都会调用它。如果 HTTP 方法没有相应的处理程序，则返回 405 HTTP 错误。

## 组件路由

现在，让我们使用路由组件渲染一些 HTML：

```tsx routes/html.tsx
import { PageProps } from "$fresh/server.ts";

export default function Page(props: PageProps) {
  return <div>你在页面 '{props.url.href}' 上。</div>;
}
```

页面组件需要是路由模块的默认导出。它传入可以用于渲染页面的属性。

如第二个示例所示，如果未显式定义处理程序，则使用默认处理程序，该处理程序只是渲染页面组件（如果存在）。你也可以覆盖默认处理程序以修改渲染应该如何工作。

## 混合处理程序和组件路由

在下面的示例中，使用自定义处理程序在渲染页面组件后向响应添加自定义头。

```tsx routes/html.tsx
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello World");
    return resp;
  },
};

export default function Page(props: PageProps) {
  return <div>你在页面 '{props.url.href}' 上。</div>;
}
```

## 异步路由组件

拥有单独的路由处理程序和组件函数很好，当你想单独测试它们时，但维护可能有点麻烦。它们需要一些额外的间接声明组件 `Data` 的接口，当你通过 `ctx.render()` 传递它时。

```tsx routes/page.tsx
interface Data {
  foo: number;
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const value = await loadFooValue();
    return ctx.render({ foo: value });
  },
};

export default function MyPage(props: PageProps<Data>) {
  return <p>foo 是：{props.data.foo}</p>;
}
```

当路由同时具有组件和 `GET` 处理程序时，它们通常非常紧密耦合。使用异步路由组件，你可以将两者合并，避免创建 `Data` 接口样板。

```tsx routes/page.tsx
// 异步路由组件
export default async function MyPage(req: Request, ctx: RouteContext) {
  const value = await loadFooValue();
  return <p>foo 是：{value}</p>;
}
```

使用异步路由组件，代码会稍微短一些。从概念上讲，你可以将异步路由组件视为将 `GET` 处理程序内联到组件函数中。请注意，你仍然可以在同一文件中添加额外的 HTTP 处理程序，就像以前一样。

```tsx routes/page.tsx
export const handler: Handlers = {
  async POST(req) {
    // ... 在这里做一些事情
  },
};

export default async function MyPage(req: Request, ctx: RouteContext) {
  const value = await loadFooValue();
  return <p>foo 是：{value}</p>;
}
```

### 返回 Response 对象

通常路由处理程序需要渲染 404 页面或以另一种方式退出渲染。这可以通过返回 `Response` 对象来完成。

```tsx route/page.tsx
// 异步路由组件
export default async function MyPage(req: Request, ctx: RouteContext) {
  const value = await loadFooValue();

  // 如果 `value` 为 null 则返回 404
  if (value === null) {
    return ctx.renderNotFound();
  }

  // 直接返回响应对象也可以
  if (value === "redirect") {
    const headers = new Headers();
    headers.set("location", "/some-other-page");
    return new Response(null, {
      status: 302,
      headers,
    });
  }

  return <p>foo 是：{value}</p>;
}
```

### 定义辅助函数

为了更快地编写异步路由，Fresh 提供了一个 `defineRoute` 辅助函数，它会自动为函数参数推断正确的类型。

```tsx routes/hello.tsx
import { defineRoute } from "$fresh/server.ts";

export default defineRoute(async (req, ctx) => {
  const data = await loadData();

  return (
    <div class="page">
      <h1>你好 {data.name}</h1>
    </div>
  );
});
```
