---
layout: home
title: Fresh
hero:
  name: Fresh
  text: 现代化的 Deno 全栈框架
  tagline: 无需配置文件，无需构建步骤，无需 node_modules。只需一个文件，你就拥有一个支持路由、JSX 和岛屿的服务器。
  actions:
    - theme: brand
      text: 开始使用
      link: /zh/getting-started/
    - theme: alt
      text: English Documentation
      link: /en/getting-started/
features:
  - title: 零配置
    details: Fresh 开箱即用，无需复杂的配置文件。
  - title: 快速开发
    details: 借助 Deno 的快速启动和热模块替换，开发体验流畅。
  - title: 生产就绪
    details: 内置性能优化和最佳实践，直接部署到生产环境。
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const banner = document.querySelector('.announcement-bar')
  if (banner) {
    banner.addEventListener('click', () => {
      window.location.href = '/zh/getting-started/'
    })
  }
})
</script>

<style>
:root {
  --vp-home-hero-name-color: #111827;
  --vp-home-hero-tagline-color: #4b5563;
}

body {
  background: linear-gradient(135deg, #a8e0e8 0%, #d8f5a2 50%, #fef9c3 100%);
  min-height: 100vh;
}

.VPNavBar {
  background: transparent !important;
  backdrop-filter: none !important;
}

.announcement-bar {
  background: linear-gradient(90deg, #a8d8ea, #f4f18d);
  padding: 12px;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.3s;
}

.announcement-bar:hover {
  opacity: 0.9;
}

.announcement-bar span {
  font-weight: 600;
  color: #1a1a1a;
}
</style>

<div class="announcement-bar">
  <span>Fresh 2.3 已发布！—— WebSockets、View Transitions、Temporal API 等新功能 →</span>
</div>