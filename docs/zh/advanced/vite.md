---
description: |
  配置 Fresh Vite 插件，添加其他 Vite 插件，以及了解 Fresh 如何与 Vite 集成。
---

Fresh 2 使用 [Vite](https://vite.dev/) 进行开发和生产构建。Fresh Vite 插件处理 JSX 配置、热模块替换（HMR）、[island](/zh/concepts/islands) 发现、客户端/服务器代码拆分以及 React 到 Preact 的别名。

## 配置

Fresh Vite 插件可以在 `vite.config.ts` 中配置：

```ts vite.config.ts
import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";

export default defineConfig({
  plugins: [
    fresh({
      // 主服务器入口文件的路径。默认：main.ts
      serverEntry: "./path/to/main.ts",
      // 主客户端入口文件的路径。默认：client.ts
      clientEntry: "./path/to/client.ts",
      // Islands 目录的路径。默认：./islands
      islandsDir: "./islands",
      // 路由目录的路径。默认：./routes
      routeDir: "./routes",
      // 静态文件目录或目录。默认："static"
      // 当给出多个目录时，按顺序搜索，优先采用第一个匹配项。
      staticDir: ["static", "generated"],
      // 扫描路由和 island 目录时要忽略文件夹的可选正则表达式。
      ignore: [/[\\/]+some-folder[\\/]+/],
      // 要视为 island 文件的其他说明符。这用于声明来自第三方包的 islands。
      islandSpecifiers: ["@example/my-remote-island"],
    }),
  ],
});
```

## 添加其他 Vite 插件

你可以将任何 Vite 兼容的插件与 Fresh 一起使用。Fresh 插件通常应该放在第一位：

```ts vite.config.ts
import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    fresh(),
    tailwindcss(),
    // 在这里添加其他 Vite 插件
  ],
});
```

## 插件的作用

在幕后，Fresh Vite 插件：

- **自动配置 JSX** 用于 Preact（`jsxImportSource: "preact"`）
- **将 React 别名到 Preact**，这样依赖 React 的 npm 包开箱即用
- **通过 [Prefresh](https://github.com/preactjs/prefresh) 启用 HMR**，实现快速的组件热重载开发
- **发现 islands**，通过扫描 islands 目录和任何 `islandSpecifiers`
- **使用 Vite 的 Environments 功能构建单独的客户端和服务器包**
- **生成服务器入口**（`_fresh/server.js`）用于生产部署
- **验证导入**，以捕获在浏览器代码中导入仅 Node.js 模块等错误

## 热模块替换

在开发期间（`deno task dev`），Fresh Vite 插件启用 HMR，以便对组件、islands 和 CSS 的更改会立即反映在浏览器中，无需完全重新加载页面。这由 Prefresh（Preact 的快速刷新实现）提供支持。

## 从 Builder 迁移到 Vite

如果你的 Fresh 2 项目是使用 `--builder` 创建的（或者早于 Vite 插件），它使用的是在 `dev.ts` 中配置的旧版 [`Builder`](/zh/advanced/builder) 类。迁移到 Vite 主要是将 `dev.ts` 替换为 `vite.config.ts`，将 CSS 移入模块图，并更新 `deno.json`。

### 1. 更新 `deno.json`

将 Vite 插件和 `vite` 本身添加到你的导入中，删除仅用于 Builder 的 Tailwind 包（如果有），并将 `compilerOptions.types` 指向 Vite 的客户端类型，以便 HMR 和资源导入能够通过类型检查：

```diff deno.json
  {
    "nodeModulesDir": "manual",
    "tasks": {
-     "dev": "deno run -A --watch=static/,routes/ dev.ts",
-     "build": "deno run -A dev.ts build",
+     "dev": "vite",
+     "build": "vite build",
      "start": "deno serve -A _fresh/server.js"
    },
    "imports": {
      "fresh": "jsr:@fresh/core@^2",
      "preact": "npm:preact@^10",
      "@preact/signals": "npm:@preact/signals@^2",
+     "@fresh/plugin-vite": "jsr:@fresh/plugin-vite@^1",
+     "vite": "npm:vite@^7",
+     "@types/babel__core": "npm:@types/babel__core@^7"
    },
    "compilerOptions": {
      "jsx": "precompile",
      "jsxImportSource": "preact",
+     "types": ["vite/client"]
    }
  }
```

如果你之前使用 `@fresh/plugin-tailwind` / `@fresh/plugin-tailwindcss-v3`，请删除这些导入——Vite 有一个原生的 Tailwind 插件（见第 4 步）。

### 2. 将 `dev.ts` 替换为 `vite.config.ts`

删除 `dev.ts` 并在项目根目录创建一个 `vite.config.ts`：

```ts vite.config.ts
import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";

export default defineConfig({
  plugins: [fresh()],
});
```

如果你之前给 `new Builder({ ... })` 传递了选项（自定义 `serverEntry`、`islandDir`、`routeDir`、`staticDir`、`ignore`），请将等效的选项传递给 `fresh({ ... })`——名称是匹配的。参见上方的[配置](#配置)。

任何 `builder.registerIsland("jsr:@scope/pkg/Island.tsx")` 调用都变成
`fresh({ islandSpecifiers: ["jsr:@scope/pkg/Island.tsx"] })`。

### 3. 添加 `client.ts` 入口

Builder 通过扫描 `static/` 来发现 CSS。Vite 需要 CSS 成为模块图的一部分，以便它能进行哈希、打包和热重载。将你的样式表从 `static/` 移出，并从一个新的 `client.ts` 文件中导入它：

```diff Project structure
  <project root>
- ├── static/styles.css
+ ├── assets/styles.css
+ ├── client.ts
  ├── vite.config.ts
  └── main.ts
```

```ts client.ts
// 在这里导入 CSS 文件以使热模块重载工作。
import "./assets/styles.css";
```

然后从你的应用包装器中删除手动添加的 `<link>`——Vite 会为你注入样式表：

```diff routes/_app.tsx
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My App</title>
-   <link rel="stylesheet" href="/styles.css" />
  </head>
```

不属于 JS/CSS 图的静态资源（favicon、通过 URL 提供的图片、robots.txt 等）仍保留在 `static/` 中。

### 4. 切换 Tailwind 插件（如果适用）

将 Builder 端的 Tailwind 插件替换为官方 Vite 插件：

```diff deno.json
  "imports": {
-   "@fresh/plugin-tailwind": "jsr:@fresh/plugin-tailwind@^1",
-   "@tailwindcss/postcss": "npm:@tailwindcss/postcss@^4",
-   "postcss": "npm:postcss@^8",
+   "@tailwindcss/vite": "npm:@tailwindcss/vite@^4",
    "tailwindcss": "npm:tailwindcss@^4"
  }
```

```ts vite.config.ts
import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [fresh(), tailwindcss()],
});
```

确保你的样式表以 `@import "tailwindcss";` 开头，并从 `client.ts` 中导入。

### 5. 验证

运行 `deno install` 拉取新的 npm 包，然后：

```sh Terminal
deno task dev      # 启动带 HMR 的 Vite
deno task build    # 写入 _fresh/server.js 和客户端资源
deno task start    # deno serve -A _fresh/server.js
```

`_fresh/` 下的输出布局与 Builder 生成的一致，因此部署配置（Deno Deploy、Docker、`deno compile`）不需要更改。

### 检查清单

- [ ] 删除了 `dev.ts`，添加了 `vite.config.ts`
- [ ] 创建了 `client.ts` 并导入了你的 CSS
- [ ] 样式表从 `static/` 移出，并从 `_app.tsx` 中删除了 `<link>`
- [ ] `deno.json` 中的任务指向 `vite` / `vite build`
- [ ] `@fresh/plugin-vite`、`vite` 和 `@types/babel__core` 在 `imports` 中
- [ ] `compilerOptions.types` 中有 `"vite/client"`
- [ ] Tailwind（如果使用）已切换到 `@tailwindcss/vite`

> [info]: 如果你遇到困难，可以在一个临时目录中运行 `deno run -Ar jsr:@fresh/init`，
> 并将生成的项目与你的项目进行 diff 对比——生成器是基于 Vite 的 Fresh
> 工作设置的真实参考。

## 调试

要调试 Vite 解析问题，请使用 `--debug` 标志运行 Vite：

```sh Terminal
deno run -A npm:vite --debug
```

要检查插件转换，请使用 [`vite-plugin-inspect`](https://github.com/antfu-collective/vite-plugin-inspect)：

```ts vite.config.ts
import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import inspect from "vite-plugin-inspect";

export default defineConfig({
  plugins: [
    fresh(),
    inspect(), // 在 /__inspect 打开 UI 以查看所有转换
  ],
});
```
