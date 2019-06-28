import Vue from 'vue'
import App from './App.vue'

// /router/index.js 에서 export한 router 변수를 임포트한다.
import { router } from './routes/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
