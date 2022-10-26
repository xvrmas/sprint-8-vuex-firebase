import Vue from 'vue'
import VueRouter from 'vue-router'
import { getAuth } from "firebase/auth"


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '*',
  //   redirect: '/AuthView'
  // },
  // {
  //   path: '/ListStarships',
  //   redirect: '/AuthView'
  // },

  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/ListStarships',
    name: 'ListStarships',
    component: () => import('../views/ListStarships.vue'),
    meta: {
      autenticacion: true
    }
  },
  {
    path: '/panell',
    name: 'panell',
    component: () => import('../views/panell.vue'),
    meta: {
      autenticacion: true
    }
  },
  {
    path: '/AuthView',
    name: 'AuthView',
    component: () => import('../views/AuthView.vue')
  },
  {
    path: '/RegistView',
    name: 'RegistView',
    component: () => import('../views/RegistView.vue')
  }

]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  let usuario = auth.currentUser;
  console.log(usuario)
  let autorizacion = to.matched.some(record => record.meta.autenticacion);
  console.log(autorizacion)
  if (autorizacion && !usuario) {
    next('AuthView')
  } else if (!autorizacion && usuario) {
    next()
  } else { next(); }

});

export default router
