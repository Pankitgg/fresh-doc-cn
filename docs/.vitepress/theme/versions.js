export const versions = [
  { label: 'v2 (latest)', path: '' },
  { label: 'v1.x', path: '/1.x' },
]

export function getVersionFromPath(path) {
  if (path.includes('/1.x/')) return 'v1.x'
  if (path.includes('/canary/')) return 'canary'
  return 'v2 (latest)'
}

export function switchVersion(currentPath, targetVersion) {
  const version = versions.find(v => v.label === targetVersion)
  if (!version) return currentPath
  
  // 检测当前语言
  const langMatch = currentPath.match(/^\/(zh|en)/)
  const lang = langMatch ? langMatch[1] : 'zh'
  
  // 直接跳转到对应版本的 introduction 页面
  if (version.path) {
    return `/${lang}${version.path}/introduction/`
  }
  return `/${lang}/introduction/`
}
