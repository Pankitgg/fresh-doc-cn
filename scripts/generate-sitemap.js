import { writeFileSync, readdirSync } from 'fs'
import { resolve, join } from 'path'

const siteUrl = 'https://fresh-doc-cn.deno.dev'
const docsPath = resolve(process.cwd(), 'docs')
const sitemapPath = resolve(process.cwd(), 'docs/public/sitemap.xml')

function walkDir(dir, lang, basePath = '') {
  const files = readdirSync(dir, { withFileTypes: true })
  const urls = []
  
  for (const file of files) {
    const filePath = join(dir, file.name)
    const relativePath = join(basePath, file.name)
    
    if (file.isDirectory()) {
      urls.push(...walkDir(filePath, lang, relativePath))
    } else if (file.name.endsWith('.md') && !file.name.startsWith('.')) {
      let url = relativePath.replace(/\.md$/, '')
      if (url.endsWith('/index')) {
        url = url.slice(0, -6)
      }
      urls.push(`/${lang}/${url}`)
    }
  }
  
  return urls
}

function generateSitemap() {
  const now = new Date().toISOString()
  const zhUrls = walkDir(join(docsPath, 'zh'), 'zh')
  const enUrls = walkDir(join(docsPath, 'en'), 'en')
  
  const allUrls = ['/zh/', '/en/', ...zhUrls, ...enUrls]
  const uniqueUrls = [...new Set(allUrls)]
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  
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
  console.log(`Total URLs: ${uniqueUrls.length}`)
}

generateSitemap()