import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import VueCarousel from 'vue-carousel'
import VueBus from 'vue-bus'
import VueTheMask from 'vue-the-mask'

Vue.use(VueBus)
Vue.use(VueCarousel)
Vue.use(VModal, {
  dialog: true,
  dynamic: true,
  dynamicDefaults: { clickToClose: false }
})
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
