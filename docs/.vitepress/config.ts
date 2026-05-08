import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh',
  description: 'Fresh 中文文档',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon-fresh.ico' }]
  ],

  themeConfig: {
    logo: '/logo-fresh.svg',
    sidebar: [
      {
        text: '介绍',
        link: '/zh/introduction/'
      },
      {
        text: '快速开始',
        link: '/zh/getting-started/'
      },
      {
        text: '核心概念',
        items: [
          { text: '架构', link: '/zh/concepts/architecture' },
          { text: 'App 类', link: '/zh/concepts/app' },
          { text: 'Context 对象', link: '/zh/concepts/context' },
          { text: '数据获取', link: '/zh/concepts/data-fetching' },
          { text: '文件路由', link: '/zh/concepts/file-routing' },
          { text: '布局', link: '/zh/concepts/layouts' },
          { text: '中间件', link: '/zh/concepts/middleware' },
          { text: '岛屿', link: '/zh/concepts/islands' },
          { text: '路由', link: '/zh/concepts/routing' },
          { text: 'Signals', link: '/zh/concepts/signals' },
          { text: '静态文件', link: '/zh/concepts/static-files' },
        ]
      },
      {
        text: '高级',
        items: [
          { text: '应用包装器', link: '/zh/advanced/app-wrapper' },
          { text: '错误处理', link: '/zh/advanced/error-handling' },
          { text: '表单', link: '/zh/advanced/forms' },
          { text: 'Builder', link: '/zh/advanced/builder' },
          { text: '编程式布局', link: '/zh/advanced/layouts' },
          { text: 'Partials', link: '/zh/advanced/partials' },
          { text: '序列化', link: '/zh/advanced/serialization' },
          { text: 'Vite 配置', link: '/zh/advanced/vite' },
          { text: '故障排除', link: '/zh/advanced/troubleshooting' },
          { text: 'Define 辅助函数', link: '/zh/advanced/define' },
          { text: '环境变量', link: '/zh/advanced/environment-variables' },
          { text: 'head 元素', link: '/zh/advanced/head' },
          { text: 'WebSockets', link: '/zh/advanced/websockets' },
          { text: 'OpenTelemetry', link: '/zh/advanced/opentelemetry' },
          { text: 'API 参考', link: '/zh/advanced/api-reference' },
          { text: '视图过渡', link: '/zh/advanced/view-transitions' },
        ]
      },
      {
        text: '部署',
        items: [
          { text: '概述', link: '/zh/deployment/index' },
          { text: 'Deno Deploy', link: '/zh/deployment/deno-deploy' },
          { text: 'Docker', link: '/zh/deployment/docker' },
          { text: 'Cloudflare Workers', link: '/zh/deployment/cloudflare-workers' },
          { text: 'deno compile', link: '/zh/deployment/deno-compile' },
        ]
      },
      {
        text: '示例',
        items: [
          { text: 'API 路由', link: '/zh/examples/api-routes' },
          { text: 'daisyUI', link: '/zh/examples/daisyui' },
          { text: '渲染 Markdown', link: '/zh/examples/markdown' },
          { text: '渲染原始 HTML', link: '/zh/examples/rendering-raw-html' },
          { text: '岛屿间共享状态', link: '/zh/examples/sharing-state-between-islands' },
          { text: '活动链接', link: '/zh/examples/active-links' },
          { text: '会话管理', link: '/zh/examples/session-management' },
          { text: '常见模式', link: '/zh/examples/common-patterns' },
        ]
      },
      {
        text: '插件',
        items: [
          { text: '概述', link: '/zh/plugins/' },
          { text: 'CORS', link: '/zh/plugins/cors' },
          { text: 'CSP', link: '/zh/plugins/csp' },
          { text: 'CSRF', link: '/zh/plugins/csrf' },
          { text: 'IP 过滤', link: '/zh/plugins/ip-filter' },
          { text: '尾部斜杠', link: '/zh/plugins/trailing-slashes' },
        ]
      },
      {
        text: '测试',
        link: '/zh/testing/'
      },
      {
        text: '迁移指南',
        link: '/zh/migration-guide/'
      },
      {
        text: '贡献指南',
        link: '/zh/contributing/'
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pankitgg/fresh-doc-cn' },
    ],
  },
})
