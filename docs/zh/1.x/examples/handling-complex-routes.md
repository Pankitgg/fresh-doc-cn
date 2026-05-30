---
description: |
  有时基于 URL 的路由还不够。
---

# 处理复杂路由

[路由](/docs/1.x/concepts/routing)页面提到了使用 `RouteConfig` 对象基于 URL 模式进行复杂路由。让我们更详细地了解一下。

`RouteConfig` 有一个 `routeOverride` 字符串属性，它使用了 [URL Pattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API)。在这里你可以定义命名组、通配符、正则表达式组等。

## 简单路由配置

让我们更仔细地看看路由页面中的示例。我们将完善处理程序，以便得到类似以下的内容：

```ts routes/x.tsx
import { FreshContext, RouteConfig } from "$fresh/server.ts";

export const handler = {
  GET(_req: Request, { params }: FreshContext) {
    console.log(params);
    return new Response(params.path);
  },
};

export const config: RouteConfig = {
  routeOverride: "/x/:module@:version/:path*",
};
```

现在如果我们向服务器发送类似 `http://localhost:8000/x/bestModule@1.33.7/asdf` 的请求，那么记录参数将显示以下内容：

```txt Console output
{
  module: "bestModule",
  version: "1.33.7",
  path: "asdf"
}
```

## 复杂路由配置

让我们看看更复杂的情况：

```ts routes/api.tsx
import { FreshContext, RouteConfig } from "$fresh/server.ts";

export const handler = {
  GET(_req: Request, { params }: FreshContext) {
    console.log(params);
    return new Response(params.path);
  },
};

export const config: RouteConfig = {
  routeOverride: "/api/db/:resource(jobs?|bar)/:id(\\d+)?",
};
```

值可以通过 `params.resource` 和 `params.id` 获取。

以下是一些匹配此模式的示例 URL：

- `/api/db/bar/1`
- `/api/db/jobs/1`
- `/api/db/job/1`
- `/api/db/job`
- `/api/db/jobs`
- `/api/db/bar`

以下是一些不匹配的 URL：

- `/api/db/other/123`
- `/api/db/jobs/abc`
- `/api/db`

## 正则表达式

到此为止，应该清楚这基本上是理解正则表达式的练习。有[许多](https://regexr.com/)[资源](https://regex101.com/)[可用](https://chat.openai.com/)来帮助理解正则表达式。
