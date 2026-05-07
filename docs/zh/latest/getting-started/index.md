---
description: |
  在 Fresh 文档的本章节中，你将了解这个框架。创建新项目、在本地运行、编辑和创建页面、获取数据、处理用户交互并部署它。
---

# 快速开始

让我们设置你的第一个 Fresh 项目。要创建新项目，请运行以下命令：

```sh 终端
deno run -Ar jsr:@fresh/init
```

这将启动一个简短的向导，引导你完成设置，包括项目名称、是否使用 tailwindcss 以及是否使用 vscode。你的项目文件夹应该如下所示：

```txt-files 项目结构
<项目根目录>
├── components/         # 在这里存放其他组件。可以有不同的名称
│   └── Button.tsx
├── islands/            # 需要 JS 在客户端运行的组件
│   └── Counter.tsx
├── routes/             # [基于文件系统的路由](/docs/concepts/file-routing)
│   ├── api/
│   │   └── [name].tsx  # /api/:name 的 API 路由
│   ├── [_app.tsx](/docs/concepts/app)        # 渲染外部的 <html> 内容结构
│   └── index.tsx       # 渲染 /
├── static/             # 包含静态资源，如 css、logo 等
│   └── ...
│
├── client.ts       # 客户端入口文件，在每个页面上加载
├── main.ts         # 应用的服务器入口文件
├── deno.json       # 包含依赖项、任务等
└── [vite.config.ts](/docs/advanced/vite)  # Vite 配置文件
```

## 路径别名

你的新项目在 `deno.json` 中预配置了 `@/` 路径别名。这允许你使用从项目根目录开始的绝对导入，而不是相对路径：

```tsx routes/about.tsx
// 使用 @/ 别名
import { define } from "@/utils.ts";
import { Button } from "@/components/Button.tsx";

// 不使用别名（相对路径）
import { define } from "../utils.ts";
import { Button } from "../components/Button.tsx";
```

`@/` 别名在你的 `deno.json` imports 部分配置：

```json deno.json
{
  "imports": {
    "@/": "./"
    // ... 其他导入
  }
}
```

这使得导入更简洁，更容易重构，特别是在项目增长时。

运行 `dev` 任务以在开发模式下启动你的应用：

```sh 终端
deno task dev
```

前往终端中打印的 URL 查看你的应用。

<!-- 新初始化的 Fresh 应用截图，显示计数器：/docs/getting-started-1-init.jpg -->

> [信息]：如果在设置或开发过程中遇到任何问题，请查看
> [故障排除指南](/docs/latest/advanced/troubleshooting) 了解常见
> 问题和解决方案。

## 创建我们的第一个路由

让我们在 `/about` 创建一个新的 about 页面。我们可以通过添加一个新文件
在 `routes/about.tsx` 来实现。

```tsx routes/about.tsx
import { define } from "@/utils.ts";

export default define.page(() => {
  return (
    <main>
      <h1>关于</h1>
      <p>这是关于页面。</p>
    </main>
  );
});
```

如果我们在浏览器中导航到 `/about`，我们将看到新创建的页面。

<!-- /about 路由的截图：/docs/getting-started-2-about.png -->

## 创建一个岛屿

我们将创建一个倒计时组件，需要 JavaScript 在浏览器中运行。

在 `islands/Countdown.tsx` 创建一个新文件

```tsx islands/Countdown.tsx
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export function Countdown() {
  const count = useSignal(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count.value <= 0) {
        clearInterval(timer);
      }

      count.value -= 1;
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (count.value <= 0) {
    return <p>倒计时：🎉</p>;
  }

  return <p>倒计时：{count}</p>;
}
```

让我们将倒计时添加到我们的 about 页面：

```tsx routes/about.tsx
import { define } from "@/utils.ts";
import { Countdown } from "@/islands/Countdown.tsx";

export default define.page(() => {
  return (
    <main>
      <h1>关于</h1>
      <p>这是关于页面。</p>
      <Countdown />
    </main>
  );
});
```

现在，我们可以看到我们的倒计时在运行：

<!-- 倒计时组件的截图：/docs/getting-started-3-countdown.png -->

## 下一步

现在你已经有了一个可用的 Fresh 项目，以下是一些可以探索的内容：

- [**路由**](/docs/concepts/routing) - 了解路由模式、动态
  参数和特定方法的处理程序
- [**数据获取**](/docs/concepts/data-fetching) - 在服务器上加载数据
  并将其传递给页面组件
- [**岛屿**](/docs/concepts/islands) - 了解 Fresh 的部分
  水合工作原理以及什么可以作为 props 传递
- [**中间件**](/docs/concepts/middleware) - 添加身份验证、日志记录或
  自定义头部到你的路由
- [**架构**](/docs/concepts/architecture) - 查看请求如何流经
  整个框架
