import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

import useFirebaseAuth from '../composables/firebase';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('@/views/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component:  () => import('@/views/SignUp.vue')
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'read',
        name: 'Read',
        component: () => import('@/views/Read.vue')
      },
      {
        path: 'commentary',
        name: 'Commentary',
        component: () => import('@/views/Commentary.vue')
      },
      {
        path: 'plans',
        name: 'Plans',
        component: () => import('@/views/Plans.vue')
      },
      {
        path: 'more',
        name: 'More',
        component: () => import('@/views/More.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useFirebaseAuth();
  
  if(to.name !== 'SignIn' && to.name !== 'SignUp' && !isAuthenticated.value) next({ name: 'SignIn' })
  else next();
})

export default router
