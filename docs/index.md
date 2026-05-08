---
layout: home
title: Fresh
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
  
  const navbar = document.querySelector('.VPNavBar')
  if (navbar) {
    navbar.style.background = 'transparent'
    navbar.style.backdropFilter = 'none'
  }
})
</script>

<style>
.home-container {
  background: linear-gradient(135deg, #a8e0e8 0%, #d8f5a2 50%, #fef9c3 100%);
  min-height: 100vh;
  margin: 0;
}

.home-container :deep(.VPNavBar) {
  background: transparent !important;
  backdrop-filter: none !important;
}

.announcement-bar {
  background: linear-gradient(90deg, #a8d8ea, #f4f18d);
  padding: 12px;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.3s, transform 0.3s;
}

.announcement-bar.hide {
  opacity: 0;
  transform: translateY(-100%);
  pointer-events: none;
}

.announcement-bar span {
  font-weight: 600;
  color: #1a1a1a;
}

.hero-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-subtitle {
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.hero-title {
  font-size: 48px;
  font-weight: 800;
  color: #111827;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero-description {
  font-size: 18px;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 32px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.action-btn {
  padding: 14px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.2s;
}

.action-btn.primary {
  background-color: #fbbf24;
  color: #1a1a1a;
}

.action-btn.primary:hover {
  background-color: #f59e0b;
}

.action-btn.secondary {
  background-color: #1f2937;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 12px;
}

.action-btn.secondary:hover {
  background-color: #374151;
}

.action-btn code {
  text-decoration: none;
}

.copy-icon {
  width: 16px;
  height: 16px;
  opacity: 0.7;
}

.hero-logo {
  flex-shrink: 0;
  margin-left: 48px;
}

.fresh-logo {
  width: 200px;
  height: 200px;
}

@media (max-width: 900px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
    padding: 40px 24px;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .hero-logo {
    margin-left: 0;
    margin-top: 48px;
  }
  
  .hero-actions {
    justify-content: center;
  }
}
</style>

<div class="home-container">
  <div class="announcement-bar">
    <span>Fresh 2.3 已发布！—— WebSockets、View Transitions、Temporal API 等新功能 →</span>
  </div>

  <div class="hero-container">
    <div class="hero-content">
      <div class="hero-subtitle">Fresh 简介：</div>
      <h1 class="hero-title">
        这个框架如此简单，<br>你一看就会用。
      </h1>
      <p class="hero-description">
        无需配置文件，无需构建步骤，无需 node_modules。
        只需一个文件，你就拥有一个支持路由、JSX 和岛屿的服务器。
      </p>
      <div class="hero-actions">
        <a href="/zh/getting-started/" class="action-btn primary">
          开始使用 →
        </a>
        <a href="#" class="action-btn secondary" onclick="navigator.clipboard.writeText('deno run -Ar jsr:@fresh/init'); return false;">
          <code>deno run -Ar jsr:@fresh/init</code>
          <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="hero-logo">
      <img class="fresh-logo" src="/logo-fresh.svg" alt="Fresh Logo" />
    </div>
  </div>

  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px;">
    ## 功能特点

    Fresh 是一个下一代 Web 框架，为 Deno 从头构建。

    ### 零配置
    Fresh 开箱即用，无需复杂的配置文件。

    ### 快速开发
    借助 Deno 的快速启动和热模块替换，开发体验流畅。

    ### 生产就绪
    内置性能优化和最佳实践，直接部署到生产环境。

    ## 文档语言

    请选择您偏好的语言版本：

    - [中文文档](/zh/getting-started/)
    - [English Documentation](/en/getting-started/)
  </div>
</div>