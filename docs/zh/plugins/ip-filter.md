---
description: "使用 ipFilter 中间件按 IP 地址限制访问"
---

`ipFilter()` 中间件可根据客户端的 IP 地址限制访问。它支持黑名单、白名单和 CIDR 子网匹配。黑名单规则始终优先于白名单规则。

```ts main.ts
import { App, ipFilter } from "fresh";

const app = new App()
  .use(ipFilter({
    denyList: ["192.168.1.10", "10.0.0.0/8"],
    allowList: ["192.168.1.0/24"],
  }))
  .get("/", () => new Response("hello"));
```

## 黑名单

阻止特定的 IP 或子网。来自匹配地址的任何请求都会收到 403 Forbidden 响应：

```ts main.ts
import { App, ipFilter } from "fresh";

const app = new App()
  .use(ipFilter({
    denyList: ["192.168.1.10", "2001:db8::1", "10.0.0.0/8"],
  }));
```

## 白名单

提供白名单后，只有匹配的 IP 才被允许。所有其他地址都会被阻止：

```ts main.ts
import { App, ipFilter } from "fresh";

const app = new App()
  .use(ipFilter({
    allowList: ["203.0.113.0/24", "2001:db8::/32"],
  }));
```

## 组合规则

当两个列表都提供时，黑名单规则会首先被检查。同时出现在两个列表中的 IP 会被阻止：

```ts main.ts
import { App, ipFilter } from "fresh";

const app = new App()
  .use(ipFilter({
    denyList: ["192.168.1.10"],
    allowList: ["192.168.1.0/24"],
  }));
```

在这个例子中，`192.168.1.0/24` 中的所有 IP 都被允许，但 `192.168.1.10` 除外。

## 自定义阻止响应

默认情况下，被阻止的请求会收到 `403 Forbidden` 响应。使用 `onBlocked` 回调来自定义响应：

```ts main.ts
import { App, ipFilter } from "fresh";

const app = new App()
  .use(ipFilter({
    denyList: ["10.0.0.0/8"],
  }, {
    onBlocked: (remote, ctx) => {
      console.log(`Blocked ${remote.addr} from ${ctx.url.pathname}`);
      return new Response("Access denied", { status: 401 });
    },
  }));
```

`onBlocked` 回调接收以下参数：

- `remote.addr` -- 客户端的 IP 地址
- `remote.type` -- `"IPv4"` 或 `"IPv6"`
- `ctx` -- 请求[上下文](/docs/concepts/context)
