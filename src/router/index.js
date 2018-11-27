import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Patient from '@/components/Patient'
import Doctor from '@/components/Doctor'
import Pharmacy from '@/components/Pharmacy'
import Drug from '@/components/Drug'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login',
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/patient',
      name: 'patient',
      component: Patient
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: Doctor
    },
    {
      path: '/pharmacist',
      name: 'pharmacy',
      component: Pharmacy
    },
  ]
})
