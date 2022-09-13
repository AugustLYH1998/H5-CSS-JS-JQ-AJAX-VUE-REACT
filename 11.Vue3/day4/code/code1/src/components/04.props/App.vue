<template>
  <div>
    <h1>这是 04 App.vue 根组件</h1>
    <hr />
    <!-- v-bind动态绑定 -->
    <my-article :title="info.title" :author="'post by ' + info.author" pub-time="1989"></my-article>
  </div>
</template>

<script>
import MyArticle from './Article.vue'

export default {
  name: 'MyApp',
  data() {
    return {
      info: {
        title: 'abc',
        author: '123',
      },
    }
  },
  components: {
    MyArticle,
  },
}
</script>
