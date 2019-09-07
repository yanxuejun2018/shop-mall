import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './plugins/vant.js'
// 1. 引入fastClick
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
// 2. 引入全局的样式
import '@/style/common.less'

// 4. 引入rem
import '@/config/rem.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
