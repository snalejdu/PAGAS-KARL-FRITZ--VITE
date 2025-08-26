import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
export function toStars(rating){
  return '⭐'.repeat(rating)
}
