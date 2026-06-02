# Linux 认识

## 学习目标

- 知道 Linux、发行版、终端和 Shell 分别是什么。
- 理解命令由“命令名 + 参数 + 对象”组成。
- 建立安全意识，先读懂再执行。

## 核心概念

Linux 是操作系统内核。Ubuntu、Debian、Rocky Linux 等发行版会把 Linux 内核、系统工具、包管理器和桌面环境组合起来，形成可以直接使用的系统。

终端是输入命令的窗口，Shell 是解释命令并让系统执行的程序。常见 Shell 包括 Bash、Zsh 和 Fish。

## 命令示例

<CommandCard
  title="查看当前用户"
  command="whoami"
  scenario="确认你现在以哪个用户身份执行命令。"
  caution="学习阶段尽量避免长期使用 root 用户。"
/>

<CommandCard
  title="查看系统信息"
  command="uname -a"
  scenario="查看内核和系统架构信息。"
  params="-a 表示显示全部可用信息。"
/>

## 常见错误

- 把终端理解成 Linux 本身。终端只是入口，真正执行命令的是 Shell 和系统工具。
- 看到 `sudo` 就直接复制执行。`sudo` 会提升权限，可能改动系统文件。

## 练习

<PracticeTask
  title="确认自己的终端身份"
  goal="分别查看当前用户、当前目录和系统内核信息。"
  hint="使用 whoami、pwd、uname。"
  answer="whoami\npwd\nuname -a"
/>

## 总结

Linux 学习的第一步不是背命令，而是理解命令运行的环境。先知道自己是谁、在哪里、要操作什么，再执行命令。

<QuizBlock
  question="Shell 在 Linux 学习中主要负责什么？"
  :options="[
    { value: 'A', label: '解释并执行用户输入的命令' },
    { value: 'B', label: '保存所有图片文件' },
    { value: 'C', label: '替代 Linux 内核' }
  ]"
  answer="A"
  explanation="Shell 会解析你输入的命令，并调用系统中的程序执行。"
/>
