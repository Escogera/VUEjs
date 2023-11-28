<template>

<body>
    <header class="header__content center">
        <div class="header__content__left">
            <img class="header__content__left logo" src="../assets/images/Logo.png" alt="logotype">
            <h2 class="header__content__left title">Interno
            </h2>
        </div>
        <div class="header__content__right">
            <a href="#" class="header__content__right link">Home</a>
            <a href="#" class="header__content__right link">Project</a>
            <a href="#" class="header__content__right link">Blog</a>
        </div>
    </header>
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
    <footer class="center">
        <div class="footer__content">
            <div class="footer__content__column column1">
                <div class="footer__content__column__title__box">
                    <img class="footer__content__column__title__box logo" src="../assets/images/Logo.png" alt="logotype">
                    <p class="footer__content__column__title__box title">Interno</p>
                </div>
                <p class="footer__content__column__description">It is a long established fact that a reader will be distracted lookings.</p>
                <div class="footer__content__column__social">
                    <img class="footer__content__column__social__twitter" src="../assets/images/twitter.png" alt="twitter logo">
                    <img class="footer__content__column__social__linkedin" src="../assets/images/linkedin.png" alt="linkedin logo">
                </div>
            </div>
            <div class="footer__content__column column2">
                <h3 class="footer__content__column__title column2">Pages</h3>
                <nav class="footer__content__column__navigation">
                    <a href="#" class="footer__content__column__navigation link">Home</a>
                    <a href="#" class="footer__content__column__navigation link">Project</a>
                    <a href="#" class="footer__content__column__navigation link">Blog</a>
                </nav>

            </div>
            <div class="footer__content__column column3">
            </div>
            <div class="footer__content__column column4">
                <h3 class="footer__content__column__title column4">Contact</h3>
                <p class="footer__content__column__contacts">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p class="footer__content__column__contacts mail">contact@interno.com</p>
                <p class="footer__content__column__contacts">(123) 456 - 7890</p>
            </div>
        </div>
    </footer>
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
        image: user.imgUrl && require(`B:/study/frontend/JavaScript/VUEjs/homework4/src/assets/images/${user.imgUrl}`)
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
