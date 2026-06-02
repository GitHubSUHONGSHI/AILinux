<script setup lang="ts">
defineProps<{
  title: string
  goal: string
  hint: string
  answer: string
}>()
</script>

<template>
  <article class="practice-task">
    <div>
      <p class="practice-task__eyebrow">实战任务</p>
      <h3>{{ title }}</h3>
      <p>{{ goal }}</p>
    </div>
    <details>
      <summary>查看提示和参考答案</summary>
      <p><strong>提示：</strong>{{ hint }}</p>
      <pre><code>{{ answer }}</code></pre>
    </details>
  </article>
</template>
