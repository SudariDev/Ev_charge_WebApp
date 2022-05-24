import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../View/Dashboard.vue'
import charge from '../View/charge.vue'
import chargeStop from '../View/chargeStop.vue'
import Profile from '../View/Profile.vue'
import Map from '../View/GoogleMaps.vue'
import Payment from '../View/Payment.vue'
import Report from '../View/Report/ReportView.vue'
import Home from '../View/Home.vue'



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
      path: '/charge',
      name: 'charge',
      component: charge,
      props: {}
    },

    {
      path: '/chargeStop',
      name: 'chargeStop',
      component: chargeStop,
      props: {}
    },

    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      props: {}
    },


    {
      path: '/Map',
      name: 'Map',
      component: Map,
      props: {}
    },


    {
      path: '/Payment',
      name: 'Payment',
      component: Payment,
      props: {}
    },
    
    {
      path: '/Report',
      name: 'Report',
      component: Report,
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

    {
      path: '/Home',
      name: 'Home',
      component: Home,
     
    },

 


    
  ]
})