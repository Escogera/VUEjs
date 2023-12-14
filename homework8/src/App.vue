<template>
  <div id="app" class="main">
    <HeaderComponent/>
    <router-view />
    <FooterComponent/>
  </div>
</template>
<script>

import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}

</script>
<style lang="scss">
@import url('./assets/style/style.css');
</style>
