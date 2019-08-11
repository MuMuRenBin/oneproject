<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容，最多120字" v-model="msg" cols="30" rows="10" maxlength="120"></textarea>
        <mt-button type='primary' size='large' @click="postMessage">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, index) in cmts" :key="index">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户：{{item.nickName}}&nbsp;&nbsp;发表时间：{{item.time}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                    <br/><img :src="item.avatarurl">
                </div>
            </div>
        </div>

        <mt-button type='primary' size='large' @click="getMore">加载更多</mt-button>

    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            pageIndex:1,
            cmts:[],
            msg:'',
        }
    },
    created() {
        this.getComments();
    },
    methods: {
        getComments(){
            this.$http.get('../../../static/cmts.json')
            .then((result) => {
                this.cmts=result.body.cmts
                console.log(this.cmts);
            }).catch((err) => {
                Toast(err)
            });
            // this.$jsonp('http://m.maoyan.com/mmdb/comments/movie/248566.json',
            // {_v_:'yes',offset:this.pageIndex})
            // .then((result) => {
            //     Toast('获取评论数据成功')
            //     console.log(result.body);
            //     this.cmts = this.cmts.concat(result.body.cmts)
            // }).catch((err) => {
            //     Toast('获取评论数据失败！')
            //     console.log(err);
            // });
        },
        getMore(){
            this.pageIndex++;
            this.getComments
        },
        postMessage(){
            //校验是否为空
            if (this.msg.trim().length===0) {
                return Toast('评论内容不能为空！')
            }
            console.log(this.msg.trim());
            /**
             * 参数1：请求的URL地址
             * 参数2：提交给服务器的数据对象{content：this.msg}
             * 参数3：定义提交的时候，表单中数据的格式{emulateJSON:true}
            */
            this.$http.post('',{content:this.msg.trim()})
            .then((result) => {
                console.log(result.body)
                let cmt = {
                    username:'匿名用户',
                    addtime:Date.now(),
                    content:this.msg.trim()
                };
                this.cmts.unshift(cmt);
                this.msg = '';
            }).catch((err) => {
                
            });

        }

    },
}
</script>

<style lang="scss" scope>
    .cmt-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
                margin: 10px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    background-color: #ccc;
                    line-height: 30px;
                }
                .cmt-body{
                    text-indent: 2em;
                    line-height: 35px;
                }
                img{
                    width: 50%;
                }
            }
        }
    }
</style>