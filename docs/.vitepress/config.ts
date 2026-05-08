import { defineConfig } from 'vitepress'

const zhSidebar = [
  {
    text: '介绍',
    link: '/introduction/'
  },
  {
    text: '快速开始',
    link: '/getting-started/'
  },
  {
    text: '核心概念',
    collapsed: false,
    items: [
      { text: '架构', link: '/concepts/architecture' },
      { text: '岛屿', link: '/concepts/islands' },
      { text: '路由', link: '/concepts/routing' },
      { text: 'App 类', link: '/concepts/app' },
      { text: 'Context 对象', link: '/concepts/context' },
      { text: '数据获取', link: '/concepts/data-fetching' },
      { text: '中间件', link: '/concepts/middleware' },
      { text: '布局', link: '/concepts/layouts' },
      { text: 'Signals', link: '/concepts/signals' },
      { text: '静态文件', link: '/concepts/static-files' },
      { text: '文件路由', link: '/concepts/file-routing' },
    ]
  },
  {
    text: '高级',
    collapsed: false,
    items: [
      { text: '应用包装器', link: '/advanced/app-wrapper' },
      { text: '错误处理', link: '/advanced/error-handling' },
      { text: 'Partials', link: '/advanced/partials' },
      { text: '视图过渡', link: '/advanced/view-transitions' },
      { text: '表单', link: '/advanced/forms' },
      { text: 'Define 辅助函数', link: '/advanced/define' },
      { text: '序列化', link: '/advanced/serialization' },
      { text: '环境变量', link: '/advanced/environment-variables' },
      { text: 'head 元素', link: '/advanced/head' },
      { text: 'Vite 配置', link: '/advanced/vite' },
      { text: 'WebSockets', link: '/advanced/websockets' },
      { text: 'OpenTelemetry', link: '/advanced/opentelemetry' },
      { text: 'API 参考', link: '/advanced/api-reference' },
      { text: '故障排除', link: '/advanced/troubleshooting' },
      { text: 'Builder', link: '/advanced/builder' },
    ]
  },
  {
    text: '部署',
    collapsed: false,
    items: [
      { text: '概述', link: '/deployment/index' },
      { text: 'Deno Deploy', link: '/deployment/deno-deploy' },
      { text: 'deno compile', link: '/deployment/deno-compile' },
      { text: 'Docker', link: '/deployment/docker' },
      { text: 'Cloudflare Workers', link: '/deployment/cloudflare-workers' },
    ]
  },
  {
    text: '示例',
    collapsed: false,
    items: [
      { text: 'API 路由', link: '/examples/api-routes' },
      { text: 'daisyUI', link: '/examples/daisyui' },
      { text: '渲染 Markdown', link: '/examples/markdown' },
      { text: '渲染原始 HTML', link: '/examples/rendering-raw-html' },
      { text: '岛屿间共享状态', link: '/examples/sharing-state-between-islands' },
      { text: '活动链接', link: '/examples/active-links' },
      { text: '会话管理', link: '/examples/session-management' },
      { text: '常见模式', link: '/examples/common-patterns' },
    ]
  },
  {
    text: '插件',
    collapsed: false,
    items: [
      { text: '概述', link: '/plugins/' },
      { text: 'CORS', link: '/plugins/cors' },
      { text: 'CSRF', link: '/plugins/csrf' },
      { text: 'CSP', link: '/plugins/csp' },
      { text: 'IP 过滤', link: '/plugins/ip-filter' },
      { text: '尾部斜杠', link: '/plugins/trailing-slashes' },
    ]
  },
  {
    text: '测试',
    link: '/testing/'
  },
  {
    text: '迁移指南',
    link: '/migration-guide/'
  },
  {
    text: '贡献指南',
    link: '/contributing/'
  },
]

