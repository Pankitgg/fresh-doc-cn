import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '&lt;head&gt; element', link: '/en/latest/advanced/head' },
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
                { text: 'Modifying the &lt;head&gt;', link: '/en/1.x/examples/modifying-the-head' },
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
import { defineConfig } from 'vitepressimport { defineConfig } from 'vitepress'

export default defineConfig({
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Freshimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Freshimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
      themeConfig: {
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
      themeConfig: {
        nav: [
          { text: 'Homeimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
        ],
        sidebar: {
          '/import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
        ],
        sidebar: {
          '/en/latest/': [
            {
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
        ],
        sidebar: {
          '/en/latest/': [
            {
              text: 'Introduction',
              link: '/import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
              text: 'Getting Startedimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
              itemsimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Architecture',import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Islands',import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Islands', link: '/en/latest/concepts/islands' },import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'App', linkimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Routing', link: '/import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Data Fetching', link:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Middlewares', linkimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Context', link:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Signals', link: '/enimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                {import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Layouts', link: '/en/latestimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Static files', link: '/en/latestimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { textimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'File routing', link: '/en/latestimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
              textimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'App wrapper', link:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Layouts', link: '/import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Error handling', link: '/import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Partials', link:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'View Transitions', linkimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Forms', linkimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Define Helpers', link:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Serialization', link: '/import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: 'Environment Variables', link: '/import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
                { text: 'Vite Plugin Options',import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
                { text: 'Vite Plugin Options', link: '/en/latest/advanced/vite' },
                { text: 'WebSockets', linkimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
                { text: 'Vite Plugin Options', link: '/en/latest/advanced/vite' },
                { text: 'WebSockets', link: '/en/latest/advanced/websockets' },
                { text: 'OpenTelemetry',import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
                { text: 'Vite Plugin Options', link: '/en/latest/advanced/vite' },
                { text: 'WebSockets', link: '/en/latest/advanced/websockets' },
                { text: 'OpenTelemetry', link: '/en/latest/advanced/opentelemetry' },import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
                { text: 'Vite Plugin Options', link: '/en/latest/advanced/vite' },
                { text: 'WebSockets', link: '/en/latest/advanced/websockets' },
                { text: 'OpenTelemetry', link: '/en/latest/advanced/opentelemetry' },
                { text: 'API Reference',import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
                { text: 'Vite Plugin Options', link: '/en/latest/advanced/vite' },
                { text: 'WebSockets', link: '/en/latest/advanced/websockets' },
                { text: 'OpenTelemetry', link: '/en/latest/advanced/opentelemetry' },
                { text: 'API Reference', link: '/en/latest/advanced/api-reference' },import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
                { text: 'Vite Plugin Options', link: '/en/latest/advanced/vite' },
                { text: 'WebSockets', link: '/en/latest/advanced/websockets' },
                { text: 'OpenTelemetry', link: '/en/latest/advanced/opentelemetry' },
                { text: 'API Reference', link: '/en/latest/advanced/api-reference' },
                { text: 'Troublesimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
                { text: 'Vite Plugin Options', link: '/en/latest/advanced/vite' },
                { text: 'WebSockets', link: '/en/latest/advanced/websockets' },
                { text: 'OpenTelemetry', link: '/en/latest/advanced/opentelemetry' },
                { text: 'API Reference', link: '/en/latest/advanced/api-reference' },
                { text: 'Troubleshooting', link: '/en/latest/advanced/troublesimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
                { text: 'Vite Plugin Options', link: '/en/latest/advanced/vite' },
                { text: 'WebSockets', link: '/en/latest/advanced/websockets' },
                { text: 'OpenTelemetry', link: '/en/latest/advanced/opentelemetry' },
                { text: 'API Reference', link: '/en/latest/advanced/api-reference' },
                { text: 'Troubleshooting', link: '/en/latest/advanced/troubleshooting' },
                { text: 'import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
                { text: 'Vite Plugin Options', link: '/en/latest/advanced/vite' },
                { text: 'WebSockets', link: '/en/latest/advanced/websockets' },
                { text: 'OpenTelemetry', link: '/en/latest/advanced/opentelemetry' },
                { text: 'API Reference', link: '/en/latest/advanced/api-reference' },
                { text: 'Troubleshooting', link: '/en/latest/advanced/troubleshooting' },
                { text: 'Builder (Legacy)', link: '/en/latest/advancedimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
                { text: 'Vite Plugin Options', link: '/en/latest/advanced/vite' },
                { text: 'WebSockets', link: '/en/latest/advanced/websockets' },
                { text: 'OpenTelemetry', link: '/en/latest/advanced/opentelemetry' },
                { text: 'API Reference', link: '/en/latest/advanced/api-reference' },
                { text: 'Troubleshooting', link: '/en/latest/advanced/troubleshooting' },
                { text: 'Builder (Legacy)', link: '/en/latest/advanced/builder' },
              ]
            },
            {
              text: 'import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                {import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Deno Deploy', link: '/import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'deno compile',import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Dockerimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Docker', link: '/en/latest/deployment/docker'import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Cloudflareimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Cloudflare Workers', link: '/en/latest/deployment/cloudimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
              text: 'import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
              link: '/en/latest/testingimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
              items:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'cors',import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'csrf', linkimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'csp', link:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'ipFilter', link:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'trailingSlashes', link: '/en/latest/plugins/trailing-slasimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
            },import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
              text: 'Examplesimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { textimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'API Routes', link: '/en/latestimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                {import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'daisyUI', link: '/import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Rendering Markdown', link:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Rendering raw HTML', linkimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Sharingimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Sharing state between islands', link: '/en/latest/examplesimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Active links', link:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Session management', link:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Common Patterns', link:import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
              textimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
              link: '/import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
          '/en/1import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
              link: '/enimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
            },import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
              text: 'Gettingimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                {import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Create a project', link: '/import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Running locally', link: '/en/1.x/getting-startedimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Create a route', link: '/import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Dynamic routesimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Dynamic routes', link: '/en/1.x/getting-startedimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                {import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Custom handlers', link: '/enimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Form submissions',import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: 'Form submissions', link: '/en/1.x/getting-started/formimport { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: 'Fresh 中文文档',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
        ],
        sidebar: [],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Fresh Documentation',
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
                { text: '<head> element', link: '/en/latest/advanced/head' },
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
                { text: