<!-- Создание базового хранилища: Создайте новое Vuex-хранилище, определите в нем состояние (state) и несколько базовых мутаций (mutations). Подключите хранилище к вашему приложению Vue.js и используйте его для управления состоянием приложения.
Создайте счетчик который хранит состояние count
Создайте две мутации, которые увеличивают и уменьшают значение счетчика
Создайте компонент счетчик -->

<template>
  <div>
    <h2> {{ counter }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'VUEjsCounter',

  data () {
    return {}
  },

  mounted () { console.log(this.$store) },

  computed: {
    counter () {
      return this.$store.state.counter
    }
  },

  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT']),
    increment () { this.INCREMENT() },
    decrement () { this.DECREMENT() }
  }
}
</script>

<style lang="scss" scoped></style>
