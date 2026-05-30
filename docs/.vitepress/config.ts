import { defineConfig } from 'vitepress'

// v2 (latest) 版本的中文侧边栏
const zhSidebarV2 = [
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
    collapsed: false,
    items: [
      { text: '架构', link: '/zh/concepts/architecture' },
      { text: '岛屿', link: '/zh/concepts/islands' },
      { text: '路由', link: '/zh/concepts/routing' },
      { text: 'App', link: '/zh/concepts/app' },
      { text: 'Context 对象', link: '/zh/concepts/context' },
      { text: '数据获取', link: '/zh/concepts/data-fetching' },
      { text: '中间件', link: '/zh/concepts/middleware' },
      { text: '布局', link: '/zh/concepts/layouts' },
      { text: 'Signals', link: '/zh/concepts/signals' },
      { text: '静态文件', link: '/zh/concepts/static-files' },
      { text: '文件路由', link: '/zh/concepts/file-routing' },
    ]
  },
  {
    text: '高级',
    collapsed: false,
    items: [
      { text: '应用包装器', link: '/zh/advanced/app-wrapper' },
      { text: '错误处理', link: '/zh/advanced/error-handling' },
      { text: 'Partials', link: '/zh/advanced/partials' },
      { text: '视图过渡', link: '/zh/advanced/view-transitions' },
      { text: '表单', link: '/zh/advanced/forms' },
      { text: 'Define 辅助函数', link: '/zh/advanced/define' },
      { text: '序列化', link: '/zh/advanced/serialization' },
      { text: '环境变量', link: '/zh/advanced/environment-variables' },
      { text: 'head 元素', link: '/zh/advanced/head' },
      { text: 'Vite 配置', link: '/zh/advanced/vite' },
      { text: 'WebSockets', link: '/zh/advanced/websockets' },
      { text: 'OpenTelemetry', link: '/zh/advanced/opentelemetry' },
      { text: 'API 参考', link: '/zh/advanced/api-reference' },
      { text: '故障排除', link: '/zh/advanced/troubleshooting' },
      { text: 'Builder', link: '/zh/advanced/builder' },
    ]
  },
  {
    text: '部署',
    collapsed: false,
    items: [
      { text: '概述', link: '/zh/deployment/index' },
      { text: 'Deno Deploy', link: '/zh/deployment/deno-deploy' },
      { text: 'deno compile', link: '/zh/deployment/deno-compile' },
      { text: 'Docker', link: '/zh/deployment/docker' },
      { text: 'Cloudflare Workers', link: '/zh/deployment/cloudflare-workers' },
    ]
  },
  {
    text: '示例',
    collapsed: false,
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
    collapsed: false,
    items: [
      { text: '概述', link: '/zh/plugins/' },
      { text: 'CORS', link: '/zh/plugins/cors' },
      { text: 'CSRF', link: '/zh/plugins/csrf' },
      { text: 'CSP', link: '/zh/plugins/csp' },
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
]

// 1.x 版本的中文侧边栏
const zhSidebarV1 = [
  {
    text: '介绍',
    link: '/zh/1.x/introduction/'
  },
  {
    text: '快速开始',
    link: '/zh/1.x/getting-started/'
  },
  {
    text: '核心概念',
    collapsed: false,
    items: [
      { text: '架构', link: '/zh/1.x/concepts/architecture' },
      { text: '岛屿', link: '/zh/1.x/concepts/islands' },
      { text: '路由', link: '/zh/1.x/concepts/routing' },
      { text: '路由', link: '/zh/1.x/concepts/routes' },
      { text: 'App 包装器', link: '/zh/1.x/concepts/app-wrapper' },
      { text: '数据获取', link: '/zh/1.x/concepts/data-fetching' },
      { text: '中间件', link: '/zh/1.x/concepts/middleware' },
      { text: '布局', link: '/zh/1.x/concepts/layouts' },
      { text: '部分更新', link: '/zh/1.x/concepts/partials' },
      { text: '插件', link: '/zh/1.x/concepts/plugins' },
      { text: '静态文件', link: '/zh/1.x/concepts/static-files' },
      { text: '表单', link: '/zh/1.x/concepts/forms' },
      { text: '错误页面', link: '/zh/1.x/concepts/error-pages' },
      { text: '服务器组件', link: '/zh/1.x/concepts/server-components' },
      { text: '服务器配置', link: '/zh/1.x/concepts/server-configuration' },
      { text: '更新', link: '/zh/1.x/concepts/updating' },
      { text: 'AOT 构建', link: '/zh/1.x/concepts/ahead-of-time-builds' },
      { text: '部署', link: '/zh/1.x/concepts/deployment' },
    ]
  },
  {
    text: '示例',
    collapsed: false,
    items: [
      { text: '活动链接', link: '/zh/1.x/examples/active-links' },
      { text: 'Supabase 认证', link: '/zh/1.x/examples/authentication-with-supabase' },
      { text: '更改源目录', link: '/zh/1.x/examples/changing-the-src-dir' },
      { text: '客户端组件和库', link: '/zh/1.x/examples/client-side-components-and-libraries' },
      { text: 'CRUD API', link: '/zh/1.x/examples/creating-a-crud-api' },
      { text: '处理 CORS', link: '/zh/1.x/examples/dealing-with-cors' },
      { text: '复杂路由', link: '/zh/1.x/examples/handling-complex-routes' },
      { text: '初始化服务器', link: '/zh/1.x/examples/init-the-server' },
      { text: '迁移到 Tailwind', link: '/zh/1.x/examples/migrating-to-tailwind' },
      { text: '修改 head', link: '/zh/1.x/examples/modifying-the-head' },
      { text: '渲染 Markdown', link: '/zh/1.x/examples/rendering-markdown' },
      { text: '渲染原始 HTML', link: '/zh/1.x/examples/rendering-raw-html' },
      { text: '设置语言', link: '/zh/1.x/examples/setting-the-language' },
      { text: '岛屿间共享状态', link: '/zh/1.x/examples/sharing-state-between-islands' },
      { text: '使用 CSP', link: '/zh/1.x/examples/using-csp' },
      { text: '使用 Fresh Canary 版本', link: '/zh/1.x/examples/using-fresh-canary-version' },
      { text: '使用 Twind v1', link: '/zh/1.x/examples/using-twind-v1' },
      { text: '编写测试', link: '/zh/1.x/examples/writing-tests' },
    ]
  },
  {
    text: '集成',
    link: '/zh/1.x/integrations/'
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
  titleTemplate: ':title | Fresh 中文文档',
  description: 'Fresh中文网站提供Fresh框架的中文教程和完整文档。Fresh是一个现代化的Deno全栈框架，无需配置文件，无需构建步骤，无需node_modules。',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon-fresh.ico' }],
    ['link', { rel: 'canonical', href: 'https://fresh.ai-nous.com/' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    ['meta', { name: 'keywords', content: 'Fresh, Fresh中文, Fresh中文网站, Fresh中文教程, Fresh文档, Fresh框架, Deno, Deno框架, 全栈框架, Preact, JavaScript框架, TypeScript, Web开发, 前端框架, 后端框架, Fresh教程, Fresh文档中文, Fresh入门, Fresh框架教程, Deno教程,fresh.js' }],
    ['meta', { name: 'author', content: 'Fresh 中文文档社区' }],
    ['meta', { name: 'revisit-after', content: '7 days' }],
    ['meta', { name: 'language', content: 'Chinese' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Fresh 中文文档' }],
    ['meta', { property: 'og:description', content: 'Fresh中文网站提供Fresh框架的中文教程和完整文档。Fresh是一个现代化的Deno全栈框架，无需配置文件，无需构建步骤。' }],
    ['meta', { property: 'og:site_name', content: 'Fresh中文网站' }],
    ['meta', { property: 'og:url', content: 'https://fresh.ai-nous.com/' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:locale:alternate', content: 'en_US' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'Fresh中文网站 - Fresh框架中文教程' }],
    ['meta', { name: 'twitter:description', content: 'Fresh中文网站提供Fresh框架的中文教程和完整文档。Fresh是一个现代化的Deno全栈框架。' }],
    ['meta', { name: 'twitter:site', content: '@fresh_framework' }],
    ['link', { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Fresh中文文档 RSS', href: '/sitemap.xml' }],
    ['script', { type: 'text/javascript' }, `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "wwkdcgqap7");
    `],
  ],

  themeConfig: {
    logo: '/logo-fresh.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: 'https://blog.ai-nous.com/', icon: 'book' },
      { text: '资讯', link: 'https://ai-nous.com/', icon: 'info' },
      { text: '工作台', link: 'https://studio.ai-nous.com/', icon: 'compass' },
    ],
    sidebar: {
      '/zh/1.x/': zhSidebarV1,
      '/zh/': zhSidebarV2,
      '/en/': enSidebar,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pankitgg/fresh-doc-cn' },
    ],
    appearance: false,
  },

})