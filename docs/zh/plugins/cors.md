---
description: "使用 cors 中间件设置 CORS HTTP 头"
---

`cors()` 中间件可用于向 HTTP 请求添加[跨域资源共享头](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS)。这些头用于指示服务器允许除自身以外的其他来源（域名、协议或端口）加载资源。

```ts main.ts
import { cors } from "fresh";

const app = new App()
  .use(cors({
    origin: "http://example.com",
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
    credentials: true,
  }))
  .get("/", () => new Response("hello"));
```

## 选项

有关所有支持的选项，请参阅 [API 文档](https://jsr.io/@fresh/core/doc/~/cors)。
