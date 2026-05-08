---
description: "使用此中间件防止跨站请求伪造"
---

`csrf()` 中间件可用于防范[跨站请求伪造漏洞](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/CSRF)。它通过检查[`Sec-Fetch-Site`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Sec-Fetch-Site)和[`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Origin)头来验证状态更改请求（POST、PUT、DELETE 等）是否来自你自己的网站。来自不受信任来源的请求将被拒绝。

```ts main.ts
import { App, csrf } from "fresh";

const app = new App();

app.use(csrf());

// 指定单个来源
app.use(csrf({ origin: "https://example.com" }));

// 指定多个来源
app.use(
  csrf({ origin: ["https://example.com", "https://trusted.example.com"] }),
);

// 使用函数
app.use(
  csrf({
    origin: (origin) => /^https:\/\/(foo|bar)\.example\.com$/.test(origin),
  }),
);
```
