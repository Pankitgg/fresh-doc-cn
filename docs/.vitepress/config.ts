import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',
  ignoreDeadLinks: true,

  locales: {
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/latest/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/latest/' },
        ],
        sidebar: [
          {
            text: 'Introduction',
            link: '/en/latest/introduction/'
          },
          {
            text: 'Getting Started',
            link: '/en/latest/getting-started/'
          },
          {
            text: 'Concepts',
            items: [
              { text: 'Architecture', link: '/en/latest/concepts/architecture' },
              { text: 'Islands', link: '/en/latest/concepts/islands' },
              { text: 'App', link: '/en/latest/concepts/app' },
              { text: 'Routing', link: '/en/latest/concepts/routing' },
              { text: 'Data Fetching', link: '/en/latest/concepts/data-fetching' },
              { text: 'Middlewares', link: '/en/latest/concepts/middleware' },
              { text: 'Context', link: '/en/latest/concepts/context' },
              { text: 'Signals', link: '/en/latest/concepts/signals' },
              { text: 'Layouts', link: '/en/latest/concepts/layouts' },
              { text: 'Static files', link: '/en/latest/concepts/static-files' },
              { text: 'File routing', link: '/en/latest/concepts/file-routing' },
            ]
          },
          {
            text: 'Advanced',
            items: [
              { text: 'App wrapper', link: '/en/latest/advanced/app-wrapper' },
              { text: 'Layouts', link: '/en/latest/advanced/layouts' },
              { text: 'Error handling', link: '/en/latest/advanced/error-handling' },
              { text: 'Partials', link: '/en/latest/advanced/partials' },
              { text: 'View Transitions', link: '/en/latest/advanced/view-transitions' },
              { text: 'Forms', link: '/en/latest/advanced/forms' },
              { text: 'Define Helpers', link: '/en/latest/advanced/define' },
              { text: 'Serialization', link: '/en/latest/advanced/serialization' },
              { text: 'Environment Variables', link: '/en/latest/advanced/environment-variables' },
              { text: 'head element', link: '/en/latest/advanced/head' },
              { text: 'Vite Plugin Options', link: '/en/latest/advanced/vite' },
              { text: 'WebSockets', link: '/en/latest/advanced/websockets' },
              { text: 'OpenTelemetry', link: '/en/latest/advanced/opentelemetry' },
              { text: 'API Reference', link: '/en/latest/advanced/api-reference' },
              { text: 'Troubleshooting', link: '/en/latest/advanced/troubleshooting' },
              { text: 'Builder (Legacy)', link: '/en/latest/advanced/builder' },
            ]
          },
          {
            text: 'Deployment',
            items: [
              { text: 'Overview', link: '/en/latest/deployment/index' },
              { text: 'Deno Deploy', link: '/en/latest/deployment/deno-deploy' },
              { text: 'deno compile', link: '/en/latest/deployment/deno-compile' },
              { text: 'Docker', link: '/en/latest/deployment/docker' },
              { text: 'Cloudflare Workers', link: '/en/latest/deployment/cloudflare-workers' },
            ]
          },
          {
            text: 'Examples',
            items: [
              { text: 'API Routes', link: '/en/latest/examples/api-routes' },
              { text: 'daisyUI', link: '/en/latest/examples/daisyui' },
              { text: 'Rendering Markdown', link: '/en/latest/examples/markdown' },
              { text: 'Rendering raw HTML', link: '/en/latest/examples/rendering-raw-html' },
              { text: 'Sharing state between islands', link: '/en/latest/examples/sharing-state-between-islands' },
              { text: 'Active links', link: '/en/latest/examples/active-links' },
              { text: 'Session management', link: '/en/latest/examples/session-management' },
              { text: 'Common Patterns', link: '/en/latest/examples/common-patterns' },
            ]
          },
          {
            text: 'Plugins',
            items: [
              { text: 'Overview', link: '/en/latest/plugins/' },
              { text: 'cors', link: '/en/latest/plugins/cors' },
              { text: 'csrf', link: '/en/latest/plugins/csrf' },
              { text: 'csp', link: '/en/latest/plugins/csp' },
              { text: 'ipFilter', link: '/en/latest/plugins/ip-filter' },
              { text: 'trailingSlashes', link: '/en/latest/plugins/trailing-slashes' },
            ]
          },
          {
            text: 'Testing',
            link: '/en/latest/testing/'
          },
          {
            text: 'Migration Guide',
            link: '/en/latest/migration-guide/'
          },
          {
            text: 'Contributing',
            link: '/en/latest/contributing/'
          },
        ],
      },
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/latest/',
      themeConfig: {
        nav: [
          { text: '主页', link: '/zh/latest/' },
        ],
        sidebar: [
          {
            text: '介绍',
            link: '/zh/latest/introduction/'
          },
          {
            text: '快速开始',
            link: '/zh/latest/getting-started/'
          },
          {
            text: '核心概念',
            items: [
              { text: '架构', link: '/zh/latest/concepts/architecture' },
              { text: 'App 类', link: '/zh/latest/concepts/app' },
              { text: 'Context 对象', link: '/zh/latest/concepts/context' },
              { text: '数据获取', link: '/zh/latest/concepts/data-fetching' },
              { text: '文件路由', link: '/zh/latest/concepts/file-routing' },
              { text: '布局', link: '/zh/latest/concepts/layouts' },
              { text: '中间件', link: '/zh/latest/concepts/middleware' },
              { text: '岛屿', link: '/zh/latest/concepts/islands' },
              { text: '路由', link: '/zh/latest/concepts/routing' },
              { text: 'Signals', link: '/zh/latest/concepts/signals' },
              { text: '静态文件', link: '/zh/latest/concepts/static-files' },
            ]
          },
          {
            text: '高级',
            items: [
              { text: '应用包装器', link: '/zh/latest/advanced/app-wrapper' },
              { text: '错误处理', link: '/zh/latest/advanced/error-handling' },
              { text: '表单', link: '/zh/latest/advanced/forms' },
              { text: 'Builder', link: '/zh/latest/advanced/builder' },
              { text: '编程式布局', link: '/zh/latest/advanced/layouts' },
              { text: 'Partials', link: '/zh/latest/advanced/partials' },
              { text: '序列化', link: '/zh/latest/advanced/serialization' },
              { text: 'Vite 配置', link: '/zh/latest/advanced/vite' },
              { text: '故障排除', link: '/zh/latest/advanced/troubleshooting' },
              { text: 'Define 辅助函数', link: '/zh/latest/advanced/define' },
              { text: '环境变量', link: '/zh/latest/advanced/environment-variables' },
              { text: 'head 元素', link: '/zh/latest/advanced/head' },
              { text: 'WebSockets', link: '/zh/latest/advanced/websockets' },
              { text: 'OpenTelemetry', link: '/zh/latest/advanced/opentelemetry' },
              { text: 'API 参考', link: '/zh/latest/advanced/api-reference' },
              { text: '视图过渡', link: '/zh/latest/advanced/view-transitions' },
            ]
          },
          {
            text: '部署',
            items: [
              { text: '概述', link: '/zh/latest/deployment/index' },
              { text: 'Deno Deploy', link: '/zh/latest/deployment/deno-deploy' },
              { text: 'Docker', link: '/zh/latest/deployment/docker' },
              { text: 'Cloudflare Workers', link: '/zh/latest/deployment/cloudflare-workers' },
              { text: 'deno compile', link: '/zh/latest/deployment/deno-compile' },
            ]
          },
          {
            text: '示例',
            items: [
              { text: 'API 路由', link: '/zh/latest/examples/api-routes' },
              { text: 'daisyUI', link: '/zh/latest/examples/daisyui' },
              { text: '渲染 Markdown', link: '/zh/latest/examples/markdown' },
              { text: '渲染原始 HTML', link: '/zh/latest/examples/rendering-raw-html' },
              { text: '岛屿间共享状态', link: '/zh/latest/examples/sharing-state-between-islands' },
              { text: '活动链接', link: '/zh/latest/examples/active-links' },
              { text: '会话管理', link: '/zh/latest/examples/session-management' },
              { text: '常见模式', link: '/zh/latest/examples/common-patterns' },
            ]
          },
          {
            text: '插件',
            items: [
              { text: '概述', link: '/zh/latest/plugins/' },
              { text: 'CORS', link: '/zh/latest/plugins/cors' },
              { text: 'CSP', link: '/zh/latest/plugins/csp' },
              { text: 'CSRF', link: '/zh/latest/plugins/csrf' },
              { text: 'IP 过滤', link: '/zh/latest/plugins/ip-filter' },
              { text: '尾部斜杠', link: '/zh/latest/plugins/trailing-slashes' },
            ]
          },
          {
            text: '测试',
            link: '/zh/latest/testing/'
          },
          {
            text: '迁移指南',
            link: '/zh/latest/migration-guide/'
          },
          {
            text: '贡献指南',
            link: '/zh/latest/contributing/'
          },
        ],
      },
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pankitgg/fresh-doc-cn' },
    ],
  },
})
