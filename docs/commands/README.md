# 命令速查

## 文件与目录

<CommandCard title="显示当前位置" command="pwd" scenario="确认当前终端所在目录。" />
<CommandCard title="列出文件" command="ls -la" scenario="查看文件、隐藏文件、权限和时间。" params="-l 长格式，-a 包含隐藏文件。" />
<CommandCard title="复制文件" command="cp source.txt backup.txt" scenario="复制文件并保留原文件。" caution="目标文件已存在时会被覆盖。" />
<CommandCard title="移动或重命名" command="mv old.txt new.txt" scenario="移动文件，也可用于重命名。" caution="目标路径要确认清楚。" />
<CommandCard title="删除文件" command="rm file.txt" scenario="删除普通文件。" caution="谨慎使用 rm -rf，删除后通常不能直接恢复。" />

## 文本处理

<CommandCard title="查看文件" command="cat notes.txt" scenario="查看较短文本文件内容。" />
<CommandCard title="分页查看" command="less app.log" scenario="查看较长日志，可上下翻页和搜索。" />
<CommandCard title="搜索关键词" command="grep -n error app.log" scenario="查找包含关键词的行。" params="-n 显示行号。" />
<CommandCard title="统计行数" command="wc -l app.log" scenario="统计文本文件行数。" />

## 进程与系统

<CommandCard title="查看进程" command="ps aux" scenario="列出正在运行的进程。" />
<CommandCard title="实时监控" command="top" scenario="观察 CPU、内存和进程占用。" />
<CommandCard title="结束进程" command="kill 1234" scenario="请求指定 PID 的进程退出。" caution="先确认 PID 再执行。" />

## 网络

<CommandCard title="查看 IP" command="ip addr" scenario="查看本机网络接口和 IP 地址。" />
<CommandCard title="测试连通" command="ping -c 4 example.com" scenario="测试目标是否可达。" />
<CommandCard title="查看端口" command="ss -tuln" scenario="查看本机监听端口。" />

## 权限、压缩与包管理

<CommandCard title="添加执行权限" command="chmod +x script.sh" scenario="让脚本可以执行。" />
<CommandCard title="打包压缩" command="tar -czf backup.tar.gz folder" scenario="把目录压缩为 tar.gz 文件。" />
<CommandCard title="解压文件" command="tar -xzf backup.tar.gz" scenario="解压 tar.gz 文件。" />
<CommandCard title="安装软件" command="sudo apt install git" scenario="在 Ubuntu/Debian 中安装软件。" caution="sudo 命令会提升权限。" />
