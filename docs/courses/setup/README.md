# 环境准备

## 学习目标

- 选择适合自己的 Linux 学习环境。
- 完成第一次登录并打开终端。
- 知道遇到权限问题时先判断原因。

## 核心概念

零基础阶段推荐三种环境：Windows 用户使用 WSL，想体验完整系统可用虚拟机，准备学习服务器管理可使用云服务器。

## 命令示例

<CommandCard
  title="查看发行版信息"
  command="cat /etc/os-release"
  scenario="确认自己正在使用的 Linux 发行版和版本。"
/>

<CommandCard
  title="查看当前目录"
  command="pwd"
  scenario="确认终端当前所在位置，避免在错误目录中操作文件。"
/>

## 常见错误

- 没有确认当前目录就执行删除或移动命令。
- 不知道系统版本，直接套用不匹配的安装命令。

## 练习

<PracticeTask
  title="记录你的 Linux 环境"
  goal="查看发行版、当前用户、当前目录，并把输出记录下来。"
  hint="组合 cat、whoami、pwd 三个命令。"
  answer="cat /etc/os-release\nwhoami\npwd"
/>

## 总结

先确认环境，再学习命令。很多 Linux 问题都来自系统版本、权限身份或当前目录不一致。
