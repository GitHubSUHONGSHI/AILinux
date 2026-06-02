<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

type SearchEntry = {
  title: string
  section: string
  summary: string
  path: string
  keywords: string[]
}

const entries: SearchEntry[] = [
  {
    title: 'Linux 认识',
    section: '课程',
    summary: '理解 Linux、发行版、终端、Shell 和命令的基本关系。',
    path: '/courses/intro/',
    keywords: ['linux', 'shell', '终端', '发行版', 'whoami', 'uname']
  },
  {
    title: '环境准备',
    section: '课程',
    summary: '选择 WSL、虚拟机或云服务器，并确认发行版和当前目录。',
    path: '/courses/setup/',
    keywords: ['wsl', '虚拟机', '云服务器', 'os-release', 'pwd']
  },
  {
    title: '文件系统',
    section: '课程',
    summary: '学习根目录、绝对路径、相对路径和基础文件操作。',
    path: '/courses/filesystem/',
    keywords: ['文件', '目录', '路径', 'ls', 'mkdir', 'rm', 'cp', 'mv']
  },
  {
    title: '常用命令',
    section: '课程',
    summary: '掌握帮助、查看、搜索、统计、压缩和管道组合。',
    path: '/courses/commands/',
    keywords: ['命令', 'grep', 'head', 'wc', 'help', 'man', 'pipe']
  },
  {
    title: '权限',
    section: '课程',
    summary: '理解用户、用户组、权限位和脚本执行权限。',
    path: '/courses/permissions/',
    keywords: ['权限', 'chmod', 'sudo', 'rwx', '用户组']
  },
  {
    title: '进程',
    section: '课程',
    summary: '查看进程、资源占用，并安全结束进程。',
    path: '/courses/process/',
    keywords: ['进程', 'ps', 'top', 'kill', 'pid']
  },
  {
    title: '软件包',
    section: '课程',
    summary: '使用 apt、dnf 或 yum 安装、升级和删除软件。',
    path: '/courses/packages/',
    keywords: ['软件', '包管理', 'apt', 'dnf', 'yum', 'install']
  },
  {
    title: 'Shell 基础',
    section: '课程',
    summary: '学习变量、脚本、重定向和简单 Bash 自动化。',
    path: '/courses/shell/',
    keywords: ['shell', 'bash', '脚本', 'echo', '变量', '重定向']
  },
  {
    title: '网络基础',
    section: '课程',
    summary: '查看 IP、测试连通性、检查端口和基础网络排查。',
    path: '/courses/network/',
    keywords: ['网络', 'ip addr', 'ping', 'ss', '端口', 'dns']
  },
  {
    title: '服务管理',
    section: '课程',
    summary: '使用 systemctl 管理服务，并用 journalctl 查看日志。',
    path: '/courses/services/',
    keywords: ['服务', 'systemctl', 'journalctl', 'nginx', 'ssh', 'systemd']
  },
  {
    title: '命令速查',
    section: '速查',
    summary: '按文件、文本、进程、网络、权限、压缩和包管理分类查命令。',
    path: '/commands/',
    keywords: ['grep', 'chmod', 'systemctl', 'tar', 'apt', 'ss', 'rm', 'less']
  },
  {
    title: '实战练习',
    section: '练习',
    summary: '创建目录、搜索日志、编写脚本和打包练习目录。',
    path: '/practice/',
    keywords: ['练习', '创建目录', '搜索日志', '编写脚本', 'tar', 'grep', 'chmod']
  },
  {
    title: '测验',
    section: '测验',
    summary: '通过选择题检查 rm、pwd、apt 和 systemctl 等知识点。',
    path: '/quiz/',
    keywords: ['测验', 'rm', 'pwd', 'apt', 'systemctl']
  }
]

const query = ref('')
const isOpen = ref(false)
const activeIndex = ref(0)
const root = ref<HTMLElement | null>(null)

const normalizedQuery = computed(() => query.value.trim().toLowerCase())

const results = computed(() => {
  const value = normalizedQuery.value

  if (!value) {
    return []
  }

  return entries
    .map((entry) => {
      const haystack = [
        entry.title,
        entry.section,
        entry.summary,
        ...entry.keywords
      ].join(' ').toLowerCase()
      const score = entry.title.toLowerCase().includes(value)
        ? 3
        : entry.keywords.some((keyword) => keyword.toLowerCase().includes(value))
          ? 2
          : haystack.includes(value)
            ? 1
            : 0

      return { entry, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((item) => item.entry)
})

const hasQuery = computed(() => normalizedQuery.value.length > 0)
const showPanel = computed(() => isOpen.value && hasQuery.value)

const goToResult = (entry: SearchEntry) => {
  window.location.href = entry.path
  query.value = ''
  isOpen.value = false
  activeIndex.value = 0
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!showPanel.value || results.value.length === 0) {
    return
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault()
    activeIndex.value = (activeIndex.value + 1) % results.value.length
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault()
    activeIndex.value =
      activeIndex.value === 0 ? results.value.length - 1 : activeIndex.value - 1
  }

  if (event.key === 'Enter') {
    event.preventDefault()
    goToResult(results.value[activeIndex.value])
  }
}

const handleClickOutside = (event: MouseEvent) => {
  if (!root.value?.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="root" class="global-search" role="search">
    <input
      v-model="query"
      type="search"
      class="global-search__input"
      placeholder="搜索课程、命令、练习..."
      autocomplete="off"
      spellcheck="false"
      aria-label="全局搜索"
      @focus="isOpen = true"
      @input="activeIndex = 0; isOpen = true"
      @keydown="handleKeydown"
    />

    <div v-if="showPanel" class="global-search__panel">
      <button
        v-for="(result, index) in results"
        :key="result.path"
        class="global-search__result"
        :class="{ 'global-search__result--active': activeIndex === index }"
        type="button"
        @mousedown.prevent="goToResult(result)"
      >
        <span class="global-search__section">{{ result.section }}</span>
        <strong>{{ result.title }}</strong>
        <span>{{ result.summary }}</span>
      </button>

      <p v-if="results.length === 0" class="global-search__empty">
        没有找到相关内容，试试更短的关键词。
      </p>
    </div>
  </div>
</template>
