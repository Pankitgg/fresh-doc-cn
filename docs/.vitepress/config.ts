import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fresh 文档',
  description: 'Fresh 中文文档',
  ignoreDeadLinks: true,

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pankitgg/fresh-doc-cn' },
    ],
  },
})
