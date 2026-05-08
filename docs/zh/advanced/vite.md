---
description: |
  配置 Fresh Vite 插件，添加其他 Vite 插件，以及了解 Fresh 如何与 Vite 集成。
---

Fresh 2 使用 [Vite](https://vite.dev/) 进行开发和生产构建。Fresh Vite 插件处理 JSX 配置、热模块替换（HMR）、[island](/docs/concepts/islands) 发现、客户端/服务器代码拆分以及 React 到 Preact 的别名。

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
