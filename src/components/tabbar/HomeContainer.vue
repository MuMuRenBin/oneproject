<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item, index) in lunbotulist" :key="index">
                <img :src="item.img" alt="" srcset="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <img src="../../images/menu1.png" alt="" srcset="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src="../../images/menu2.png" alt="" srcset="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goods">
                <img src="../../images/menu3.png" alt="" srcset="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/message">
                <img src="../../images/menu4.png" alt="" srcset="">
                <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../../images/menu5.png" alt="" srcset="">
                <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../../images/menu6.png" alt="" srcset="">
                <div class="mui-media-body">联系我们</div></router-link></li>
        </ul> 
    </div>
</template>


<script>
export default {
    data(){
        return {
            lunbotulist:[],
        }
    },
    created() {
        this.getLunbotu()
    },
    methods:{
        getLunbotu(){//获取轮播图数据的方法
            this.$http.get('../../../static/lunbotu.json').then(result=>{
                if (result.body.status===0) {
                    this.lunbotulist=result.body.message;
                }
            })
            .catch(err=>{console.log(err);})
        }
    }
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: red
            }
            img{
                width: 100%;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        img{
            width: 60px;
            height: 60px;
        }
        .mui-media-body{
            font-size: 13px;
        }
    }
</style>
