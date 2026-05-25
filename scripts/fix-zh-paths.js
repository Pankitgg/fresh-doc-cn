import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { resolve, join } from 'path'

const docsPath = resolve(process.cwd(), 'docs/zh')

const pathMappings = {
  '/docs/concepts/': '/zh/concepts/',
  '/docs/advanced/': '/zh/advanced/',
  '/docs/deployment/': '/zh/deployment/',
  '/docs/examples/': '/zh/examples/',
  '/docs/plugins/': '/zh/plugins/',
  '/docs/getting-started/': '/zh/getting-started/',
  '/docs/introduction/': '/zh/introduction/',
  '/docs/testing/': '/zh/testing/',
  '/docs/migration-guide/': '/zh/migration-guide/',
  '/docs/contributing/': '/zh/contributing/',
  '/concepts/': '/zh/concepts/',
  '/advanced/': '/zh/advanced/',
  '/deployment/': '/zh/deployment/',
  '/examples/': '/zh/examples/',
  '/plugins/': '/zh/plugins/',
  '/getting-started/': '/zh/getting-started/',
  '/introduction/': '/zh/introduction/',
  '/testing/': '/zh/testing/',
  '/migration-guide/': '/zh/migration-guide/',
  '/contributing/': '/zh/contributing/',
}

function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8')
  let modified = false
  
  Object.keys(pathMappings).forEach(oldPath => {
    const newPath = pathMappings[oldPath]
    const regex = new RegExp(`\\]\\(${oldPath}`, 'g')
    if (content.match(regex)) {
      content = content.replace(regex, `](${newPath}`)
      modified = true
    }
  })
  
  if (modified) {
    writeFileSync(filePath, content, 'utf-8')
    console.log(`Modified: ${filePath}`)
  }
}

function walkDir(dir) {
  const files = readdirSync(dir, { withFileTypes: true })
  
  for (const file of files) {
    const filePath = join(dir, file.name)
    if (file.isDirectory()) {
      walkDir(filePath)
    } else if (file.name.endsWith('.md')) {
      processFile(filePath)
    }
  }
}

walkDir(docsPath)
console.log('Done! All paths updated to include /zh/ prefix.')
