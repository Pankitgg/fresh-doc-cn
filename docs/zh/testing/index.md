---
description: |
  学习如何使用 Deno 内置的测试运行器来测试 Fresh 应用程序。
---

为了确保应用程序按预期工作，我们可以编写测试。Fresh 的任何方面都可以作为一个整体进行测试，也可以单独测试。我们使用 Deno 内置的[测试运行器](https://docs.deno.com/runtime/fundamentals/testing/)来编写测试。

## 测试中间件

要测试[中间件](/docs/concepts/middleware)，我们创建一个虚拟应用程序，并在自定义的 `/` 处理程序中返回我们想要检查的相关信息。此测试假设 `utils.ts` 中的 `State` 对象具有 `text` 属性。

```ts tests/middleware.test.ts
import { expect } from "@std/expect";
import { App } from "fresh";
import { define, type State } from "../utils.ts";

const middleware = define.middleware((ctx) => {
  ctx.state.text = "middleware text";
  return ctx.next();
});

Deno.test("My middleware - sets ctx.state.text", async () => {
  const handler = new App<State>()
    .use(middleware)
    .get("/", (ctx) => {
      return new Response(ctx.state.text || "");
    })
    .handler();

  const res = await handler(new Request("http://localhost"));
  const text = await res.text();

  expect(text).toEqual("middleware text");
});
```

您可以扩展此模式来测试其他中间件。当您的中间件向返回的响应添加标头时，您也可以对此进行断言。

## 测试应用包装器或布局

[应用包装器](/docs/advanced/app-wrapper)组件和[布局](/docs/advanced/layouts)都可以用相同的方式进行测试。

```tsx tests/appWrapper.test.tsx
import { expect } from "@std/expect";
import { App } from "fresh";
import { define, type State } from "../utils.ts";

const AppWrapper = define.layout(function AppWrapper({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>My App</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});

Deno.test("App Wrapper - renders title and content", async () => {
  const handler = new App<State>()
    .appWrapper(AppWrapper)
    .get("/", (ctx) => ctx.render(<h1>hello</h1>))
    .handler();

  const res = await handler(new Request("http://localhost"));
  const text = await res.text();

  expect(text).toContain("My App");
  expect(text).toContain("hello");
});
```

布局也可以采用相同的方式进行测试。

```tsx tests/layout.test.tsx
import { expect } from "@std/expect";
import { App } from "fresh";
import { define, type State } from "../utils.ts";

const MyLayout = define.layout(function MyLayout({ Component }) {
  return (
    <div>
      <h1>My Layout</h1>
      <Component />
    </div>
  );
});

Deno.test("MyLayout - renders heading and content", async () => {
  const handler = new App<State>()
    .appWrapper(MyLayout)
    .get("/", (ctx) => ctx.render(<h1>hello</h1>))
    .handler();

  const res = await handler(new Request("http://localhost"));
  const text = await res.text();

  expect(text).toContain("My Layout");
  expect(text).toContain("hello");
});
```

## 测试路由和处理程序

对于测试路由处理程序和业务逻辑，您可以使用上面所示的相同 [`App`](/docs/concepts/app) 模式。Fresh 使测试单个路由变得容易，无需完整的构建过程，只要它们导出一个处理程序：

```ts tests/routes.test.ts
import { expect } from "@std/expect";
import { App } from "fresh";
import { type State } from "../utils.ts";

// 导入实际的路由处理程序
import { handler as apiHandler } from "../routes/api/[name].tsx";

Deno.test("API route returns name", async () => {
  const app = new App<State>()
    .get("/api/:name", apiHandler.GET)
    .handler();

  const response = await app(new Request("http://localhost/api/joe"));
  const text = await response.text();

  expect(text).toEqual("Hello, Joe!");
});
```

## 测试岛屿

测试岛屿需要针对服务端和客户端行为采用不同的方法：

### 岛屿的服务端渲染

您可以使用相同的 [`App`](/docs/concepts/app) 模式来测试岛屿在服务器上是否正确渲染。注意：这需要 `.tsx` 文件扩展名才能使用 JSX：

```tsx tests/island-ssr.test.tsx
import { expect } from "@std/expect";
import { App } from "fresh";
import { useSignal } from "@preact/signals";
import { type State } from "../utils.ts";
import Counter from "../islands/Counter.tsx";

function CounterPage() {
  const count = useSignal(3);
  return (
    <div class="p-8">
      <h1>Counter Test Page</h1>
      <Counter count={count} />
    </div>
  );
}

Deno.test("Counter page renders island", async () => {
  const app = new App<State>()
    .get("/counter", (ctx) => {
      return ctx.render(<CounterPage />);
    })
    .handler();

  const response = await app(new Request("http://localhost/counter"));
  const html = await response.text();

  // 验证岛屿的初始 HTML 是否存在
  expect(html).toContain('class="flex gap-8 py-6"');
  expect(html).toContain("Counter Test Page");
  expect(html).toContain("3");
});
```

### 岛屿的客户端交互

对于测试客户端岛屿行为（点击、状态更改等），您需要完整的构建和浏览器环境。您可以使用类似于 Fresh 自身测试的方法：

```tsx tests/island-client.test.tsx
import { expect } from "@std/expect";
import { buildFreshApp, startTestServer } from "./test-utils.ts";

const app = await buildFreshApp();

Deno.test("Counter island renders correctly", async () => {
  const { server, address } = startTestServer(app);

  try {
    // 基本冒烟测试：验证岛屿 HTML 是否被提供
    const response = await fetch(`${address}/`);
    const html = await response.text();

    expect(html).toContain('class="flex gap-8 py-6"');
    expect(html).toContain("3");
  } finally {
    await server.shutdown();
  }
});
```

```tsx tests/test-utils.ts
import { createBuilder, type InlineConfig } from "vite";
import * as path from "@std/path";

// 默认的 Fresh 构建配置
export const FRESH_BUILD_CONFIG: InlineConfig = {
  logLevel: "error",
  root: "./",
  build: { emptyOutDir: true },
  environments: {
    ssr: { build: { outDir: path.join("_fresh", "server") } },
    client: { build: { outDir: path.join("_fresh", "client") } },
  },
};

// 辅助函数：创建并构建 Fresh 应用程序
export async function buildFreshApp(config: InlineConfig = FRESH_BUILD_CONFIG) {
  const builder = await createBuilder(config);
  await builder.buildApp();
  return await import("../_fresh/server.js");
}

// 辅助函数：启动测试服务器
export function startTestServer(app: {
  default: {
    fetch: (req: Request) => Promise<Response>;
  };
}) {
  const server = Deno.serve({
    port: 0,
    handler: app.default.fetch,
  });

  const { port } = server.addr as Deno.NetAddr;
  const address = `http://localhost:${port}`;

  return { server, address };
}
```

**注意：** 对于大多数应用程序，测试服务端渲染就足够了。只有当您有复杂的岛屿逻辑需要验证时，才需要测试客户端交互。
