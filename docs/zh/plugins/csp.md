---
description: "使用 csp 中间件设置内容安全策略（CSP）HTTP 头"
---

`csp()` 中间件可用于向 HTTP 请求添加[内容安全策略头](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP)。这些头用于限制文档允许加载的资源。

```ts main.ts
import { csp } from "fresh";

const app = new App()
  .use(csp({
    // 如果为 true，则设置 Content-Security-Policy-Report-Only 头
    // 而不是 Content-Security-Policy
    reportOnly: true,
    // 如果设置，则添加 Reporting-Endpoints、report-to 和 report-uri 指令
    reportTo: "/api/csp-reports",
    // 要添加或覆盖默认值的其他 CSP 指令
    csp: [
      "script-src 'self' 'unsafe-inline' 'https://example.com'",
    ],
  }))
  .get("/", () => new Response("hello"));
```

## 基于 Nonce 的 CSP

为了更严格的安全性，你可以使用基于 nonce 的 CSP 而不是 `'unsafe-inline'`。这确保只有 Fresh 渲染的内联 `<script>` 和 `<style>` 标签才能执行。

```ts main.ts
import { csp } from "fresh";

const app = new App()
  .use(csp({ useNonce: true }))
  .get("/", (ctx) => {
    return ctx.render(
      <html>
        <head>
          <style>{"body { color: red; }"}</style>
        </head>
        <body>
          <h1>Hello</h1>
        </body>
      </html>,
    );
  });
```

启用 `useNonce` 后：

- Fresh 会在服务器渲染时自动为每个内联 `<script>` 和 `<style>` 标签注入唯一的 `nonce` 属性。
- CSP 头会在 `script-src`、`style-src`、`default-src`、`script-src-elem`、`style-src-elem` 和 `style-src-attr` 指令中用 `'nonce-{value}'` 替换 `'unsafe-inline'`。
- 每个请求都会获得一个新的 nonce，因此攻击者无法预测其值。
- 非渲染响应（例如返回 JSON 的 API 路由）会回退到 `'unsafe-inline'`，因为没有渲染步骤来生成 nonce。

> [警告]：如果你在标签上设置了显式的 `nonce` 属性，它将保留在 HTML 中，但 CSP 头只包含 Fresh 生成的 nonce。除非标签的 nonce 与 CSP 头中的 nonce 匹配，否则浏览器将阻止该标签。为避免此问题，请让 Fresh 自动管理 nonce。

## 选项

有关所有支持的选项，请参阅 [API 文档](https://jsr.io/@fresh/core/doc/~/csp)。
