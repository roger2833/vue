import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

sync(store, router)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
