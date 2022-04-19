import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../View/Dashboard.vue'
import forgotpassword from '../View/ForgotPassword.vue'
import login from '../View/Login.vue'
import register from '../View/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: {}
    },
    {
      path: '/login',
      name: 'login',
      component: login,
     
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: forgotpassword,
     
    },
    {
      path: '/register',
      name: 'register',
      component: register,
     
    },



    
  ]
})