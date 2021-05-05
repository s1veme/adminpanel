import { createRouter, createWebHistory } from 'vue-router'
import store from './vuex/store'


const routes = [
    {
        path: '/',
        component: () => import('./views/v-panel'),
        name: 'admin-panel',
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        component: () => import('./views/v-login'),
        name: 'login',
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/registration',
        component: () => import('./views/v-registration'),
        name: 'registration',
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/user/:username',
        component: () => import('./components/account-items/v-account'),
        name: 'userInfo',
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/add-product',
        component: () => import('./views/actions/v-add-product'),
        meta: {
            requiresAuth: true,
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router
