<template>
    <div>
            <h1>{{product.name}}</h1>
            <p>{{formattedPrice}}</p>
            <p>{{checkAvailable}}</p>
        </div>

  </template>
<script>
export default {
  data () {
    return {
      product: {
        name: 'Some goods',
        price: '99.99',
        available: true
      }

    }
  },
  computed: {
    formattedPrice () {
      return `$${this.product.price}`
    },
    checkAvailable () {
      return this.product.available ? 'Available' : 'Out of stock'
    }
  }
}
</script>
