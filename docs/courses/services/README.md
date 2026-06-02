# 服务管理

## 学习目标

- 理解服务和 systemd。
- 会查看服务状态、启动和停止服务。
- 会查看服务日志。

## 核心概念

现代 Linux 常用 systemd 管理后台服务。`systemctl` 管服务，`journalctl` 看日志。

## 命令示例

<CommandCard
  title="查看服务状态"
  command="systemctl status ssh"
  scenario="查看 SSH 服务是否运行。"
/>

<CommandCard
  title="重启服务"
  command="sudo systemctl restart nginx"
  scenario="重启 Nginx 服务让配置生效。"
  caution="重启服务可能影响在线访问，生产环境要先确认影响范围。"
/>

<CommandCard
  title="查看日志"
  command="journalctl -u nginx -n 50"
  scenario="查看 Nginx 最近 50 行服务日志。"
/>

## 常见错误

- 修改配置后不检查语法就重启服务。
- 只看状态，不看日志。

## 练习

<PracticeTask
  title="查看一个服务"
  goal="查看 SSH 或其他已安装服务的状态和最近日志。"
  hint="使用 systemctl status 和 journalctl。"
  answer="systemctl status ssh\njournalctl -u ssh -n 20"
/>

## 总结

服务管理要关注状态、配置和日志。日志通常比错误提示更接近真相。
