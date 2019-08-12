<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="http://m.qpic.cn/psb?/5e74c9d7-ea0b-4cc4-a789-f234d55f72b6/cZqcuV09zRvolwR3hNuNeAUyQYuiUf37fHRcZrj*rfs!/b/dEABAAAAAAAA&bo=XgFeAV4BXgERFyA!&rf=viewer_4" alt="">
            <h1 class="title">3333</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1000</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="http://m.qpic.cn/psb?/5e74c9d7-ea0b-4cc4-a789-f234d55f72b6/cZqcuV09zRvolwR3hNuNeAUyQYuiUf37fHRcZrj*rfs!/b/dEABAAAAAAAA&bo=XgFeAV4BXgERFyA!&rf=viewer_4" alt="">
            <h1 class="title">11111</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1000</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="http://m.qpic.cn/psb?/5e74c9d7-ea0b-4cc4-a789-f234d55f72b6/cZqcuV09zRvolwR3hNuNeAUyQYuiUf37fHRcZrj*rfs!/b/dEABAAAAAAAA&bo=XgFeAV4BXgERFyA!&rf=viewer_4" alt="">
            <h1 class="title">22222</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1000</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>

<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap:wrap;
        padding: 7px;
        justify-content: space-between;

        .goods-item{
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            img{
                width: 100%;
            }
            .title{
                font-size: 14px;
            }
            .info{
                background-color: #0003;
                p{
                    margin: 0;
                    padding: 5px;
                }
                .price{
                    .now{
                        color: red;
                        font-weight: bold;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
        } 
    }
</style>