<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsinfo.date}}</span>
            <span>作者：{{newsinfo.author_name}}</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.url"></div>
    </div>
</template>


<script>
import {Toast} from "mint-ui";
// import comment from "../subcomponents/comment.vue"
export default {
    data() {
        return {
            id:this.$route.params.id,
            newsinfo:{},
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo(){
            this.$http.get("../../../static/news.json")
            .then(res=>{
                if (res.body.error_code===0) {
                    this.newsinfo=res.body.result.data.find(element => {
                        if(this.id===element.uniquekey)return element;
                    });
                    console.log(this.newsinfo)
                    console.log(this)
                    Toast("请求数据成功！")
                }else{
                    Toast("新闻数据获取失败！")
                }
            })
        }
    },
    components:{
        // 'comment-box':comment,
    }
}
</script>


<style lang="scss" scoped>
    .newsinfo-container{
        padding:0 5px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            color:skyblue;
        }
        .content{
            img{width: 100%;}
        }
    }
</style>
