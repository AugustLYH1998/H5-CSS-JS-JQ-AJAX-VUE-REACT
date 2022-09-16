<template>
  <div>
    <p>数量：{{ count }}</p>
    <p>状态：{{ state }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyCount',
  // props: ['count', 'state'],
  props: {
    count: {
      // 声明必填项
      type: Number,
      required: true,
      default: 100
    },
    state: Boolean,

    // 多个可能类型
    info: [String, Number],
    type: {
      // 自定义验证函数validator
      validator(value) {
        // -1 验证 失败，否则成功
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
}
</script>

<style lang="less" scoped></style>
