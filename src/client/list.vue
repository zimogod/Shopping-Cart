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
        <van-button type="danger" size="mini" round>添加购物车</van-button>
      </template>
    </van-card>
  </div>
</template>
<script>

export default {
  name: "list",
  props:{
    list:{
      type:Array,
      default:() => []
    }
  },
  data() {
    return {
      // list: [],
    };
  },
  methods: {
    
  },
  mounted() {
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
