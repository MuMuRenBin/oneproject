//这是入口文件
import Vue from 'vue';

//导入MUI样式
import './lib/mui/mui-master/dist/css/mui.min.css'

//按需导入mint-ui组件
import {Header} from 'mint-ui';
Vue.component(Header.name,Header);

//导入根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app)
})