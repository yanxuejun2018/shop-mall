<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active" active-color="#75a342">
            <van-tabbar-item replace to="/home">
                <span>首页</span>
                <img slot="icon" slot-scope="props" :src="props.active ? home_icon.active : home_icon.normal">
            </van-tabbar-item>
            <van-tabbar-item replace to="/category">
                <span>分类</span>
                <img slot="icon" slot-scope="props" :src="props.active ? category_icon.active : category_icon.normal">
            </van-tabbar-item>
            <van-tabbar-item replace to="/cart">
                <span>购物车</span>
                <img slot="icon" slot-scope="props" :src="props.active ? cart_icon.active : cart_icon.normal">
            </van-tabbar-item>
            <van-tabbar-item replace to="/mine">
                <span>我的</span>
                <img slot="icon" slot-scope="props" :src="props.active ? mine_icon.active : mine_icon.normal">
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                active:0,
                home_icon: {
                    normal: require('@/images/tabbar/home_default.png'),
                    active: require('@/images/tabbar/home_selected.png')
                },
                category_icon: {
                    normal: require('@/images/tabbar/category_default.png'),
                    active: require('@/images/tabbar/category_selected.png')
                },
                cart_icon: {
                    normal: require('@/images/tabbar/shoppingcart_default.png'),
                    active: require('@/images/tabbar/shoppingcart_selected.png')
                },
                mine_icon: {
                    normal: require('@/images/tabbar/mine_default.png'),
                    active: require('@/images/tabbar/mine_selected.png')
                }
            }
        }
    }
</script>

<style scoped>

</style>
