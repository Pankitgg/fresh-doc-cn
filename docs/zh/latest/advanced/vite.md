---
description: |
  配置 Fresh Vite 插件，添加其他 Vite 插件，并了解 Fresh 如何与 Vite 集成。
---

# Vite 配置

Fresh 2 使用 [Vite](https://vite.dev/) 进行开发和生产构建。Fresh Vite 插件处理 JSX 配置、热模块替换（HMR）、[岛屿](/docs/concepts/islands) 发现、客户端/服务端代码分割以及 React-to-Preact 别名。

## 配置

Fresh Vite 插件可以在 `vite.config.ts` 中配置：

```ts vite.config.ts
import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";

export default defineConfig({
  plugins: [
    fresh({
      // 主服务器入口文件路径。默认值：main.ts
      serverEntry: "./path/to/main.ts",
      // 主客户端入口文件路径。默认值：client.ts
      clientEntry: "./path/to/client.ts",
      // 岛屿目录路径。默认值：./islands
      islandsDir: "./islands",
      // 路由目录路径。默认值：./routes
      routeDir: "./routes",
      // 静态文件目录或目录列表。默认值："static"
      // 当给定多个目录时，按顺序搜索，第一个匹配的获胜。
      staticDir: ["static", "generated"],
      // 在爬取路由和岛屿目录时忽略文件夹的可选正则表达式。
      ignore: [/[\\/]+some-folder[\\/]+/],
      // 要视为岛屿文件的附加说明符。用于从第三方包声明岛屿。
      islandSpecifiers: ["@example/my-remote-island"],
    }),
  ],
});
```

## 添加其他 Vite 插件

您可以在 Fresh 旁边使用任何与 Vite 兼容的插件。Fresh 插件通常应该放在第一位：

```ts vite.config.ts
import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    fresh(),
    tailwindcss(),
    // 在这里添加任何其他 Vite 插件
  ],
});
```

## 插件的作用

在幕后，Fresh Vite 插件：

- **自动配置 JSX** 用于 Preact（`jsxImportSource: "preact"`）
- **将 React 别名到 Preact**，因此依赖 React 的 npm 包可以开箱即用
- **通过 [Prefresh](https://github.com/preactjs/prefresh) 启用 HMR**，以便在开发过程中快速重新加载组件
- **通过扫描岛屿目录和任何 `islandSpecifiers` 发现岛屿**
- **使用 Vite 的环境功能构建单独的客户端和服务端捆绑包**
- **生成服务器入口**（`_fresh/server.js`）用于生产部署
- **验证导入**以捕获在浏览器代码中导入仅 Node.js 模块等错误

## 热模块替换

在开发过程中（`deno task dev`），Fresh Vite 插件启用 HMR，以便对组件、岛屿和 CSS 的更改立即反映在浏览器中，无需完全重新加载页面。这由 Preact 的快速刷新实现 Prefresh 提供支持。

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
    inspect(), // 在 /__inspect 打开 UI 查看所有转换
  ],
});
```
