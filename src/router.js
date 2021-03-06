import VueRouter from 'vue-router';

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import Message from './components/subcomponents/comment.vue'
import PhotoList from './components/photo/PhotoList.vue'
import GoodsList from './components/goods/GoodsList.vue'

const router = new VueRouter({
    routes:[//配置路由规则的
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newslist/:id',component:NewsInfo},
        {path:'/home/message',component:Message},
        {path:'/home/photolist',component:PhotoList},
        {path:'/home/goods',component:GoodsList},
    ],
    linkActiveClass:'mui-active'//覆盖默认的路由高亮的类，默认的类叫router-link-active
})

export default router