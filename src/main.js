import Vue from 'vue';
import App from './App.vue';
// 引入饿了么
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入axios
import VueAxios from './lib/vue-axios';
Vue.use(VueAxios);

Vue.config.productionTip = false;

// 导入自己抽取的路由
import router from './lib/router';
new Vue({
  render: h => h(App),
  router
}).$mount('#app');