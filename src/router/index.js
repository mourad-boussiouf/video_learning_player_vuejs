import { createRouter, createWebHistory } from 'vue-router'
import VideoPlayer from '../components/VideoPlayer.vue'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'videoplayer',
    component: VideoPlayer
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
