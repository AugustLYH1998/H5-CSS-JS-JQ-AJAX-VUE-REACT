<template>
  <div>
    <!-- $route.params 动态匹配参数值 -->
    <!--  {{ mid }} 为props传参 -->
    <h3>MyMovie 组件 --- {{ $route.params.mid }} --- {{ mid }}</h3>
    <button type="button" class="btn btn-danger" @click="goBack">后退</button>
  </div>
</template>

<script>
export default {
  name: 'MyMovie',
  // {{ mid }} 为props传参
  props: ['mid'],
  methods: {
    goBack() {
      // 前进与后退
      // 回退上一个页面
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="less" scoped></style>
