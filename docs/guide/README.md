# 学习路径

这条路径适合刚接触 Linux 的学习者。你不需要先会编程，只要能安装一个虚拟机、WSL 或远程连接到一台 Linux 主机即可。

<LearningPath :steps="[
  { title: 'Linux 认识', description: '先建立终端、Shell、发行版和包管理器的基本概念。', link: '/courses/intro/', duration: '第 1 天' },
  { title: '环境准备', description: '选择 WSL、虚拟机或云服务器，完成第一次登录。', link: '/courses/setup/', duration: '第 1 天' },
  { title: '文件系统', description: '理解目录结构、路径和文件操作，这是后续所有学习的地基。', link: '/courses/filesystem/', duration: '第 2 天' },
  { title: '常用命令', description: '掌握查看、搜索、编辑、压缩和帮助命令。', link: '/courses/commands/', duration: '第 3 天' },
  { title: '权限与进程', description: '知道为什么有些文件不能改、程序如何在后台运行。', link: '/courses/permissions/', duration: '第 4 天' },
  { title: '软件、Shell、网络与服务', description: '学习安装软件、写简单脚本、检查网络和管理服务。', link: '/courses/packages/', duration: '第 5-7 天' }
]" />

## 学习建议

每次学习时打开一个真实终端，把文中的命令敲一遍。不要只复制粘贴，先读懂命令，再改一个参数看看输出有什么变化。

## 阶段目标

完成第一轮学习后，你应该能够独立完成这些事：

- 在 Linux 中找到文件、查看内容、移动和删除文件。
- 理解命令、参数、路径、权限和进程的基本含义。
- 使用包管理器安装常见软件。
- 通过日志、进程和网络命令做基础排查。
