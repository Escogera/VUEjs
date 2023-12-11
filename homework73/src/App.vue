<template>
  <div id="app" class="main">
    <HeaderComponent/>
    <!-- <MainPage />, -->
    <!-- <BlogPosts />, -->
    <!-- <BlogDetails /> -->
    <!-- <ProjectPage/>, -->
    <ProjectDetails />
    <FooterComponent/>
  </div>
</template>
<script>

import HeaderComponent from './components/HeaderComponent.vue'
// import MainPage from './components/MainPage.vue'
// import BlogPosts from './components/BlogPosts.vue'
// import BlogDetails from './components/BlogDetails.vue'
// import ProjectPage from './components/ProjectPage.vue'
import ProjectDetails from './components/ProjectDetails.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    // MainPage,
    // BlogPosts,
    // BlogDetails,
    // ProjectPage,
    ProjectDetails,
    FooterComponent
  }
}
</script>
<style lang="scss">
@import url('./assets/style/style.css');
</style>
