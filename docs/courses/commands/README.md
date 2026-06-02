# 常用命令

## 学习目标

- 会查看命令帮助。
- 会查看、搜索和统计文本内容。
- 会压缩、解压和组合命令。

## 核心概念

Linux 命令通常可以通过 `--help` 或 `man` 查看帮助。管道 `|` 可以把前一个命令的输出交给后一个命令继续处理。

## 命令示例

<CommandCard
  title="查看文件前几行"
  command="head -n 20 app.log"
  scenario="快速查看日志或文本文件开头内容。"
  params="-n 指定显示行数。"
/>

<CommandCard
  title="搜索文本"
  command="grep -n error app.log"
  scenario="在日志中查找包含 error 的行。"
  params="-n 显示匹配行号。"
/>

<CommandCard
  title="统计行数"
  command="wc -l app.log"
  scenario="统计文件有多少行。"
/>

## 常见错误

- 不看帮助，死记硬背参数。
- 搜索大小写敏感问题没有意识，可以用 `grep -i` 忽略大小写。

## 练习

<PracticeTask
  title="筛选日志关键词"
  goal="在一个文本文件中找出包含 error 的行并显示行号。"
  hint="使用 grep 的 -n 参数。"
  answer="grep -n error app.log"
/>

## 总结

常用命令的关键不是记住全部参数，而是知道如何查帮助、如何组合输入输出。
