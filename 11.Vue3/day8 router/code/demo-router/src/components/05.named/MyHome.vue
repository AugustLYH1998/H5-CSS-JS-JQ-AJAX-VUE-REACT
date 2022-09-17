<template>
  <div>
    <h3>MyHome 组件</h3>
    <router-link :to="{ name: 'mov', params: { mid: 2 } }">go to movie 2</router-link>
    <button type="button" class="btn btn-primary" @click="goToMovie(1)">go to movie 1</button>
  </div>
</template>

<script>
export default {
  name: 'MyHome',
  methods: {
    goToMovie(id) {

      // 命名路由 编程式导航跳转
      this.$router.push({
        name: 'mov',
        params: {
          mid: id,
        },
      })
    },
  },
}
</script>

<style lang="less" scoped></style>
