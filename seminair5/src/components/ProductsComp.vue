<!-- Разработать интерфейс корзины товаров, в котором пользователь может изменять количество товаров в корзине и видеть общую сумму покупки. Каждый товар представлен в виде блока, содержащего поле ввода для изменения количества товара и отображение его цены. При изменении количества товаров в поле ввода, необходимо автоматически пересчитывать стоимость каждого товара и обновлять общую сумму покупки. -->
<template>
    <div>
    <div v-for="book in books" :key="book.id">
        <p>{{book.bookName }}</p>
        <button @click="toogleDescription(book.id)">Show description</button>
        <p v-if="showDescriptions.includes(book.id)">{{ book.description }} {{ book.publicationYear }} </p>
    </div>
    </div>
  </template>

<script>

export default {
  name: 'ProductsComp',
  data () {
    return {
      books: [{
        id: 1,
        description: 'description 1',
        bookName: 'Book 1',
        publicationYear: '1994'
        // showDescription: false
      }, {
        id: 2,
        description: 'description 2',
        bookName: 'Book 2',
        publicationYear: '2001'
        // showDescription: false
      }, {
        id: 3,
        description: 'description 3',
        bookName: 'Book 3',
        publicationYear: '2005'
        // showDescription: false
      }],
      showDescriptions: []
    }
  },
  methods: {
    toogleDescription (id) {
      const findIndex = this.showDescriptions.indexOf(id)
      if (findIndex === -1) { this.showDescriptions.push(id) } else { this.showDescriptions.splice(findIndex, 1) }
    }
  },

  computed: {
    // totalPrice () {
    //   return this.products.reduce((sum, cur) => sum + cur.price * cur.prodCount, 0)
    // }

  }
}
</script>

  <style scoped lang="scss"></style>

  <!-- Разработка приложения для отображения информации о книгах
Требуется создать компонент "Книга" (Book), который будет отображать информацию о книге, такую как название, автор и год издания. Компонент "Книга" должен иметь возможность отображать дополнительные детали о книге по требованию пользователя. Также необходимо создать компонент "Список книг" (BookList), который будет отображать список книг из переданного массива. -->
