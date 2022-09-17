<template>
  <div>
    <h1>App 根组件 作用域插槽</h1>
    <hr />

    <!-- 使用自定义组件  #default="scoped" -->
    <my-test>

      <template v-slot:header1="scoped">
        <p>{{scoped}}</p>
        <p>{{scoped.info.address}}</p>
        <p>{{scoped.msg}}</p>
      </template>

      <!-- 使用解构赋值 结构prop -->
      <template #default="{ msg, info }">
        <p>{{ msg }}</p>
        <p>{{ info.address }}</p>
      </template>

    </my-test>
    <hr />

    <my-table>
      <!-- 解构赋值 -->
      <template #default="{ user }">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>
          <input type="checkbox" :checked="user.state" />
        </td>
      </template>
    </my-table>
  </div>
</template>

<script>
// 导入组件
import MyTest from './MyTest.vue'
import MyTable from './MyTable.vue'

export default {
  name: 'MyApp',
  // 注册组件
  components: {
    MyTest,
    MyTable,
  },
}
</script>

<style lang="less" scoped>

</style>
