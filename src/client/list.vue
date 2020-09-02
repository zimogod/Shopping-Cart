<template>
  <div class="list">
   <router-link v-for="item in list" :to="`/detail/${item.id}`"  :key="item.id">
      <van-card
        :price="item.price"
        :desc="item.info"
        :title="item.goodname"
        :thumb="item.goodimg"
      >
        <template #bottom>
          <van-button type="danger" size="mini" @click="GOODS_LIST(item)" round>添加购物车</van-button>
        </template>
    </van-card>
   </router-link>
  </div>
</template>
<script>
import { listObj } from "../server";
import { mapActions } from 'vuex';
import bus from '../eventbus';
export default {
  name: "list",
  data() {
    return {
      // 响应式数据  vue能监听、跟踪到变化
      list: [],
    };
  },
  methods: {
    ...mapActions(['GOODS_LIST']),
    getGoodsList() {
      listObj.goodsList().then((res) => {
        res.forEach((item) => {
          item.price = item.price + ".00";
        });
        this.list = res;
      });
    },
    // changeToDetails(){

    // }
  },
  destroyed(){
    bus.$emit('send',this.list);
  },
  mounted() {
    this.getGoodsList();
  },
};
</script>
<style lang="less">
.list {
  width: 100%;
  height: 100%;
  .van-card__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.26rem;
  }
  .van-card__content{
    justify-content: space-around;
  }
}
</style>
