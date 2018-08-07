import Vue from '../node_modules/vue/dist/vue'
import VueRouter from '../node_modules/vue-router/dist/vue-router'
import loginForm from './js/login'
import registerForm from './js/register'
import './css/base.css'

Vue.use(VueRouter);  //开启组件

const router = new VueRouter({
    routes:[
        {path:"/login",component:loginForm},
        {path:"/register",component:registerForm}
    ]
})

let vm=new Vue({
    el:"#app",
    data:{},
    router
})