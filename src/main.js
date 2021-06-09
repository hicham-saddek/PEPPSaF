import Vue from 'vue'
import ApplicationLayout from './components/ApplicationLayout.vue'
import router from './router'
import store from './store'
import "tailwindcss/tailwind.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(ApplicationLayout)
}).$mount('#app')
