//这是入口文件
import Vue from 'vue';

//引入axios
// import axios from 'axios'
//将 axios 改写为 Vue 的原型属性
// Vue.prototype.$axios=axios

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

// import $ from 'jquery'

//1.1导入路由包
import VueRouter from 'vue-router';
//1.2安装路由
Vue.use(VueRouter);

//2.1导入vue-resource
import VueResource from 'vue-resource';
//2.2安装vue-resource
Vue.use(VueResource);
//设置请求的根路径
// Vue.http.options.root = 'https://api.apiopen.top';
//全局设置post时候表单数据格式组织形式 application/x-www-form-urlencoded
// Vue.http.options.emulateJSON = true;
//导入MUI样式
import './lib/mui/mui-master/dist/css/mui.min.css'
import './lib/mui/mui-master/examples/hello-mui/css/icons-extra.css'


//按需导入mint-ui组件
import {Header,Swipe, SwipeItem,Button} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

//1.3导入自己的router.js路由模块
import router from './router';

//导入根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router//挂载路由对象到VM实例上
})