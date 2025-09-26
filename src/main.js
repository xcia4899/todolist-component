import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/global.scss'
import App from './App.vue'


// createApp(App).mount('#app')
createApp(App).use(createPinia()).mount('#app')

// 展開鍊式寫法
// const app = createApp(App)
// app.use(createPinia())
// app.mount('#app')