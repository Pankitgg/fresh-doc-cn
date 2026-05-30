---
description: |
  更改源目录以有效管理你的项目。
---

# 使用 CSP

根据 [MDN 文档](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)：

> 内容安全策略（CSP）是一个额外的安全层，有助于检测和缓解某些类型的攻击，包括跨站脚本（XSS）和数据注入攻击。这些攻击被用于从数据盗窃到网站篡改，再到恶意软件分发的一切。
>
> 要启用 CSP，你需要配置你的 Web 服务器以返回 Content-Security-Policy HTTP 头部。（有时你可能会看到 X-Content-Security-Policy 头部的提及，但这是一个较旧的版本，你不再需要指定它。）

幸运的是，Fresh 内置了对 CSP 的支持。我们不需要担心自己设置头部信息。我们只需要正确配置我们的路由即可。让我们深入一些示例来看看它是如何工作的。

Fresh 的 CSP 实现支持以下

<details>
<summary>指令</summary>

```ts fresh 🍋
export interface ContentSecurityPolicyDirectives {
  // Fetch directives
  /**
   * Defines the valid sources for web workers and nested browsing contexts
   * loaded using elements such as <frame> and <iframe>.
   */
  childSrc?: string[];
  /**
   * Restricts the URLs which can be loaded using script interfaces.
   */
  connectSrc?: string[];
  /**
   * Serves as a fallback for the other fetch directives.
   */
  defaultSrc?: string[];
  /**
   * Specifies valid sources for fonts loaded using @font-face.
   */
  fontSrc?: string[];
  /**
   * Specifies valid sources for nested browsing contexts loading using elements
   * such as <frame> and <iframe>.
   */
  frameSrc?: string[];
  /**
   * Specifies valid sources of images and favicons.
   */
  imgSrc?: string[];
  /**
   * Specifies valid sources for loading media using the <audio> , <video> and
   * <track> elements.
   */
  mediaSrc?: string[];
  /**
   * Specifies valid sources for the <object>, <embed>, and <applet> elements.
   */
  objectSrc?: string[];
  /**
   * Specifies valid sources to be prefetched or prerendered.
   */
  prefetchSrc?: string[];
  /**
   * Specifies valid sources for JavaScript.
   */
  scriptSrc?: string[];
  /**
   * Specifies valid sources for JavaScript <script> elements.
   */
  scriptSrcElem?: string[];
  /**
   * Specifies valid sources for JavaScript inline event handlers.
   */
  scriptSrcAttr?: string[];
  /**
   * Specifies valid sources for stylesheets.
   */
  styleSrc?: string[];
  /**
   * Specifies valid sources for stylesheets <style> elements and <link>
   * elements with rel="stylesheet".
   */
  styleSrcElem?: string[];
  /**
   * Specifies valid sources for inline styles applied to individual DOM
   * elements.
   */
  styleSrcAttr?: string[];
  /**
   * Specifies valid sources for Worker, SharedWorker, or ServiceWorker scripts.
   */
  workerSrc?: string[];

  // Document directives
  /**
   * Restricts the URLs which can be used in a document's <base> element.
   */
  baseUri?: string[];
  /**
   * Enables a sandbox for the requested resource similar to the <iframe>
   * sandbox attribute.
   */
  sandbox?: string[];

  // Navigation directives
  /**
   * Restricts the URLs which can be used as the target of a form submissions
   * from a given context.
   */
  formAction?: string[];
  /**
   * Specifies valid parents that may embed a page using <frame>, <iframe>,
   * <object>, <embed>, or <applet>.
   */
  frameAncestors?: string[];
  /**
   * Restricts the URLs to which a document can initiate navigation by any
   * means, including <form> (if form-action is not specified), <a>,
   * window.location, window.open, etc.
   */
  navigateTo?: string[];

  /**
   * The URI to report CSP violations to.
   */
  reportUri?: string;
}
```

</details>

在我们的示例中，我们将只关注 `styleSrc`，但该技术可以应用于任何指令。

我们将从定义一个示例样式表开始：

```css static/example.css
h1 {
  font-size: 25px;
  font-weight: normal;
  margin-top: 5px;
  margin-left: 25px;
}
```

## 不使用 CSP

为了开始，我们将创建以下控制路由，它不会对 CSP 做任何事情。我们包含一个样式表来确认我们的样式表正确地样式化响应。

```tsx routes/noCSP.tsx
import { RouteContext } from "$fresh/server.ts";

export default function Home(req: Request, ctx: RouteContext) {
  return (
    <>
      <h1>此页面完全不使用 CSP。样式将被应用。</h1>
      <link rel="stylesheet" type="text/css" href="example.css" />
    </>
  );
}
```

我们可以访问 `http://localhost:8000/noCSP`，我们应该看到以下内容：

```txt Response body
此页面完全不使用 CSP。样式将被应用。
```

## 不正确的 CSP

让我们在响应中调用 `useCSP` hook 来尝试保护我们的页面。仔细观察，我们使用了错误的 URL！这将导致浏览器拒绝样式表，由于 Fresh 产生的头部信息。当浏览器尝试请求此资源时，我们会得到 `(blocked:csp)` 状态。

