# 实战练习

这些练习都可以在普通用户目录中完成。执行前先确认当前目录，避免影响系统文件。

<PracticeTask
  title="整理学习目录"
  goal="创建 linux-lab 目录，并建立 notes、scripts、logs 三个子目录。"
  hint="使用 mkdir -p 一次创建多级目录。"
  answer="cd ~\nmkdir -p linux-lab/{notes,scripts,logs}\nls -la linux-lab"
/>

<PracticeTask
  title="写一份命令笔记"
  goal="在 notes 中创建 commands.txt，写入三条你今天学到的命令。"
  hint="使用 echo 和 >> 追加内容。"
  answer="cd ~/linux-lab\necho 'pwd - 查看当前目录' >> notes/commands.txt\necho 'ls -la - 列出文件' >> notes/commands.txt\necho 'grep -n - 搜索文本' >> notes/commands.txt\ncat notes/commands.txt"
/>

<PracticeTask
  title="搜索日志"
  goal="创建一个模拟日志文件，并找出包含 error 的行。"
  hint="先用 echo 追加多行内容，再用 grep 搜索。"
  answer="cd ~/linux-lab\necho 'info boot ok' >> logs/app.log\necho 'error config missing' >> logs/app.log\ngrep -n 'error' logs/app.log"
/>

<PracticeTask
  title="编写第一个脚本"
  goal="创建 scripts/hello.sh，运行后输出当前用户和当前目录。"
  hint="脚本中可以使用 whoami 和 pwd。"
  answer="cd ~/linux-lab\necho 'whoami' > scripts/hello.sh\necho 'pwd' >> scripts/hello.sh\nchmod +x scripts/hello.sh\n./scripts/hello.sh"
/>

<PracticeTask
  title="打包练习目录"
  goal="把 linux-lab 目录压缩成 linux-lab.tar.gz。"
  hint="回到家目录后使用 tar -czf。"
  answer="cd ~\ntar -czf linux-lab.tar.gz linux-lab\nls -lh linux-lab.tar.gz"
/>
