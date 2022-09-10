import { createRouter, createWebHashHistory } from "vue-router";
import Herosection from '../views/Herosection.vue'
import Projects from '../views/Projects.vue'

const routes = [
    {
        path: '/',
        name: 'Herosection', 
        component: Herosection
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router