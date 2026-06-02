# 文件系统

## 学习目标

- 理解根目录、绝对路径和相对路径。
- 学会查看、创建、移动和删除文件。
- 知道删除命令的风险。

## 核心概念

Linux 文件系统从 `/` 根目录开始。`/home` 通常保存普通用户文件，`/etc` 保存配置，`/var` 常见日志和运行数据，`/usr` 保存系统程序和共享资源。

## 命令示例

<CommandCard
  title="列出目录内容"
  command="ls -la"
  scenario="查看当前目录下的文件、隐藏文件、权限和大小。"
  params="-l 使用长格式，-a 显示隐藏文件。"
/>

<CommandCard
  title="创建目录"
  command="mkdir -p notes/linux"
  scenario="创建多层目录，用来整理学习笔记。"
  params="-p 表示父目录不存在时一起创建。"
/>

<CommandCard
  title="删除文件"
  command="rm old.txt"
  scenario="删除不再需要的普通文件。"
  caution="不要在不理解路径时执行 rm -rf，尤其不要配合 sudo。"
/>

## 常见错误

- 混淆 `/home/user` 和 `~/`。
- 把相对路径当成绝对路径。
- 不看路径就使用 `rm -rf`。

## 练习

<PracticeTask
  title="创建学习目录"
  goal="在家目录下创建 linux-lab，并在里面创建 readme.txt。"
  hint="先 cd 到家目录，再 mkdir 和 touch。"
  answer="cd ~\nmkdir -p linux-lab\ncd linux-lab\ntouch readme.txt\nls -la"
/>

## 总结

路径是 Linux 操作的坐标。每次操作前先确认当前目录，再确认目标路径。

<QuizBlock
  question="Linux 文件系统的根目录是哪一个？"
  :options="[
    { value: 'A', label: 'C:\\\\' },
    { value: 'B', label: '/' },
    { value: 'C', label: '~root' }
  ]"
  answer="B"
  explanation="/ 是 Linux 文件系统的起点，其他目录都挂在它下面。"
/>
