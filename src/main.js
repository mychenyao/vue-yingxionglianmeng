// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);
Vue.config.productionTip = false
// import VIscroll from 'viscroll';
// Vue.use(VIscroll, {
//     mouseWheel: true,
//     click: true,
//     preventDefault: true,
//     tap: false,
//     bounce: false,
//     disableTouch: true
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  // render:h => h(App)
  components: { App }
})
