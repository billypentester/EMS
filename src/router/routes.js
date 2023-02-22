import { createRouter, createWebHistory } from 'vue-router'

import Home from './../components/Home.vue'
import SignUp from './../components/SignUp.vue'
import LogIn from '../components/LogIn.vue'

const routes = new createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home },
      { path: '/signup', component: SignUp },
      { path: '/login', component: LogIn },
    ]
})

export default routes;