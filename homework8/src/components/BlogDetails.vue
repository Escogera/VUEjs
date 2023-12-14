<template>

<body>
    <main>
        <div class="main-details__top">
        </div>
        <div id="main" class="main-details__center center">
            <div class="main-details__center__content">
            <div class="main-details__center__content-posts">
                <div class="main-details__center__content-posts__post" v-for="(item, index) in filteredList" :key="index">
                    <h1 v-if="item.title.trim().length==0" class="hide"></h1>
                    <h1 v-else class="main-details__center__content-posts__post__title">{{item.title}}</h1>
                    <img v-if="getuserImg(item).image.trim().length==0" class="hide"/>
                    <img v-else :src="getuserImg(item).image" alt="Article image" class="main-details__center__content-posts__post__image"/>
                    <div v-if="item.date.trim().length==0" class="hide">
                    </div>
                    <div v-else class="main-details__center__content-posts__post__info">
                        <p class="main-details__center__content-posts__post__date">{{item.date}}</p>
                        <p class="main-details__center__content-posts__post__tags">Interior / Home / Decore</p>
                    </div>
                    <div v-if="item.text.trim().length==0" class="hide"></div>
                    <div v-else class="main-details__center__content-posts__post__content">
                        <p class="main-details__center__content-posts__post__text">{{item.text}}</p>
                        <ol class="main-details__center__content-posts__post__list">
                            <li class="main-details__center__content-posts__post__list__element" v-for="(listItem, listIndex) in item.list" :key="listIndex"> {{listItem}} </li>
                        </ol>
                    </div>
                    <div v-if="item.quote.trim().length==0" class="hide"></div>
                    <div v-else class="main-details__center__content-posts__post__quote">
                        <p class="main-details__center__content-posts__post__quotation-marks">”</p>
                        <p class="main-details__center__content-posts__post__quote-text"> {{item.quote}} </p>
                    </div>
                </div>
            </div>
            <div class="main-details__center__content-filters">
                <div class="main-details__center__content-filters__title">Tags</div>
                <div class="main-details__center__content-filters__items">
                    <div class="main-details__center__content-filters__items__item" @click="currentFilter='Kitchen'">
                    Kitchen </div>
                    <div class="main-details__center__content-filters__items__item" @click="currentFilter='Bedroom'">
                    Bedroom </div>
                    <div class="main-details__center__content-filters__items__item" @click="currentFilter='Building'"> Building </div>
                    <div class="main-details__center__content-filters__items__item" @click="currentFilter='Artchitecture'"> Artchitecture </div>
                    <div class="main-details__center__content-filters__items__item" @click="currentFilter='Kitchen Planning'"> Kitchen Planning </div>
                    <div class="main-details__center__content-filters__items__item" @click="currentFilter='Bedroom'">
                    Bedroom </div>
                </div>
            </div>
        </div>`

        </div>
    </main>
</body>
</template>

<script>
export default {
  name: 'BlogDetails',
  data () {
    return {
      articles: [{
        title: 'Let’s Get Solution for Building Construction Work',
        imgUrl: 'post1.png',
        date: '26 December,2022',
        tag: 'Kitchen',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        list: [],
        quote: 'The details are not the details. They make the design.'
      },
      {
        title: 'Design sprints are great',
        imgUrl: '',
        date: '',
        tag: 'Bedroom',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        list: [
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
        ],
        quote: ''
      },
      {
        title: '',
        imgUrl: 'post2.png',
        date: '',
        tag: 'Building',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        list: [],
        quote: ''
      },
      {
        title: 'Test post',
        imgUrl: 'post2.png',
        date: '',
        tag: 'Kitchen Planning',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        list: [],
        quote: ''
      },
      {
        title: 'Test post 2',
        imgUrl: 'post1.png',
        date: '',
        tag: 'Artchitecture',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        list: [],
        quote: ''
      }

      ],
      currentFilter: ''
    }
  },
  methods: {
    changeFilter (event) {
      const text = event.target.text
      this.currentFilter = text
    },

    getuserImg (user) {
      return {
        user,
        image: user.imgUrl && require(`../assets/images/${user.imgUrl}`)
      }
    }
  },

  computed: {
    filteredList () {
      if (this.currentFilter) {
        return this.articles.filter((item) =>
          item.tag.includes(this.currentFilter)
        )
      } else {
        return this.articles
      }
    }
  }
}
</script>
<style lang="scss">
.main-details__top {
  background: url(../assets/images/details_main.jpg), lightgray 50%;
}
</style>
