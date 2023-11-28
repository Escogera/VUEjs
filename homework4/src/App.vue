<template>
  <div id="app" class="main">
    <MainPage />
    <!-- <BlogPosts /> -->
    <!-- <BlogDetails /> -->
  </div>
</template>
<script>
import MainPage from './components/MainPage.vue'
// import BlogPosts from './components/BlogPosts.vue'
// import BlogDetails from './components/BlogDetails.vue'

export default {
  name: 'App',
  components: {
    MainPage
    // BlogPosts
    // BlogDetails
  }
}
</script>
<style lang="scss">
@import "B:/study/frontend/JavaScript/VUEjs/homework4/src/assets/styles/style.scss";
</style>
