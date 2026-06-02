<script setup lang="ts">
defineProps<{
  command: string
  title: string
  scenario: string
  params?: string
  caution?: string
}>()
</script>

<template>
  <article class="command-card">
    <div class="command-card__header">
      <h3>{{ title }}</h3>
      <code>{{ command }}</code>
    </div>
    <p>{{ scenario }}</p>
    <p v-if="params" class="command-card__meta">
      <strong>参数：</strong>{{ params }}
    </p>
    <p v-if="caution" class="command-card__caution">
      <strong>注意：</strong>{{ caution }}
    </p>
  </article>
</template>
