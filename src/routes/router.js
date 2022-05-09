import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../View/Dashboard.vue'
import charge from '../View/charge.vue'
import chargeStop from '../View/chargeStop.vue'
import Profile from '../View/Profile.vue'
import Payment from '../View/Payment.vue'
import forgotpassword from '../View/ForgotPassword.vue'
import login from '../View/Login.vue'
import register from '../View/Register.vue'
import navbar from '../View/Navbar.vue'

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