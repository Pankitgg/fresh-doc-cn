import { writeFileSync, readdirSync } from 'fs'
import { resolve, join } from 'path'

const siteUrl = process.env.SITE_URL || 'https://fresh.ai-nous.com'
const docsPath = resolve(process.cwd(), 'docs')
const sitemapPath = resolve(process.cwd(), 'docs/public/sitemap.xml')

const externalLinks = [
  { loc: 'https://blog.ai-nous.com/', priority: '0.9', changefreq: 'daily' },
  { loc: 'https://ai-nous.com/', priority: '0.9', changefreq: 'daily' },
  { loc: 'https://studio.ai-nous.com/', priority: '0.9', changefreq: 'daily' },
]

const excludeDirs = ['1.x', 'canary', 'check_images_test.ts', 'toc.ts']

function walkDir(dir, lang, basePath = '') {
  const files = readdirSync(dir, { withFileTypes: true })
  const urls = []
  
  for (const file of files) {
    const filePath = join(dir, file.name)
    // 使用正斜杠拼接路径，避免 Windows 系统使用反斜杠
    const relativePath = basePath ? `${basePath}/${file.name}` : file.name
    
    if (excludeDirs.includes(file.name)) {
      continue
    }
    
    if (file.isDirectory()) {
      urls.push(...walkDir(filePath, lang, relativePath))
    } else if (file.name.endsWith('.md') && !file.name.startsWith('.')) {
      let url = relativePath.replace(/\.md$/, '')
      if (url.endsWith('/index')) {
        url = url.slice(0, -6)
        if (url === '') {
          urls.push(`/${lang}/`)
        } else {
          urls.push(`/${lang}/${url}/`)
        }
      } else {
        urls.push(`/${lang}/${url}.html`)
      }
    }
  }
  
  return urls
}

function generateSitemap() {
  const now = new Date().toISOString()
  const zhUrls = walkDir(join(docsPath, 'zh'), 'zh')
  
  const allUrls = ['/zh/', ...zhUrls]
  const uniqueUrls = [...new Set(allUrls)]
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  
  externalLinks.forEach(link => {
    xml += '  <url>\n'
    xml += `    <loc>${link.loc}</loc>\n`
    xml += `    <lastmod>${now}</lastmod>\n`
    xml += `    <changefreq>${link.changefreq}</changefreq>\n`
    xml += `    <priority>${link.priority}</priority>\n`
    xml += '  </url>\n'
  })
  
  uniqueUrls.forEach(url => {
    xml += '  <url>\n'
    xml += `    <loc>${siteUrl}${url}</loc>\n`
    xml += `    <lastmod>${now}</lastmod>\n`
    xml += '    <changefreq>weekly</changefreq>\n'
    xml += '    <priority>0.8</priority>\n'
    xml += '  </url>\n'
  })
  
  xml += '</urlset>'
  
  writeFileSync(sitemapPath, xml, 'utf-8')
  console.log(`Sitemap generated: ${sitemapPath}`)
  console.log(`Total URLs: ${uniqueUrls.length + externalLinks.length}`)
  console.log(`External links: ${externalLinks.length}`)
}

generateSitemap()