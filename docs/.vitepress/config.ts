import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      link: '/',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: {
          '/zh/latest/': [
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
          ],
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
        ],
        sidebar: {
          '/en/latest/': [
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
                { text: 'Deno Deploy', link: '/en/latest/deployment/deno-deploy' },
                { text: 'deno compile', link: '/en/latest/deployment/deno-compile' },
                { text: 'Docker', link: '/en/latest/deployment/docker' },
                { text: 'Cloudflare Workers', link: '/en/latest/deployment/cloudflare-workers' },
              ]
            },
            {
              text: 'Testing',
              link: '/en/latest/testing/'
            },
            {
              text: 'Plugins',
              items: [
                { text: 'cors', link: '/en/latest/plugins/cors' },
                { text: 'csrf', link: '/en/latest/plugins/csrf' },
                { text: 'csp', link: '/en/latest/plugins/csp' },
                { text: 'ipFilter', link: '/en/latest/plugins/ip-filter' },
                { text: 'trailingSlashes', link: '/en/latest/plugins/trailing-slashes' },
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
              text: 'Migration Guide',
              link: '/en/latest/migration-guide/'
            },
            {
              text: 'Contributing',
              link: '/en/latest/contributing/'
            },
          ],
          '/en/1.x/': [
            {
              text: 'Introduction',
              link: '/en/1.x/introduction/'
            },
            {
              text: 'Getting Started',
              items: [
                { text: 'Create a project', link: '/en/1.x/getting-started/create-a-project' },
                { text: 'Running locally', link: '/en/1.x/getting-started/running-locally' },
                { text: 'Create a route', link: '/en/1.x/getting-started/create-a-route' },
                { text: 'Dynamic routes', link: '/en/1.x/getting-started/dynamic-routes' },
                { text: 'Custom handlers', link: '/en/1.x/getting-started/custom-handlers' },
                { text: 'Form submissions', link: '/en/1.x/getting-started/form-submissions' },
                { text: 'Adding interactivity', link: '/en/1.x/getting-started/adding-interactivity' },
                { text: 'Deploy to production', link: '/en/1.x/getting-started/deploy-to-production' },
              ]
            },
            {
              text: 'Concepts',
              items: [
                { text: 'Architecture', link: '/en/1.x/concepts/architecture' },
                { text: 'Server Components', link: '/en/1.x/concepts/server-components' },
                { text: 'Routing', link: '/en/1.x/concepts/routing' },
                { text: 'Routes', link: '/en/1.x/concepts/routes' },
                { text: 'App wrapper', link: '/en/1.x/concepts/app-wrapper' },
                { text: 'Layouts', link: '/en/1.x/concepts/layouts' },
                { text: 'Forms', link: '/en/1.x/concepts/forms' },
                { text: 'Interactive islands', link: '/en/1.x/concepts/islands' },
                { text: 'Static files', link: '/en/1.x/concepts/static-files' },
                { text: 'Middlewares', link: '/en/1.x/concepts/middleware' },
                { text: 'Error pages', link: '/en/1.x/concepts/error-pages' },
                { text: 'Partials', link: '/en/1.x/concepts/partials' },
                { text: 'Data fetching', link: '/en/1.x/concepts/data-fetching' },
                { text: 'Ahead-of-time Builds', link: '/en/1.x/concepts/ahead-of-time-builds' },
                { text: 'Deployment', link: '/en/1.x/concepts/deployment' },
                { text: 'Plugins', link: '/en/1.x/concepts/plugins' },
                { text: 'Updating Fresh', link: '/en/1.x/concepts/updating' },
                { text: 'Server configuration', link: '/en/1.x/concepts/server-configuration' },
              ]
            },
            {
              text: 'Integrations',
              link: '/en/1.x/integrations/'
            },
            {
              text: 'Examples',
              items: [
                { text: 'Migrating to Tailwind', link: '/en/1.x/examples/migrating-to-tailwind' },
                { text: 'Modifying the head', link: '/en/1.x/examples/modifying-the-head' },
                { text: 'Writing tests', link: '/en/1.x/examples/writing-tests' },
                { text: 'Changing the source directory', link: '/en/1.x/examples/changing-the-src-dir' },
                { text: 'Using Twind v1', link: '/en/1.x/examples/using-twind-v1' },
                { text: 'Initializing the server', link: '/en/1.x/examples/init-the-server' },
                { text: 'Using Fresh canary version', link: '/en/1.x/examples/using-fresh-canary-version' },
                { text: 'Dealing with CORS', link: '/en/1.x/examples/dealing-with-cors' },
                { text: 'Creating a CRUD API', link: '/en/1.x/examples/creating-a-crud-api' },
                { text: 'Handling complex routes', link: '/en/1.x/examples/handling-complex-routes' },
                { text: 'Rendering markdown', link: '/en/1.x/examples/rendering-markdown' },
                { text: 'Rendering raw HTML', link: '/en/1.x/examples/rendering-raw-html' },
                { text: 'Sharing state between islands', link: '/en/1.x/examples/sharing-state-between-islands' },
                { text: 'Using CSP', link: '/en/1.x/examples/using-csp' },
                { text: 'Styling active links', link: '/en/1.x/examples/active-links' },
                { text: 'Client only side components', link: '/en/1.x/examples/client-side-components-and-libraries' },
              ]
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/denoland/fresh' },
    ],
  },
})
