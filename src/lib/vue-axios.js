import axios from 'axios';
// import Vue from 'vue';
import {
    Message
} from 'element-ui';

// 设置基地址
axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";

// 设置axios拦截器
// 发出请求之前的拦截器
axios.interceptors.request.use(config => {
    // 在请求之前先做一些事情，比如在请求头中携带token
    // 判断是否为登录地址
    if (config.url.indexOf('/login') !== -1) {
        // 登录接口，不用带token
    } else {
        // 不是登录地址，设置请求头
        config.headers.Authorization = window.sessionStorage.getItem("token");
    }
    return config;
}, error => {
    // 请求出错
    return Promise.reject(error);
});
// 获取相应以后的拦截器
axios.interceptors.response.use(response => {
    // 相应回来之后做一些事情
    if (response.data.meta.status == 200) {
        Message.success(response.data.meta.msg);
    } else if (response.data.meta.status == 400) {
        Message.error(response.data.meta.msg);
    }
    return response;
}, error => {
    // 相应出错
    return Promise.reject(error);
});

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