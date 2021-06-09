import Vue from 'vue'
import VueRouter from 'vue-router'
import A from '../components/Mesures/A.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/a',
    name: 'All Mesures',
    component: A
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
export const server = {addr: "192.168.137.11:8080", protocol: 'http'}
export function url(uri) {
  return `${server.protocol}://${server.addr}/${uri}`;
}
