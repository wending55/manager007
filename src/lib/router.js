// 导入vue
import Vue from 'vue';
// 引入路由
import VueRouter from 'vue-router';
// 注册插件
Vue.use(VueRouter);
// 导入路由组件地址
import login from '../components/login.vue';
import main from '../components/main.vue';

// 写路由规则
const routes = [{
  // 登录页
  path: '/login',
  component: login
},
  // 主页
  {
    path: '/',
    component: main
  }
];

// 实例化路由对象
const router = new VueRouter({
  routes
});

// 暴露出去
export default router;