```tsx routes/incorrectCSP.tsx
import { RouteConfig, RouteContext } from "$fresh/server.ts";
import { useCSP } from "$fresh/runtime.ts";

export default function Home(req: Request, ctx: RouteContext) {
  useCSP((csp) => {
    if (!csp.directives.styleSrc) {
      csp.directives.styleSrc = [];
    }
    csp.directives.styleSrc.push("http://www.example.com");
  });
  return (
    <>
      <h1>此页面违反了我们配置的 CSP。样式不会被应用。</h1>
      <link rel="stylesheet" type="text/css" href="example.css" />
    </>
  );
}

export const config: RouteConfig = {
  csp: true,
};
```

我们可以访问 `http://localhost:8000/incorrectCSP`，我们应该看到以下内容：

```txt Response body
此页面违反了我们配置的 CSP。样式不会被应用。
```

## 正确的 CSP

让我们修复这个简单的错误并使用正确的 URL。这里一切正常工作。

```tsx routes/correctCSP.tsx
import { RouteConfig, RouteContext } from "$fresh/server.ts";
import { useCSP } from "$fresh/runtime.ts";

export default function Home(req: Request, ctx: RouteContext) {
  useCSP((csp) => {
    if (!csp.directives.styleSrc) {
      csp.directives.styleSrc = [];
    }
    csp.directives.styleSrc.push("http://localhost:8000/example.css");
  });
  return (
    <>
      <h1>此页面符合我们配置的 CSP。样式将被应用。</h1>
      <link rel="stylesheet" type="text/css" href="example.css" />
    </>
  );
}

export const config: RouteConfig = {
  csp: true,
};
```

我们可以访问 `http://localhost:8000/correctCSP`，我们应该看到以下内容：

```txt Response body
此页面符合我们配置的 CSP。样式将被应用。
```

## 没有 RouteConfig

如果我们忘记在路由中使用 `RouteConfig` 会发生什么？

```tsx routes/cspNoRouteConfig.tsx
import { RouteContext } from "$fresh/server.ts";
import { useCSP } from "$fresh/runtime.ts";

export default function Home(req: Request, ctx: RouteContext) {
  useCSP((csp) => {
    if (!csp.directives.styleSrc) {
      csp.directives.styleSrc = [];
    }
    csp.directives.styleSrc.push("http://www.example.com");
  });
  return (
    <>
      <h1>
        此页面违反了我们配置的 CSP。但我们没有启用{" "}
        <code>RouteConfig</code>{" "}
        ，所以 Fresh 不知道使用 CSP。样式将被应用。
      </h1>
      <link rel="stylesheet" type="text/css" href="example.css" />
    </>
  );
}
```

我们可以访问 `http://localhost:8000/cspNoRouteConfig`，我们应该看到以下内容：

```txt Response body
此页面违反了我们配置的 CSP。但我们没有启用 RouteConfig，所以 Fresh 不知道使用 CSP。样式将被应用。
```

## 报告

让我们谈谈 CSP 的报告方面。CSP（和 Fresh 的框架）支持 `reportOnly` 标志和 `reportUri` 端点。这是一个应该能够接收 `POST` 请求的目标。如果启用了 `reportOnly` 标志，那么浏览器将忽略 CSP 头部并将任何问题记录到 `reportUri` 目标。

```tsx routes/incorrectCSPwithReport.tsx
import { RouteConfig, RouteContext } from "$fresh/server.ts";
import { useCSP } from "$fresh/runtime.ts";

export default function Home(req: Request, ctx: RouteContext) {
  useCSP((csp) => {
    csp.reportOnly = true;
    if (!csp.directives.styleSrc) {
      csp.directives.styleSrc = [];
    }
    csp.directives.reportUri = "http://localhost:8000/reportHandler";
    csp.directives.styleSrc.push("http://www.example.com");
  });
  return (
    <>
      <h1>
        此页面违反了我们配置的 CSP。但我们使用了 "reportOnly"。样式将被应用。
      </h1>
      <link rel="stylesheet" type="text/css" href="example.css" />
    </>
  );
}

export const config: RouteConfig = {
  csp: true,
};
```

```ts routes/reportHandler.ts
import { FreshContext } from "$fresh/server.ts";

export const handler = {
  async POST(req: Request, _ctx: FreshContext) {
    const body = await req.json();
    const report = JSON.stringify(body, null, 2);

    await Deno.writeTextFile("./csp-reports.txt", report + "\n", {
      append: true,
    });
    return new Response(null, { status: 200 });
  },
};
```

我们可以访问 `http://localhost:8000/incorrectCSPwithReport`，我们应该看到以下内容：

```txt Response body
此页面违反了我们配置的 CSP。但我们使用了 "reportOnly"。样式将被应用。
```

然后我们可以检查我们的服务器，我们会看到 `csp-reports.txt` 有一个类似这样的条目：

```json csp-reports.txt
{
  "csp-report": {
    "document-uri": "http://localhost:8000/incorrectCSPwithReport",
    "referrer": "http://localhost:8000/incorrectCSPwithReport",
    "violated-directive": "style-src-elem",
    "effective-directive": "style-src-elem",
    "original-policy": "default-src 'none'; style-src 'unsafe-inline' http://www.example.com; report-uri http://localhost:8000/reportHandler; script-src 'nonce-0f2d8259315d40479e8c21979128ac0d'; connect-src 'self'",
    "disposition": "report",
    "blocked-uri": "http://localhost:8000/example.css",
    "line-number": 37,
    "source-file": "http://localhost:8000/incorrectCSPwithReport",
    "status-code": 200,
    "script-sample": ""
  }
}
```
