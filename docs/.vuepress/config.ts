import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'AILinuxSu学习站',
  description: '面向零基础学习者的 Linux 路径化课程、命令速查、练习和测验。',
  bundler: viteBundler(),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索课程、命令、练习...'
        }
      },
      maxSuggestions: 8,
      getExtraFields: (page) => [
        page.contentRendered
          .replace(/<[^>]*>/g, ' ')
          .replace(/\s+/g, ' ')
      ]
    })
  ],
  theme: defaultTheme({
    logo: '/images/terminal-mark.svg',
    navbar: [
      { text: '学习路径', link: '/guide/' },
      { text: '课程', link: '/courses/intro/' },
      { text: '命令速查', link: '/commands/' },
      { text: '实战练习', link: '/practice/' },
      { text: '测验', link: '/quiz/' }
    ],
    sidebar: {
      '/courses/': [
        {
          text: 'Linux 入门课程',
          children: [
            '/courses/intro/',
            '/courses/setup/',
            '/courses/filesystem/',
            '/courses/commands/',
            '/courses/permissions/',
            '/courses/process/',
            '/courses/packages/',
            '/courses/shell/',
            '/courses/network/',
            '/courses/services/'
          ]
        }
      ],
      '/guide/': ['/guide/'],
      '/commands/': ['/commands/'],
      '/practice/': ['/practice/'],
      '/quiz/': ['/quiz/']
    },
    repo: '',
    docsDir: 'docs',
    editLink: false,
    lastUpdated: false,
    contributors: false
  })
})
