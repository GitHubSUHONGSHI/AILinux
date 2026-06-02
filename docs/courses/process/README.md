# 进程

## 学习目标

- 知道进程是正在运行的程序。
- 会查看进程和资源占用。
- 会安全地结束进程。

## 核心概念

每个进程都有 PID。排查问题时常会查看进程是否存在、占用多少 CPU 或内存，以及它监听了哪些端口。

## 命令示例

<CommandCard
  title="查看进程列表"
  command="ps aux"
  scenario="查看系统中正在运行的进程。"
/>

<CommandCard
  title="实时查看资源"
  command="top"
  scenario="观察 CPU、内存和进程变化。"
/>

<CommandCard
  title="结束进程"
  command="kill 1234"
  scenario="请求 PID 为 1234 的进程退出。"
  caution="先确认 PID 对应的程序，避免结束重要服务。"
/>

## 常见错误

- 看到卡顿就直接 `kill -9`。
- 没有确认进程归属和启动方式。

## 练习

<PracticeTask
  title="找到当前 Shell"
  goal="查看当前终端相关的进程。"
  hint="使用 ps 并搜索 bash 或 zsh。"
  answer="ps aux | grep bash"
/>

## 总结

进程排查要先观察，再处理。`kill` 是管理工具，不是第一反应。
