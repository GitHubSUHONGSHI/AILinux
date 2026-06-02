<script setup lang="ts">
import { computed, ref } from 'vue'

type Option = {
  label: string
  value: string
}

const props = defineProps<{
  question: string
  options: Option[]
  answer: string
  explanation: string
}>()

const selected = ref('')

const isAnswered = computed(() => selected.value !== '')
const isCorrect = computed(() => selected.value === props.answer)
</script>

<template>
  <section class="quiz-block">
    <p class="quiz-block__eyebrow">章节测验</p>
    <h3>{{ question }}</h3>
    <div class="quiz-block__options">
      <button
        v-for="option in options"
        :key="option.value"
        class="quiz-block__option"
        :class="{
          'quiz-block__option--selected': selected === option.value,
          'quiz-block__option--correct': isAnswered && option.value === answer,
          'quiz-block__option--wrong': selected === option.value && !isCorrect
        }"
        type="button"
        @click="selected = option.value"
      >
        <strong>{{ option.value }}</strong>
        <span>{{ option.label }}</span>
      </button>
    </div>
    <p v-if="isAnswered" class="quiz-block__result" :class="{ 'quiz-block__result--ok': isCorrect }">
      {{ isCorrect ? '回答正确。' : '再看一眼章节内容。' }}{{ explanation }}
    </p>
  </section>
</template>
