<template>
  <div class="zzz">
      <!-- {{ a }}-{{ b }}-{{ c }} -->
      <!-- {{ $attrs }} -->
      <!-- <defineds></defineds> -->
      <div>{{good}}</div>
      <div>{{ num | zimogod | mine }}</div>
      <div>{{ now | formate('==') }}</div>
      <div v-sp-dqx="color" v-zimo-ui="kg"  class="blog"></div>
  </div>
</template>
<script>
import smallZ from './xiaoz';
export default {
  name: "zzz",
  inject:['good'],
  directives:{
    spDqx(el, binding, vnode){
      // console.log(el,binding,vnode)
      el.style.backgroundColor = binding.value;
    },
    sanpaoDqx(el,binding){
      el.style.width = binding.value + 'px';
      el.style.height = binding.value + 'px';
    }
  },
  // 局部过滤器
  filters:{
    // 格式化事件戳
    formateDate(v,a){
      let years = v.getFullYear();
      let month = v.getMonth() +1;
      let day = v.getDate();
      return `${years}${a}${month}${a}${day}`;
    },
    zimogod(value){
      // toFixed：取小数
      let val = value.toFixed(2);
      return `￥${val}`;
    },
    mine(v){
      return v +  '：都是我的';
    }
  },
  components:{'defineds':smallZ},
  props:['c'],
  data() {
    return {
        color:'red',
        now:new Date(),
        num:100,
        wh:'200',
        kg:300
    };
  },
  mounted(){
    // console.log(this)
    this.$destroy();
  }
};
</script>
<style lang="less">
.zzz{
    width: 100%;
    height: 100%;
    .blog{
      width: 100px;
      height: 100px;
      background: pink;
    }
}
</style>
