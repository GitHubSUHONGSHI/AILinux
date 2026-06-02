import { defineClientConfig } from 'vuepress/client'
import CommandCard from './components/CommandCard.vue'
import GlobalSearch from './components/GlobalSearch.vue'
import LearningPath from './components/LearningPath.vue'
import PracticeTask from './components/PracticeTask.vue'
import QuizBlock from './components/QuizBlock.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import './styles/index.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('CommandCard', CommandCard)
    app.component('LearningPath', LearningPath)
    app.component('PracticeTask', PracticeTask)
    app.component('QuizBlock', QuizBlock)
  },
  rootComponents: [GlobalSearch, ThemeToggle]
})
