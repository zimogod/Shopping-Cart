<template>
  <div class="bbb" v-if="$slots.default">
      <div>
          <slot></slot>
      </div>
  </div>
</template>
<script>

export default {
  name: "bbb",
  data() {
    return {
      
    };
  },
  mounted(){
      console.log(this.$slots.default,'===')
  }
};
</script>
<style lang="less">
.bbb{
    width: 100%;
    height: 100%;
}
</style>
