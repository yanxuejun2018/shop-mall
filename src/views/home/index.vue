<template>
    <div id="home">
        <Header></Header>
        <!--轮播图-->
        <Swiper :sowing_list="sowing_list"/>
    </div>
</template>

<script>
import Header from  "./components/header"
import Swiper from  "./components/swiper"
import Nav from  "./components/nav"
import {getHomeData}  from "@/service/api/index.js";
    export default {
        data() {
            return {
                // 首页的轮播图数据
                sowing_list:[]
            };
        },
         created(){
          this.reqData();

        },
        components:{
            Header,
            Swiper
        },
        methods: {
            async reqData() {
                let res = await getHomeData();
                // console.log(res);
                if(res.success){
                    this.sowing_list = res.data.list[0].icon_list;
                    // this.nav_list = res.data.list[2].icon_list;
                    // this.flash_sale_product_list = res.data.list[3].product_list;
                    // this.you_like_product_list = res.data.list[12].product_list;

                }
            }

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
