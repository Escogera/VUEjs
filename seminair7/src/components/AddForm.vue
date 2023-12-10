<template>
    <div>
        <input v-model="name"  type="text">
        <input v-model.number ="price" type="nimber">
        <button @click="addToCart">ADD</button>
    </div>
</template>

<script>
export default {
  name: 'AddForm',

  data () {
    return {
      name: '',
      price: null
    }
  },

  mounted () {

  },

  methods: {
    addToCart () {
      const id = new Date().getTime()
      const newProduct = {
        id, name: this.name, price: this.price
      }
      this.$emit('addToCart', newProduct)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
