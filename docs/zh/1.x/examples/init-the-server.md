---
description: |
  当你有需要执行一次的复杂初始化设置时。
---

# 初始化服务器

假设你刚刚初始化了一个新的 Fresh 项目。你想要执行一些复杂的设置，这些设置需要在服务器启动之前运行一次。幸运的是，这相当简单。以下是具体做法。像这样修改你的 `fresh.config.ts`：

```diff fresh.config.ts
 import twindConfig from "./twind.config.ts";
+import { Context } from "./routes/_middleware.ts";
+
+await Context.init();

 export default defineConfig({
   plugins: [twindPlugin(twindConfig)],
```

所以你的完整 `fresh.config.ts` 应该看起来像这样：

```ts fresh.config.ts
import { defineConfig } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import { Context } from "./routes/_middleware.ts";

await Context.init();

export default defineConfig({
  plugins: [twindPlugin(twindConfig)],
});
```

但是在我们创建的这个新的 `_middleware.ts` 中发生了什么？

```ts routes/_middleware.ts
import { FreshContext } from "$fresh/server.ts";

export interface State {
  context: Context;
}

export class Context {
  private static context: Context;
  private complicatedStartupValue: number;

  public constructor() {
    console.log("我在初始化时被调用，而不是在处理请求时！");
    // 假设这需要连接到数据库
    // 或执行一些繁重的计算
    this.complicatedStartupValue = 42;
  }

  public static async init() {
    Context.context = new Context();
  }

  public static instance() {
    if (this.context) return this.context;
    else throw new Error("Context 未初始化！");
  }
}

export async function handler(
  _req: Request,
  ctx: FreshContext<State>,
) {
  ctx.state.context = Context.instance();
  if (ctx.destination === "route") {
    console.log("我在请求时被调用！");
    console.log(ctx.state.context);
  }
  const resp = await ctx.next();
  return resp;
}
```

所以现在在这个 `handler`（或你创建的任何其他 `handler` 函数）中，你可以通过调用 `Context.instance()` 来访问复杂的初始化步骤。

## 验证效果

### 开发模式

当你运行 `deno task start` 时，你应该看到以下输出：

```txt Terminal output
Task start deno run -A --watch=static/,routes/ dev.ts
Watcher Process started.
我在初始化时被调用，而不是在处理请求时！
The manifest has been generated for 6 routes and 1 islands.

 🍋 Fresh ready
    Local: http://localhost:8000/
```

访问 `http://localhost:8000/` 应该产生：

```txt Terminal output
我在请求时被调用！
Context { complicatedStartupValue: 42 }
```

### 构建模式

当你运行 `deno task build` 时，你应该看到：

```txt Terminal output
Task build deno run -A dev.ts build
我在初始化时被调用，而不是在处理请求时！
The manifest has been generated for 6 routes and 1 islands.
Assets written to: /path/to/my/project/_fresh
```

这与路由处理无关，但请注意初始化已经发生。

### 预览模式

最后，当你运行 `deno task preview` 时，你应该看到：

```txt Terminal output
Task preview deno run -A main.ts
我在初始化时被调用，而不是在处理请求时！
Using snapshot found at /Users/reed/code/temp/1763/_fresh

 🍋 Fresh ready
    Local: http://localhost:8000/
```

访问 `http://localhost:8000/` 应该产生：

```txt Terminal output
我在请求时被调用！
Context { complicatedStartupValue: 42 }
```
