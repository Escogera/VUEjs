<template>
    <div>
        <div v-for="item in cartItems" :key="item.id">
            <h1>{{ item.name }}</h1>
            <p>{{ item.price }}</p>
        </div>
        <AddForm @addToCart="addToCart" />
        <p> Количество товаров: {{ countProducts }}</p>
        <p> Общая сумма:  {{ totalPrice}} </p>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import AddForm from './AddForm.vue'
export default {
  name: 'MyCart',

  data () {
    return {
    }
  },
  mounted () {
    this.fetchData()
  },

  methods: {
    ...mapActions(['fetchData']),
    ...mapMutations(['ADD_TO_CART']),
    addToCart (product) { this.ADD_TO_CART(product) }
  },

  computed: {
    ...mapGetters(['cartItems', 'totalPrice', 'countProducts'])
  },
  components: { AddForm }
}
</script>

<style lang="scss" scoped>

</style>
