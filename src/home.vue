<template>
  <div id="home">
    <van-nav-bar :title="title" right-text="分享" @click-right="showShare = true" />
    <van-pull-refresh
      class="container"
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <div class="content">
        <!-- 显示容器 -->
        <router-view></router-view>
      </div>
    </van-pull-refresh>

    <div class="footer">
      <van-tabbar v-model="active">
        <router-link v-for="item in routes" :key="item.id" :to="{path:item.path}">
          <van-tabbar-item  :icon="item.icon">
              {{ item.alias }}
          </van-tabbar-item>
        </router-link>
      </van-tabbar>
    </div>
  </div>
</template>
<script>

import List from "./client/list";
import { Toast } from "vant";
export default {
  name: "home",
  components: { List },
  data() {
    return {
      list:[],
      routes: this.$router.options.routes[0].children,
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
      active: 0,
      isLoading: false,
      title: "商品列表",
    };
  },
  mounted(){
  },
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    onRefresh() {
      setTimeout(() => {
        Toast.success("刷新成功");
        this.isLoading = false;
        // this.getGoodsList();
      }, 1000);
    },
    onClickLeft() {
      Toast("返回");
    },
  },
  // 可以监听vue组件中的props、data函数、当前路由中的变量等
  watch: {
    // watch中 给一个变量加 '' ，则说明是精确监听
    '$route.path': function (newVal, oldVal) {
      switch(newVal){
        case '/active':
          this.title = '限时活动';
          break;
        case '/cart':
          this.title = '购物车';
          break;
        case '/mine':
          this.title = '个人中心';
          break;
        default:
          this.title = '商品列表';
      }
    },
    // 深度监听 ，如果一个变量监听不到，应该开启deep深度监听
    // deep:true,
    // 立即开始监听
    immediate: true
  },
};
</script>
<style lang="less">
.van-tabbar--fixed {
  position: none;
  height: 0.6rem;
  border-top: 1px solid #ccc;
}
.van-nav-bar {
  height: 0.6rem;
  border-bottom: 1px solid #ccc;
}
#home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  .container {
    font-size: 20px;
    line-height: 30px;
    width: 100%;
    flex: 1;
    overflow-y: auto;
    padding: 0.1rem;
    padding-bottom: 0;
    .content {
      width: 100%;
      height: 100%;
    }
  }
  .footer {
    width: 100%;
    height: 0.7rem;
    .van-tabbar{
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-flow: row nowrap;
    }
  }
}
</style>
