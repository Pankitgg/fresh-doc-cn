<template>
  <div class="VPVersionSelector">
    <select v-model="selectedVersion" @change="onVersionChange" class="version-select">
      <option v-for="version in versions" :key="version.label" :value="version.label">
        {{ version.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import { versions, getVersionFromPath, switchVersion } from './versions.js'

const route = useRoute()
const selectedVersion = ref('v2 (latest)')

onMounted(() => {
  const currentVersion = getVersionFromPath(route.path)
  selectedVersion.value = currentVersion === 'v2' ? 'v2 (latest)' : currentVersion
})

watch(() => route.path, (newPath) => {
  const currentVersion = getVersionFromPath(newPath)
  selectedVersion.value = currentVersion === 'v2' ? 'v2 (latest)' : currentVersion
})

function onVersionChange() {
  const newPath = switchVersion(route.path, selectedVersion.value)
  if (newPath !== route.path) {
    window.location.href = newPath
  }
}
</script>

<style scoped>
.VPVersionSelector {
  display: flex;
  align-items: center;
  padding: 0 12px;
}

.version-select {
  appearance: none;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 4px 28px 4px 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.25s;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
}

.version-select:hover {
  border-color: var(--vp-c-brand);
}

.version-select:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

@media (max-width: 768px) {
  .VPVersionSelector {
    padding: 0 8px;
  }
  
  .version-select {
    font-size: 12px;
    padding: 3px 24px 3px 8px;
  }
}
</style>
