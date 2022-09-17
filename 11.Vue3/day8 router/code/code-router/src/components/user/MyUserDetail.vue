<template>
  <button type="button" class="btn btn-light btn-sm" @click="goBack">后退</button>
  <h4 class="text-center">用户详情 --- {{id}}</h4>
</template>

<script>
export default {
  name: 'MyUserDetail',
  props: ['id'],
  methods: {
    goBack() {
      // this.$router.go(-1)
      // this.$router.push 跳转指定hush地址
      this.$router.push({
        name: "home"
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>