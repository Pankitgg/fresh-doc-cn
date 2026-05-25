import { writeFileSync } from 'fs'
import { resolve } from 'path'

const versionPath = resolve(process.cwd(), 'docs/public/version.json')
const now = new Date()

const versionData = {
  buildTime: now.toISOString(),
  buildTimeFormatted: now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

writeFileSync(versionPath, JSON.stringify(versionData, null, 2))
console.log('version.json generated:', versionData.buildTimeFormatted)