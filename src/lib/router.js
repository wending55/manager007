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

// 注册导航守卫
// 在页面进行跳转的时候，没都要判断登录状态的话比较麻烦，导航守卫就是在跳转之前，
// 先判断你是否在登录状态，如果是就跳到目标页面，如果不是就打回登录页
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    let token = window.sessionStorage.getItem("token");
    if (token) {
      // 已经登录成功，可以继续访问
      next();
    } else {
      Vue.prototype.$message.error("请先登录");
      // this.$router.push("login");
      next("/login");
    }
  }
});

// 暴露出去
export default router;