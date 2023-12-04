<template>
  <div id="app" class="main">
    <HeaderComponent/>,
    <MainPage />,
    <!-- <BlogPosts />, -->
    <!-- <BlogDetails /> -->
    <FooterComponent/>,
  </div>
</template>
<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MainPage from './components/MainPage.vue'
// import BlogPosts from './components/BlogPosts.vue'
// import BlogDetails from './components/BlogDetails.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainPage,
    // BlogPosts,
    // BlogDetails,
    FooterComponent
  }
}
</script>
<style lang="scss">
@import "B:/study/frontend/JavaScript/VUEjs/homework4/src/assets/styles/style.scss";
</style>
