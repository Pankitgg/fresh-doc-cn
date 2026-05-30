---
description: |
  Fresh 中的插件可用于扩展核心功能。
---

Fresh 中的插件可用于扩展核心功能。插件可以添加新的路由、中间件、静态资产，甚至修改 Fresh 服务器的行为。

## 使用插件

插件在 `fresh.config.ts` 文件中配置。这是一个使用插件的示例：

```ts fresh.config.ts
import { defineConfig } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

export default defineConfig({
  plugins: [twindPlugin(twindConfig)],
});
```

## 创建插件

你可以通过创建一个返回 `Plugin` 对象的模块来创建自己的插件。

```ts my-plugin.ts
import { Plugin } from "$fresh/server.ts";

export default function myPlugin(): Plugin {
  return {
    name: "my-plugin",
  };
}
```

插件可以具有以下属性：

- `name`：插件的名称（必需）
- `routes`：插件添加的路由
- `middlewares`：插件添加的中间件
- `statics`：插件提供的静态资产
- `render`：自定义渲染函数
- `buildStart`：在提前构建开始时调用的钩子
- `buildEnd`：在提前构建结束时调用的钩子

## 插件路由

插件可以添加自己的路由。这些路由的处理方式与常规路由相同。

```ts my-plugin.ts
import { Plugin } from "$fresh/server.ts";

export default function myPlugin(): Plugin {
  return {
    name: "my-plugin",
    routes: [
      {
        path: "/my-plugin-route",
        component: MyPluginRoute,
      },
    ],
  };
}
```

## 插件中间件

插件还可以添加中间件，这些中间件将在路由处理程序之前运行。

```ts my-plugin.ts
import { Plugin } from "$fresh/server.ts";

export default function myPlugin(): Plugin {
  return {
    name: "my-plugin",
    middlewares: [
      {
        middleware: myMiddleware,
      },
    ],
  };
}
```
