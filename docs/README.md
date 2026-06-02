---
home: true
title: AILinuxSu学习站
heroImage: /images/terminal-mark.svg
heroText: AILinuxSu学习站
tagline: 从第一次打开终端开始，按路径学会文件、命令、权限、进程、网络和服务管理。
actions:
  - text: 从学习路径开始
    link: /guide/
    type: primary
  - text: 查看命令速查
    link: /commands/
    type: secondary
features:
  - title: 路径化课程
    details: 按零基础学习者的理解顺序拆解 Linux 核心概念，每章都有目标、示例、练习和总结。
  - title: 命令速查
    details: 按真实使用场景整理常见命令，给出参数含义、示例和安全提醒。
  - title: 即时测验
    details: 使用 Vue3 组件嵌入章节测验，答完立即看到结果和解释。
---

## 今天可以学到什么

<LearningPath :steps="[
  { title: '认识 Linux', description: '理解发行版、终端、Shell 和命令的关系。', link: '/courses/intro/', duration: '20 分钟' },
  { title: '文件系统', description: '掌握目录结构、路径、查看和移动文件。', link: '/courses/filesystem/', duration: '35 分钟' },
  { title: '常用命令', description: '学会日常查看、编辑、搜索和压缩操作。', link: '/courses/commands/', duration: '45 分钟' },
  { title: '实战练习', description: '用小任务把命令连起来，形成肌肉记忆。', link: '/practice/', duration: '30 分钟' }
]" />
