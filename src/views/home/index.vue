<template>
    <div id="home">
        <div v-if="!showLoading">
            <Header></Header>
            <!--轮播图-->
            <Swiper :sowing_list="sowing_list"/>
            <Nav :nav_list="nav_list"></Nav>
            <FlashSale :flash_sale_product_list="flash_sale_product_list"></FlashSale>
            <!--猜你喜欢-->
            <YouLike :you_like_product_list="you_like_product_list"/>
            <!--返回顶部-->
            <MarkPage v-if="showBackStatus" :scrollToTop="scrollToTop"/>
        </div>
        <van-loading size="24px" type="spinner" vertical color="#1989fa"
                     style="position: absolute;left: 50%;top: 40%;transform: translate(-50%,-50%);"
                     v-else>拼命加载中...</van-loading>
    </div>
</template>

<script>
import Header from  "./components/header"
import Swiper from  "./components/swiper"
import Nav from  "./components/nav"
import FlashSale from "./components/FlashSale"
import  YouLike from "./components/YouLike"
import  MarkPage from "./components/MarkPage"
import {getHomeData}  from "@/service/api/index.js";
// 3. 引入处理返回顶部的函数
import {showBack, animate} from "@/config/global";


// 4. 引入通知插件
import PubSub from 'pubsub-js';
import { Toast } from 'vant';
// 5. 引入vuex
import {mapMutations, mapState} from 'vuex'
    export default {
        data() {
            return {
                // 首页的轮播图数据
                sowing_list:[],
                // 是否显示加载图标
                showLoading:true,
                nav_list:[],
                flash_sale_product_list:[],
                you_like_product_list:[],
                showBackStatus: false
            };
        },
        watch: {

        },
         created(){
             this.reqData()
        },
        mounted(){
            // 订阅消息（添加到购物车的消息）
            PubSub.subscribe('homeAddToCart', (msg, goods)=>{
                if(msg === 'homeAddToCart'){
                    this.ADD_GOODS({
                        goodsId: goods.id,
                        goodsName: goods.name,
                        smallImage: goods.small_image,
                        goodsPrice: goods.price
                    });
                    // 提示用户
                    Toast({
                        message: '添加到购物车成功！',
                        duration: 800
                    });
                    // 判断用户是否登录
                    // if(this.userInfo.token){ // 已经登录
                    //     this.dealGoodsAdd(goods)
                    // }else { // 没有登录
                    //     this.$router.push('/login');
                    // }


                }
            });
        },
        components:{
            Header,
            Swiper,
            FlashSale,
            YouLike,
            Nav,
            MarkPage
        },
        methods: {
            ...mapMutations(["ADD_GOODS"]),
            async reqData() {
                let res = await getHomeData();
                // console.log(res);
                if(res.success){
                    this.sowing_list = res.data.list[0].icon_list;
                    this.showLoading = false;
                    this.nav_list = res.data.list[2].icon_list;
                    this.flash_sale_product_list = res.data.list[3].product_list;
                    this.you_like_product_list = res.data.list[12].product_list;
                    showBack((status)=>{
                        this.showBackStatus = status;
                    });
                }
            },
            // 1. 滚回顶部
            scrollToTop() {
                // 做缓动动画返回顶部
                let docB = document.documentElement || document.body;
                animate(docB, {scrollTop: '0'}, 400, 'ease-out');
            },

        }


    }
</script>

<style lang="less" scoped>
    #home {
        width: 100%;
        height: 300rem;
        background-color: #f5f5f5;
    }
</style>
