<template>
  <div id="app">
<!-- <AuthentificationComp/> -->
<!-- <ProductsComp/> -->
<MortgageCalculator/>
  </div>
</template>

<script>
// import AuthentificationComp from './components/AuthentificationComp.vue'
// import ProductsComp from './components/ProductsComp.vue'
import MortgageCalculator from './components/MortgageCalculator.vue'

export default {
  name: 'App',
  components: {
    // AuthentificationComp
    // ProductsComp
    MortgageCalculator
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
