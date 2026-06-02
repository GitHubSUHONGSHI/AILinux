<script setup lang="ts">
defineProps<{
  steps: Array<{
    title: string
    description: string
    link: string
    duration: string
  }>
}>()
</script>

<template>
  <ol class="learning-path">
    <li v-for="(step, index) in steps" :key="step.link" class="learning-path__item">
      <span class="learning-path__index">{{ index + 1 }}</span>
      <div>
        <a :href="step.link">{{ step.title }}</a>
        <p>{{ step.description }}</p>
      </div>
      <small>{{ step.duration }}</small>
    </li>
  </ol>
</template>
