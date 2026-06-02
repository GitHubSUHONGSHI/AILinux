# 测验

完成章节后可以用这些题目检查理解。答错时先回到对应章节复习，再重新选择。

<QuizBlock
  question="执行 rm 命令前最应该确认什么？"
  :options="[
    { value: 'A', label: '目标路径是否正确' },
    { value: 'B', label: '终端背景颜色是否好看' },
    { value: 'C', label: '文件名是否足够短' }
  ]"
  answer="A"
  explanation="删除操作风险较高，路径确认比速度更重要。"
/>

<QuizBlock
  question="哪个命令适合查看当前目录？"
  :options="[
    { value: 'A', label: 'pwd' },
    { value: 'B', label: 'kill' },
    { value: 'C', label: 'tar' }
  ]"
  answer="A"
  explanation="pwd 会打印当前工作目录。"
/>

<QuizBlock
  question="在 Ubuntu/Debian 中安装软件常用哪个包管理器？"
  :options="[
    { value: 'A', label: 'apt' },
    { value: 'B', label: 'ss' },
    { value: 'C', label: 'chmod' }
  ]"
  answer="A"
  explanation="apt 是 Debian 系发行版常见的软件包管理工具。"
/>

<QuizBlock
  question="systemctl 主要用于什么？"
  :options="[
    { value: 'A', label: '管理系统服务' },
    { value: 'B', label: '压缩文件' },
    { value: 'C', label: '统计文本行数' }
  ]"
  answer="A"
  explanation="systemctl 用于查看、启动、停止和重启 systemd 服务。"
/>
