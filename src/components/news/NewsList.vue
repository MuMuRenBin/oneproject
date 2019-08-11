<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.uniquekey">
                <a :href="item.url">
                    <img class="mui-media-object mui-pull-left" :src="item.thumbnail_pic_s">
                    <div class="mui-media-body">
                        <h5>{{item.title}}</h5>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{item.date}}</span>
                            <span>{{item.author_name}}</span>
                        </p>
                    </div>
                </a>
                <!-- <router-link :to="'/home/newslist/'+item.uniquekey">
                    <img class="mui-media-object mui-pull-left" :src="item.thumbnail_pic_s">
                    <div class="mui-media-body">
                        <h5>{{item.title}}</h5>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{item.date}}</span>
                            <span>{{item.author_name}}</span>
                        </p>
                    </div>
                </router-link> -->
            </li>
        </ul>
    </div>
</template>

<script>
import {Toast} from "mint-ui";
import $ from 'jquery'
export default {
    data() {
        return {
            newsList:[],
        }
    },
    created() {
        this.getNewList();
    },
    methods: {
        getNewList(){//获取新闻列表
            this.$http.get("../../../static/news.json")
            .then(res=>{console.log(res);
                if (res.body.error_code===0) {
                    console.log(this)
                    this.newsList=res.body.result.data;
                    Toast("请求数据成功！")
                }else{
                    Toast("新闻数据获取失败！")
                }
            })
            // var self = this;
            // $.ajax({
            //     url:'http://v.juhe.cn/toutiao/index',
            //     type:'GET',
            //     dataType:'jsonp',
            //     data:{
            //         type:'top',
            //         key:'26c82b3adfbc3511740c550242e00c56'
            //     },
            //     success: function(res) {
            //         self.newsList = res.result.data
            //         console.log(res)
            //     },
            //     error:function(d,textStatus, errorThrown){
            //         Toast('新闻数据请求失败了')
            //         console.log(d.status,d.readyState,d.responseText,textStatus, errorThrown)
            //     }
            // })
        }
    },
}
</script>

<style lang="scss" scoped>
    .mui-media-body{
        h5{
            font-size: 14px;
            font-weight: 600;
            color: black;
        }
        .mui-ellipsis{
            display: flex;
            justify-content: space-between;
        }
    }
</style>
