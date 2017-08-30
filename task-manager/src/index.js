import App from './pages/app/app.vue'
import router from './router'
Vue.use(VueRouter)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})