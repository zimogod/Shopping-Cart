<template>
  <div class="cart">
    <function-nal :goods="goods" a='10' b="20" c = "30"></function-nal>
    <div v-if="goodsList.length > 0">
      <div class="shop_car_main_top">
        <!-- 全选 -->
        <div>
          <van-checkbox
            v-model="allChecked"
            @click="checkAll"
            checked-color="#ee0a24"
            >全选</van-checkbox
          >
        </div>
        <!-- 清空购物车 -->
        <div>
          <van-button type="danger" @click="CLEARSHOPCAR" size="mini"
            >清空购物车</van-button
          >
        </div>
      </div>
      <!-- 已加入购物车的商品 -->
      <div class="cart-content" v-for="(item, index) in goodsList" :key="index">
        <van-checkbox
          v-model="item.checked"
          :value="item.id"
          @click="chooseChange(item.id)"
          checked-color="#ee0a24"
        ></van-checkbox>
        <van-card
          :price="item.price"
          :desc="item.info"
          :title="item.goodname"
          :thumb="item.goodimg"
        >
          <template #bottom>
            <van-button type="danger" size="mini">一</van-button>
            <div>{{ item.goodsNum }}</div>
            <van-button type="danger" size="mini">十</van-button>
          </template>
        </van-card>
      </div>
      <!-- 总价，计算 -->
      <div class="submit_money">
        <van-submit-bar :price="getTotalMoney*100" button-text="提交订单">
          <van-checkbox
            v-model="allChecked"
            @click="checkAll"
            checked-color="#ee0a24"
            >全选</van-checkbox
          >
        </van-submit-bar>
      </div>
    </div>
    <div v-else class="no-goods-car">
      <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="购物车空空如也"
      />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState, mapActions, mapGetters } from "vuex";
import functionNal from './functional'
export default {
  name: "cart",
  components:{functionNal},
  data() {
    return {
      goods:[4,5,6,7,8,9],
      allChecked: false,
      checkData: [], // 存ID  为了 和 goodsList做对比
    };
  },
  computed: {
    ...mapState(["goodsList"]),
    ...mapGetters(["getTotalMoney"]),
  },
  methods: {
    ...mapActions(["CLEARSHOPCAR"]),
    //全选、反选实现
    checkAll() {
      this.goodsList.forEach((item) => {
        // 每一个商品都选择了之后，allChecked也根据每个商品的变化而变化
        item.checked = this.allChecked;
      });
    },
    // 单独的复选框
    // 思路：我每点击选择一个商品，把当前商品的ID存储到一个数组里面 【商品的ID不能重复】 
    chooseChange(id) {
      // 如果有当前商品，则删除
      if (this.checkData.indexOf(id) > -1) {
        this.remove(this.checkData, id);
      } else {
        // 添加当前商品ID
        this.checkData.push(id);
      }
      console.log(this.checkData)
      // 判断单选和全选的关系,如果ID的数字组的length<商品数组的length，则说明还有某个商品的checked为false
      // [2,3] == [{},{}]
      if (this.checkData.length < this.goodsList.length) {
        // 全部不能为true
        this.allChecked = false;
      } else {
        // allChecked 为true
        this.allChecked = true;
      }
    },
    //数组删除
    remove(arr, val) {
      var index = arr.indexOf(val);
      if (index > -1) {
        arr.splice(index, 1);
      }
    },
  }
};
</script>

<style lang="less">
.cart {
  width: 100%;
  height: 100%;
  margin-bottom: 0.6rem;
  .van-checkbox {
    font-size: 16px;
  }
  .cart-content {
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
    align-items: center;
    background-color: #fafafa;
    margin-bottom: 0.1rem;
    .van-card {
      // flex:1;
      padding: 0.1rem;
      padding-left: 0.04rem;
      width: 94%;
      .van-button--mini {
        width: 0.23rem;
        height: 0.23rem;
      }
      .van-card__bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 0.26rem;
      }
    }
  }

  .custom-image .van-empty__image {
    width: 2rem;
    height: 2rem;
  }
  .van-empty__description {
    text-align: center;
    padding-top: 0.4rem;
    font-size: 0.2rem;
  }
  .van-submit-bar {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .shop_car_top {
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(51, 51, 51, 1);
    font-size: 18px;
    font-family: Microsoft Yahei;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
  }
  .shop_car_top_span {
    position: absolute;
    right: 20px;
    left: 290px;
    color: rgba(153, 153, 153, 1);
    font-size: 15px;
    font-family: PingFangSC-regular;
  }
  .car_img2 {
    width: 0.9rem;
    height: 100%;
  }
  .shop_car_main_top {
    padding-bottom: 0.06rem;
    margin-bottom: 0.08rem;
    display: flex;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    align-items: center;
  }
  .submit_money {
    width: 100%;
    height: 0.49rem;
    position: fixed;
    bottom: 0.66rem;
    border-top: 2px solid #ccc;
    box-sizing: content-box;
    left: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span:nth-of-type(2) {
      margin-right: 0.2rem;
    }
  }
}
</style>
