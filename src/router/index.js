import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Services from '@/views/Services.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/About.vue')
    },
    {
        path: '/services',
        name: 'Services',
        component: Services
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
