<template>
    <div>
        <!-- <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                </div>
            </div>

        </div> -->
    </div>
</template>

<script>
// 1.导入mui的js文件
// import mui from '../../lib/mui/mui-master/examples/hello-mui/js/mui.min.js'
import {Toast} from "mint-ui";
export default {
    data() {
        return {
            
            }
    },
    created() {
        // this.getAllPhotos();
    },
    methods: {
        getAllPhotos(){
            
        }    
    },
    mounted() {//当组建中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数
        // 2.初始化滑动控件
        // mui('.mui-scroll-wrapper').scroll({
        //     deceleration:0.0005 // flick 减速系数，系数越大，滚动速度越慢，滚动距离越小 默认值0.0006
        // })
        
    },
}
</script>

<style lang="scss" scoped>
    // *{
    //     touch-action: pan-y;
    // }
</style>