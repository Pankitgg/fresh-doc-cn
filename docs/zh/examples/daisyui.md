---
title: Install daisyUI for Deno Fresh
desc: How to install Tailwind CSS and daisyUI in a Deno Fresh project
---

[daisyUI](https://daisyui.com/) 是一个为 [Tailwind CSS](https://tailwindcss.com/) 提供语义化类名的组件库，涵盖了按钮、卡片、模态框等常见 UI 组件。它能在保持完全兼容 Tailwind CSS 的同时，更快速地构建美观的界面。

## 安装

要开始使用 daisyUI，请确保你的 Fresh 项目已启用 Tailwind CSS，然后安装 daisyUI 并更新配置。

1. 运行 `deno i -D npm:daisyui@latest` 安装 daisyUI
2. 在 `./assets/styles.css` 中添加 daisyUI 配置：

   ```diff assets/styles.css
     @import "tailwindcss";
   + @plugin "daisyui";
   ```

现在你可以开始使用 daisyUI 了。

## 使用 daisyUI 组件

在 `components` 目录中创建一个按钮组件，可以参考 daisyUI 的样式类。

```tsx components/Button.tsx
import type { ComponentChildren } from "preact";

export interface ButtonProps {
  id?: string;
  onClick?: () => void;
  children?: ComponentChildren;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className="btn btn-dash btn-primary"
      {...props}
    />
  );
}
```

### 展示效果

![DaisyUI Showcase](/docs/fresh-daisyui-showcase.jpg)

### daisyUI 类名参考

更多组件和使用方法，请参阅 [daisyUI 官方文档](https://daisyui.com/)。
