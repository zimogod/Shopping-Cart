<template>
  <div class="list">
    <home></home>
    <home1></home1>
    <home2></home2>
     <home3></home3>
     ---
    <comA :arr="arr" a="10" b="20" c="30"></comA>
    <comB>
      <div>{{ num }}</div>
      <span>{{ num }}</span>
      <p>{{ num }}</p>
    </comB>
    <van-card 
      v-for="item in list"
      :key="item.id"
      :price="item.price"
      :desc="item.info"
      :title="item.goodname"
      :thumb="item.goodimg"
      @click-thumb="goToDetails(item)"
      @click="GOTODETAILS(item)"
    >
      <template #bottom>
        <van-button type="danger" size="mini" @click="GOODS_LIST(item)" round>添加购物车</van-button>
      </template>
    </van-card>
  </div>
</template>
<script>
import { listObj } from "../server";
import { mapActions } from "vuex";
import comA from './aaa';
import comB from './bbb';
// import bus from "../eventbus";
export default {
  name: "list",
  components:{comA,comB},
  data() {
    return {
      // 响应式数据  vue能监听、跟踪到变化
      list: [],
      arr:[3,5,6],
      num:'花花'
    };
  },
  methods: {
    ggg(v){
      console.log(v)
    },
    ...mapActions(["GOODS_LIST", "GOTODETAILS"]),
    async getGoodsList() {
     await listObj.goodsList().then((res) => {
        res.forEach((item) => {
          item.price = item.price + ".00";
        });
        this.list = res;
      });
    },
    goToDetails(item) {
      this.$router.push({
        name: "detail",
        params: {
          id:item.id
        },
      });
    },
  },
  created(){
    this.$nextTick(() =>{
      // 可以直接操作DOM元素
      // console.log(this.$refs.zimo.innerHTML,'666')
    })
  },
  mounted() {
    // console.log(this.$refs.zimo)
    this.getGoodsList();
    // 强制更新
    // this.$forceUpdate()
    console.log(document.getElementsByClassName('list')[0],'111')
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
  .van-card__content {
    justify-content: space-around;
  }
}
</style>


