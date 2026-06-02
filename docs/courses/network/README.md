# 网络基础

## 学习目标

- 会查看 IP 地址和网络连通性。
- 会检查端口和域名解析。
- 能做基础网络排查。

## 核心概念

网络排查通常按顺序看：本机地址、网关连通、域名解析、目标端口、服务日志。

## 命令示例

<CommandCard
  title="查看 IP 地址"
  command="ip addr"
  scenario="查看本机网络接口和 IP。"
/>

<CommandCard
  title="测试连通性"
  command="ping -c 4 example.com"
  scenario="向目标发送 4 次 ICMP 请求，观察是否可达。"
/>

<CommandCard
  title="查看监听端口"
  command="ss -tuln"
  scenario="查看本机正在监听的 TCP/UDP 端口。"
/>

## 常见错误

- 只看 ping 结果就判断网站服务是否正常。
- 没有区分域名解析问题和端口访问问题。

## 练习

<PracticeTask
  title="做一次基础连通性检查"
  goal="查看本机 IP，测试 example.com 连通性，再查看监听端口。"
  hint="使用 ip、ping、ss。"
  answer="ip addr\nping -c 4 example.com\nss -tuln"
/>

## 总结

网络排查需要分层看问题。先确认本机，再确认目标，再确认服务。
