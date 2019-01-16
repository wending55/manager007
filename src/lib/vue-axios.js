import axios from 'axios';

// 设置基地址
axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";

// 暴露出去 （vue中的插件）
export default {
    install(Vue) {
        Vue.prototype.$axios = axios;
    }
};

// let MyPlugin = {};
// MyPlugin.install = function (Vue) {
//     Vue.prototype = axios;
//     };
// export default MyPlugin;
  