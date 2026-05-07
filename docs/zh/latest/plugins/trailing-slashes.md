---
description: "确保 URL 始终以尾部斜杠结尾或永不以尾部斜杠结尾"
---

`trailingSlashes()` 中间件可用于确保 URL 路径名始终以斜杠字符结尾或永不以斜杠结尾。它会相应地重定向用户的请求。

```ts main.ts
import { trailingSlashes } from "fresh";

const app = new App()
  .use(trailingSlashes("never"))
  .get("/", () => new Response("hello"));
```

始终追加尾部斜杠：

```ts main.ts
import { trailingSlashes } from "fresh";

const app = new App()
  .use(trailingSlashes("always"))
  .get("/", () => new Response("hello"));
```