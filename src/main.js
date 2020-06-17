import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  // data: {
  //   nomTest: "arnaud"
  // },
  render: h => h(App)
}).$mount('#app')
