import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import PrimeVue from 'primevue/config'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(PrimeVue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
