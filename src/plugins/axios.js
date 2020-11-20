import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL= 'http://localhost:3000/'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'http://localhost:3000/'
        })
    
        // Global interceptors
        Vue.prototype.$http.interceptors.request.use(config=> {
            console.log(config.method)

            return config
        }, error => Promise.reject(e))

        Vue.prototype.$http.interceptors.response.use(config=> {
            console.log(config.status)

            return config
        }, error => Promise.reject(e))
    }
})
