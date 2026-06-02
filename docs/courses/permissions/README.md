# 权限

## 学习目标

- 理解用户、用户组和权限位。
- 会查看和修改基础权限。
- 知道什么时候不该使用 `sudo`。

## 核心概念

Linux 权限通常分为读 `r`、写 `w`、执行 `x`，并分别作用于文件所有者、用户组和其他人。

## 命令示例

<CommandCard
  title="查看权限"
  command="ls -l script.sh"
  scenario="查看文件的所有者、用户组和权限位。"
/>

<CommandCard
  title="添加执行权限"
  command="chmod +x script.sh"
  scenario="让脚本文件可以被执行。"
  caution="只给可信脚本添加执行权限。"
/>

## 常见错误

- 用 `sudo` 掩盖权限问题，没有理解文件归属。
- 给目录或脚本设置过宽权限。

## 练习

<PracticeTask
  title="让脚本可执行"
  goal="创建一个 hello.sh，写入 echo 命令，并赋予执行权限。"
  hint="使用 echo、chmod 和 ./script.sh。"
  answer="echo 'echo hello linux' > hello.sh\nchmod +x hello.sh\n./hello.sh"
/>

## 总结

权限控制的是“谁能对什么做什么”。遇到权限错误时先看文件归属和权限位。
