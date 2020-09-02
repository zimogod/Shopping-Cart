<template>
  <div class="detail">
    <div v-for="(item,index) in list" :key="index">
      <img :src="item.goodimg" />
      <div>{{ item.id }}</div>
      <div>{{ item.goodname }}</div>
      <div>{{ item.info }}</div>
      <div>{{ item.price }}</div>
    </div> 
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { listObj } from '../server'
import bus from '../eventbus';
export default {
  name: "detail",
  data() {
    return {
      param:this.$route.params.id,// 获取当前路径内的params
      list:[], // 过滤的当前商品详情数据
      goodslist:[] //全部商品数据
    };
  },
  methods:{
    showGoodsItem(){
      let list = this.goodslist.filter(item => item.id == this.param);
      this.list = list;
    }
  },
  created(){
    bus.$off('send');
    bus.$on('send',val =>{
      this.goodslist = val;
    })
  },
  mounted(){
    this.showGoodsItem();
  },
};
</script>
<style lang="less">
.detail{
    width: 100%;
    height: 100%;
}
</style>
