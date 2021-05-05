import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import './assets/tailwind.css'

import axios from 'axios'


axios.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        if (
            error.response.status === 401 &&
            error.response.data.hasOwnProperty.call("detail") &&
            (error.response.data.detail === "Signature has expired." ||
                error.response.data.detail === "Invalid signature." ||
                error.response.data.detail === "Error decoding signature.")
        ) {
            store.dispatch("logout");
            router.push("/login");
        }

        return Promise.reject(error);
    }
);

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

const token = localStorage.getItem('token')
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

if (token) {
    store.dispatch('getProfile_actions')
}