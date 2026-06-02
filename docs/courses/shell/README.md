# Shell 基础

## 学习目标

- 理解变量、脚本和退出状态。
- 会写一个简单 Bash 脚本。
- 会使用管道和重定向。

## 核心概念

Shell 脚本把多条命令写进文件，适合重复执行。变量可以保存临时值，重定向可以把输出写入文件。

## 命令示例

<CommandCard
  title="写入文件"
  command="echo hello > note.txt"
  scenario="把输出写入文件，覆盖原内容。"
  caution="> 会覆盖文件，追加内容使用 >>。"
/>

<CommandCard
  title="使用变量"
  command="name=linux && echo $name"
  scenario="保存并输出一个临时变量。"
/>

## 常见错误

- 变量赋值时在等号两边加空格。
- 不小心用 `>` 覆盖已有文件。

## 练习

<PracticeTask
  title="创建问候脚本"
  goal="写一个 greet.sh，执行后输出 hello linux。"
  hint="创建文件、写入 echo、添加执行权限。"
  answer="echo 'echo hello linux' > greet.sh\nchmod +x greet.sh\n./greet.sh"
/>

## 总结

Shell 脚本适合把稳定流程自动化。先从短脚本开始，确认每一步命令都能单独运行。
