import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  goodsList:[]
}
const mutations = {
  // 添加购物车
    goodsList(state,goodsInfo){  
      let record = state.goodsList.find(n => n.id == goodsInfo.id);
      // 如果不存在当前商品，push商品到数组中
      if(!record){
        Vue.set(goodsInfo,'goodsNum',1);
        Vue.set(goodsInfo,'checked',false);
        state.goodsList.push(goodsInfo);
      // 存在数量加1
      }else{
        let list = state.goodsList.map(item =>{
          if(item.id == goodsInfo.id){
            item.goodsNum++;
          }
          return item;
        })
        // 全局 手动添加购物车  把数据全部变成响应式数据
        Vue.set(state,'goodsList',list)
      }   
    },
    // 清空购物车  同步清空
    clearShopCar(state){
      state.goodsList = [];
    },
}
const actions = {
    GOODS_LIST({commit},goodsInfo){
      commit('goodsList',goodsInfo);
    },
    // 清空购物车 异步清空
    CLEARSHOPCAR({commit}){
      commit('clearShopCar');
    }
}
const getters = {
  totalNums(state){
    let num = 0;
    state.goodsList.forEach(item => {
      num += item.goodsNum;
    });
    return num;
  },
  // 计算总价：
  getTotalMoney(state){
    let money = 0;
    state.goodsList.forEach(item =>{
      // 选择的商品才计算价格
      if(item.checked){
        money += Number(item.price) * Number(item.goodsNum);
      }
    })
    // 总价格 
    return money;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
