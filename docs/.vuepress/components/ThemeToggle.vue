<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

type ThemeMode = 'light' | 'dark' | 'system'

const storageKey = 'linux-learning-theme'
const mode = ref<ThemeMode>('system')
const systemDark = ref(false)
let mediaQuery: MediaQueryList | undefined

const currentTheme = computed(() => {
  if (mode.value === 'system') {
    return systemDark.value ? 'dark' : 'light'
  }

  return mode.value
})

const modeLabels: Record<ThemeMode, string> = {
  light: '浅色',
  dark: '深色',
  system: '系统'
}

const modes: ThemeMode[] = ['light', 'dark', 'system']

const applyTheme = () => {
  document.documentElement.dataset.themeMode = mode.value
  document.documentElement.dataset.theme = currentTheme.value
}

const setMode = (nextMode: ThemeMode) => {
  mode.value = nextMode
  localStorage.setItem(storageKey, nextMode)
  applyTheme()
}

const handleSystemChange = (event: MediaQueryListEvent) => {
  systemDark.value = event.matches
  applyTheme()
}

onMounted(() => {
  const savedMode = localStorage.getItem(storageKey)

  if (savedMode === 'light' || savedMode === 'dark' || savedMode === 'system') {
    mode.value = savedMode
  }

  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  systemDark.value = mediaQuery.matches
  mediaQuery.addEventListener('change', handleSystemChange)
  applyTheme()
})

onUnmounted(() => {
  mediaQuery?.removeEventListener('change', handleSystemChange)
})
</script>

<template>
  <div class="theme-toggle" aria-label="网站主题切换">
    <button
      v-for="item in modes"
      :key="item"
      class="theme-toggle__button"
      :class="{ 'theme-toggle__button--active': mode === item }"
      type="button"
      :aria-pressed="mode === item"
      :title="`切换到${modeLabels[item]}主题`"
      @click="setMode(item)"
    >
      <span class="theme-toggle__icon" aria-hidden="true">
        {{ item === 'light' ? '☼' : item === 'dark' ? '◐' : '◎' }}
      </span>
      <span>{{ modeLabels[item] }}</span>
    </button>
  </div>
</template>
