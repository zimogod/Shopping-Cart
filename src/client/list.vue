<template>
  <div class="list">
    <van-card
      v-for="item in list"
      :key="item.id"
      :price="item.price"
      :desc="item.info"
      :title="item.goodname"
      :thumb="item.goodimg"
    >
      <template #bottom>
        <van-button type="danger" size="mini" @click="GOODS_LIST(item)" round>添加购物车</van-button>
      </template>
    </van-card>
  </div>
</template>
<script>
import { listObj } from "../server";
import { mapActions } from 'vuex';
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
