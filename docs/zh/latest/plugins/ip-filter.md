---
description: "使用 ipFilter 中间件按 IP 地址限制访问"
---

`ipFilter()` 中间件根据客户端的 IP 地址限制访问。它支持拒绝列表、允许列表和 CIDR 子网匹配。拒绝规则始终优先于允许规则。

```ts main.ts
import { App, ipFilter } from "fresh";

const app = new App()
  .use(ipFilter({
    denyList: ["192.168.1.10", "10.0.0.0/8"],
    allowList: ["192.168.1.0/24"],
  }))
  .get("/", () => new Response("hello"));
```

## 拒绝列表

阻止特定的 IP 或子网。来自匹配地址的任何请求都会收到 403 Forbidden 响应：

```ts main.ts
import { App, ipFilter } from "fresh";

const app = new App()
  .use(ipFilter({
    denyList: ["192.168.1.10", "2001:db8::1", "10.0.0.0/8"],
  }));
```

## 允许列表

当提供允许列表时，只允许匹配的 IP。所有其他地址都被阻止：

```ts main.ts
import { App, ipFilter } from "fresh";

const app = new App()
  .use(ipFilter({
    allowList: ["203.0.113.0/24", "2001:db8::/32"],
  }));
```

## 组合规则

当同时提供两个列表时，首先检查拒绝规则。出现在两个列表中的 IP 会被阻止：

```ts main.ts
import { App, ipFilter } from "fresh";

const app = new App()
  .use(ipFilter({
    denyList: ["192.168.1.10"],
    allowList: ["192.168.1.0/24"],
  }));
```

在此示例中，`192.168.1.0/24` 的所有地址都被允许，除了 `192.168.1.10`。

## 自定义阻止响应

默认情况下，被阻止的请求会收到 `403 Forbidden` 响应。使用 `onBlocked` 回调来自定义此行为：

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

`onBlocked` 回调接收：

- `remote.addr` -- 客户端的 IP 地址
- `remote.type` -- `"IPv4"` 或 `"IPv6"`
- `ctx` -- 请求 [上下文](/docs/concepts/context)