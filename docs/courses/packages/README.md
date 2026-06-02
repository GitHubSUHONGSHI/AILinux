# 软件包

## 学习目标

- 理解包管理器的作用。
- 会更新软件源、安装和删除软件。
- 区分 Debian/Ubuntu 与 RHEL 系发行版命令。

## 核心概念

包管理器负责安装、升级、删除软件，并处理依赖。Ubuntu/Debian 常用 `apt`，Rocky/CentOS/Fedora 常用 `dnf` 或 `yum`。

## 命令示例

<CommandCard
  title="更新软件源"
  command="sudo apt update"
  scenario="在 Ubuntu/Debian 中刷新可安装软件列表。"
  caution="sudo 会提升权限，执行前确认命令来源可信。"
/>

<CommandCard
  title="安装软件"
  command="sudo apt install git"
  scenario="安装 Git。"
/>

## 常见错误

- 把 `apt update` 理解成升级所有软件。
- 不看发行版就混用 `apt` 和 `dnf`。

## 练习

<PracticeTask
  title="安装一个工具"
  goal="在 Ubuntu/Debian 中安装 tree，并用它查看目录树。"
  hint="先更新软件源，再安装 tree。"
  answer="sudo apt update\nsudo apt install tree\ntree ."
/>

## 总结

包管理器让安装软件变得可追踪、可升级、可卸载。先确认发行版，再选择命令。
