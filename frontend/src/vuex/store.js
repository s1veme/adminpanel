import axios from 'axios'
import { createStore } from 'vuex'

let store = createStore({
    state() {
        return {
            status: '',
            token: localStorage.getItem('token') || '',
            user: JSON.parse(localStorage.getItem('user')) || {},
            products: [],
            showLoading: true
        }
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token) {
            state.status = 'success'
            state.token = token
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
        addProdcutToState_mutations: (state, product) => {
            state.products.push(product)
        },
        addProducts_mutations: (state, products) => {
            state.products = products
        },
        setUserProfile_mutations: (state, userInfo) => {
            state.user = userInfo
        },
        loading_spinner_mutations: (state, payload) => {
            state.showLoading = payload
        }
    },
    actions: {
        getProfile_actions() {
            return new Promise((resolve, reject) => {
                axios({ url: `http://localhost:8000/api/user/profile/`, method: 'GET' })
                    .then(resp => {
                        const userInfo = JSON.stringify(resp.data)
                        localStorage.setItem('user', userInfo)
                        resolve(resp)
                    })

                    .catch(err => {
                        reject(err)
                    })
            })
        },

        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({ url: 'http://localhost:8000/api/token/', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.access
                        localStorage.setItem('token', token)
                        commit('auth_success', token)
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },

        register({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({ url: 'http://localhost:8000/api/auth/users/', data: user, method: 'POST' })
                    .then(resp => {
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },

        addProdcutInShop_actions({ commit }, product) {
            return axios('http://127.0.0.1:8000/api/shop/create/product', {
                method: 'POST',
                data: product
            })
                .then((product) => {
                    commit('addProdcutToState_mutations', product.data)
                    return product
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        },

        getProducts_actions({ commit }) {
            this.state.showLoading = true
            return axios('http://127.0.0.1:8000/api/shop/products/', {
                method: 'GET'
            })
                .then((products) => {
                    commit('addProducts_mutations', products.data)
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => (this.state.showLoading = false));
        },

        setToken_actions({ commit }, token) {
            commit('setToken_mutations', token)
        },

        getInfoUser_actions(_, username) {
            console.log(username)
            return new Promise((resolve, reject) => {
                axios({ url: `http://localhost:8000/api/user/user1`, method: 'GET' })
                    .then(resp => {
                        resolve(resp.data)
                    })
                    .catch(err => {
                        console.error(err)
                        reject(err)
                    })
            })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        isAdmin: state => state.user.is_staff,
        products: state => state.products,
        username: state => state.user.username,
        showLoading: state => state.showLoading
    }
})

export default store;