---
description: Fresh 框架介绍
---

# 介绍

Fresh 是 Deno 的下一代 Web 框架。它具有以下特点：

- **零配置**：无需复杂的配置文件，开箱即用
- **岛屿架构**：只在需要交互的地方运行 JavaScript
- **服务端优先**：默认在服务端渲染页面
- **快速响应**：极小的 JavaScript 捆绑包，最小的加载时间

## 工作原理

Fresh 基于以下核心技术：

- **Deno**：现代的 JavaScript 和 TypeScript 运行时
- **Preact**：轻量级 React 替代品
- **Vite**：快速的开发服务器和构建工具
- **TypeScript**：静态类型检查

## 为什么选择 Fresh？

### 1. 极致的性能

Fresh 默认在服务端渲染页面，确保用户能够快速看到内容。客户端只需要加载页面所需的最小 JavaScript。

### 2. 岛屿架构

Fresh 的岛屿架构让您可以精确控制页面的交互性。只有标记为 island 的组件才会发送 JavaScript 到客户端，其他内容保持静态 HTML。

### 3. 简洁的开发体验

无需复杂的配置，无需构建步骤。您可以直接编写代码，Fresh 会处理其余的事情。

### 4. 完整的类型安全

Fresh 使用 TypeScript 开发，提供完整的类型检查和智能提示。

## 开始使用

要创建您的第一个 Fresh 项目，请查看 [快速开始指南](/zh/getting-started/)。

## 下一步

- [核心概念](/zh/concepts/architecture) - 了解 Fresh 的工作原理
- [岛屿](/zh/concepts/islands) - 学习如何创建交互式组件
- [路由](/zh/concepts/routing) - 了解如何处理不同的 URL