import {
    ADD_GOODS,
    INIT_SHOP_CART,
    REDUCE_CART,
    SELECTED_SINGER_GOODS,
    SELECTED_All_GOODS,
    CLEAR_CART,
    USER_INFO,
    INIT_USER_INFO,
    RESET_USER_INFO
} from './mutations-type'

import Vue from 'vue'

export default {
// 1. 往购物车中添加数据
    [ADD_GOODS](state, {goodsId, goodsName, smallImage, goodsPrice}){
        let shopCart = state.shopCart;
        // 1.1 判断商品是否存在
        if(shopCart[goodsId]){ // 存在
            shopCart[goodsId]['num']++;
        }else { // 不存在
            shopCart[goodsId] = {
                "num": 1,
                "id": goodsId,
                "name": goodsName,
                "small_image": smallImage,
                "price": goodsPrice,
                "checked": true
            }
        }
        // 1.2  产生新对象
        state.shopCart = {...shopCart};
    }
}
