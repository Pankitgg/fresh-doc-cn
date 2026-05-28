---
description: 创建您的第一个 Fresh 项目
---

# 快速开始

本指南将帮助您在几分钟内创建第一个 Fresh 项目。

## 前置要求

在开始之前，请确保您已经安装了 Deno：

```sh
# 如果您还没有安装 Deno，请访问 https://deno.land/manual/getting_started/installation
curl -fsSL https://deno.land/install.sh | sh
```

## 创建新项目

使用 Fresh 初始化命令创建新项目：

```sh
deno run -A jsr:@fresh/init my-fresh-project
```

这将创建一个名为 `my-fresh-project` 的新目录，并设置所有必要的文件。

## 项目结构

创建的项目结构如下：

```
my-fresh-project/
├── deno.json          # Deno 配置文件
├── main.ts            # 应用入口点
├── routes/            # 路由文件目录
│   ├── index.tsx      # 主页路由
│   └── about.tsx      # 关于页面路由
├── islands/           # Islands 目录（交互式组件）
│   └── Counter.tsx    # 示例 island
├── components/         # 组件目录
│   └── Button.tsx     # 示例组件
├── fresh.config.ts    # Fresh 配置文件
├── fresh.gen.ts       # 自动生成的清单文件
├── dev.ts             # 开发脚本
└── .gitignore
```

## 启动开发服务器

进入项目目录并启动开发服务器：

```sh
cd my-fresh-project
deno task dev
```

现在您可以在浏览器中访问 http://localhost:8000 查看您的应用。

## 创建第一个路由

Fresh 使用文件系统路由。创建 `routes/greeting.tsx` 文件：

```tsx
export default function Greeting({ params }: PageProps) {
  return (
    <main>
      <h1>Hello, {params.name}!</h1>
    </main>
  );
}
```

访问 http://localhost:8000/greeting/World 查看结果。

## 创建第一个 Island

Islands 是客户端可交互的组件。创建 `islands/Counter.tsx`：

```tsx
import { useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
```

在页面中使用这个 island：

```tsx
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <main>
      <h1>我的页面</h1>
      <Counter />
    </main>
  );
}
```

## 部署

当您准备好部署时，运行构建命令：

```sh
deno task build
```

然后使用 Deno Deploy 部署：

```sh
deno deploy kv --prod
```

## 下一步

- [架构概览](/zh/latest/concepts/architecture) - 了解 Fresh 的工作原理
- [岛屿](/zh/latest/concepts/islands) - 深入了解岛屿架构
- [路由](/zh/latest/concepts/routing) - 了解更多路由选项