import { createRouter, createWebHistory } from 'vue-router'

// Import pages
import Hello from '../pages/Hello.vue'
import ShowData from '../pages/ShowData.vue'
import ButtonClick from '../pages/ButtonClick.vue'
import TextInput from '../pages/TextInput.vue'
import MyConditions from '../pages/MyConditions.vue'
import CompleteSimpleApp from '../pages/CompleteSimpleApp.vue'

const routes = [
  { path: '/Hello', component: Hello },
  { path: '/ShowData', component: ShowData },
  { path: '/ButtonClick', component: ButtonClick },
  { path: '/TextInput', component: TextInput},
  { path: '/MyConditions', component: MyConditions },
  { path: '/CompleteSimpleApp', component: CompleteSimpleApp },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router