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
import { ref, onMounted } from 'vue'

const buildTime = ref('')

onMounted(async () => {
  try {
    const response = await fetch('/version.json')
    const data = await response.json()
    buildTime.value = data.buildTimeFormatted
  } catch (e) {
    console.error('Failed to load version data:', e)
  }
})
</script>

<style>
:root {
  --vp-home-hero-name-color: #111827;
  --vp-home-hero-tagline-color: #4b5563;
}

body {
  min-height: 100vh;
}

/* 内容页：只在头部导航显示渐变（默认 body 无渐变）*/

.VPNavBar {
  backdrop-filter: none !important;
  background: linear-gradient(135deg, #a8e0e8 0%, #d8f5a2 50%, #fef9c3 100%) !important;
}

/* 首页：全页面显示渐变，头部导航透明以自然衔接 body 渐变 */
body:has(.VPHome) {
  background: linear-gradient(135deg, #a8e0e8 0%, #d8f5a2 50%, #fef9c3 100%);
}
body:has(.VPHome) .VPNavBar {
  background: transparent !important;
}

.VPNav {
  background: transparent !important;
}

.VPNavBar .content-body {
  background-color: transparent !important;
  width: 100% !important;
  max-width: 100% !important;
}

.VPNavBar .container {
  width: 100% !important;
  max-width: 100% !important;
}

.VPHome {
  padding-top: 0 !important;
}

.translation-time {
  text-align: center;
  margin-top: 40px;
  padding: 12px;
  color: #6b7280;
  font-size: 14px;
}

.sitemap-link {
  text-align: center;
  margin-top: 20px;
  padding-bottom: 40px;
}

.sitemap-link a {
  color: #059669;
  text-decoration: none;
  font-size: 14px;
}

.sitemap-link a:hover {
  text-decoration: underline;
}

.VPNavBarAppearance,
.VPNavBarAppearance *,
.VPNavBar .VPNavBarAppearance {
  display: none !important;
  visibility: hidden !important;
}

.VPNavBarHamburger {
  display: none !important;
}
</style>

<div class="translation-time">
  翻译校准时间：{{ buildTime }}
</div>

<div class="sitemap-link">
  <a href="/sitemap.xml" target="_blank" rel="noopener">
    📄 查看站点地图
  </a>
</div>