const enSidebar = [
  {
    text: 'Introduction',
    link: '/en/introduction/'
  },
  {
    text: 'Getting Started',
    link: '/en/getting-started/'
  },
  {
    text: 'Concepts',
    collapsed: false,
    items: [
      { text: 'Architecture', link: '/en/concepts/architecture' },
      { text: 'Islands', link: '/en/concepts/islands' },
      { text: 'Routing', link: '/en/concepts/routing' },
      { text: 'App', link: '/en/concepts/app' },
      { text: 'Context', link: '/en/concepts/context' },
      { text: 'Data Fetching', link: '/en/concepts/data-fetching' },
      { text: 'Middleware', link: '/en/concepts/middleware' },
      { text: 'Layouts', link: '/en/concepts/layouts' },
      { text: 'Signals', link: '/en/concepts/signals' },
      { text: 'Static files', link: '/en/concepts/static-files' },
      { text: 'File routing', link: '/en/concepts/file-routing' },
    ]
  },
  {
    text: 'Advanced',
    collapsed: false,
    items: [
      { text: 'App wrapper', link: '/en/advanced/app-wrapper' },
      { text: 'Error handling', link: '/en/advanced/error-handling' },
      { text: 'Partials', link: '/en/advanced/partials' },
      { text: 'View Transitions', link: '/en/advanced/view-transitions' },
      { text: 'Forms', link: '/en/advanced/forms' },
      { text: 'Define Helpers', link: '/en/advanced/define' },
      { text: 'Serialization', link: '/en/advanced/serialization' },
      { text: 'Environment Variables', link: '/en/advanced/environment-variables' },
      { text: 'head element', link: '/en/advanced/head' },
      { text: 'Vite Plugin Options', link: '/en/advanced/vite' },
      { text: 'WebSockets', link: '/en/advanced/websockets' },
      { text: 'OpenTelemetry', link: '/en/advanced/opentelemetry' },
      { text: 'API Reference', link: '/en/advanced/api-reference' },
      { text: 'Troubleshooting', link: '/en/advanced/troubleshooting' },
      { text: 'Builder', link: '/en/advanced/builder' },
    ]
  },
  {
    text: 'Deployment',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/en/deployment/index' },
      { text: 'Deno Deploy', link: '/en/deployment/deno-deploy' },
      { text: 'deno compile', link: '/en/deployment/deno-compile' },
      { text: 'Docker', link: '/en/deployment/docker' },
      { text: 'Cloudflare Workers', link: '/en/deployment/cloudflare-workers' },
    ]
  },
  {
    text: 'Examples',
    collapsed: false,
    items: [
      { text: 'API Routes', link: '/en/examples/api-routes' },
      { text: 'daisyUI', link: '/en/examples/daisyui' },
      { text: 'Rendering Markdown', link: '/en/examples/markdown' },
      { text: 'Rendering raw HTML', link: '/en/examples/rendering-raw-html' },
      { text: 'Sharing state between islands', link: '/en/examples/sharing-state-between-islands' },
      { text: 'Active links', link: '/en/examples/active-links' },
      { text: 'Session management', link: '/en/examples/session-management' },
      { text: 'Common Patterns', link: '/en/examples/common-patterns' },
    ]
  },
  {
    text: 'Plugins',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/en/plugins/' },
      { text: 'cors', link: '/en/plugins/cors' },
      { text: 'csrf', link: '/en/plugins/csrf' },
      { text: 'csp', link: '/en/plugins/csp' },
      { text: 'ipFilter', link: '/en/plugins/ip-filter' },
      { text: 'trailingSlashes', link: '/en/plugins/trailing-slashes' },
    ]
  },
  {
    text: 'Testing',
    link: '/en/testing/'
  },
  {
    text: 'Migration Guide',
    link: '/en/migration-guide/'
  },
  {
    text: 'Contributing',
    link: '/en/contributing/'
  },
]

export default defineConfig({
  title: 'Fresh',
  description: 'Fresh 中文文档',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon-fresh.ico' }]
  ],

  themeConfig: {
    logo: '/logo-fresh.svg',
    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar: {
      '/': zhSidebar,
      '/en/': enSidebar,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pankitgg/fresh-doc-cn' },
    ],
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    }
  },
})
