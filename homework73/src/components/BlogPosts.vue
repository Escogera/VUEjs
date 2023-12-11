<template>
    <body>
        <main>
            <div class="main-blog__top">
                <div class="main-blog__top__div center">
                    <h1 class="main-blog__top__div title">Articles & News</h1>
                    <p class="main-blog__top__div description">Home / Blog</p>
                </div>
            </div>
            <div class="main-blog__center center">
                <h1 class="main-blog__center__title">Latest Post</h1>
                <div class="main-blog__center__content">
                    <div class="main-blog__center__content__post">
                        <div class="main-blog__center__content__post__img-box"></div>
                        <div class="main-blog__center__content__post__text-box">
                            <h2 class="main-blog__center__content__post__text-box title">Low Cost Latest Invented Interior Designing Ideas</h2>
                            <div class="main-blog__center__content__post__text-box__description-box">
                                <p class="main-blog__center__content__post__text-box__description-box description">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                                <p class="main-blog__center__content__post__text-box__description-box description">Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                            </div>
                            <div class="main-blog__center__content__post__text-box__date">
                                <p class="main-blog__center__content__post__text-box__date date">26 December,2022</p>
                                <img src="../assets/images/arrow.svg" alt="arrow">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-blog__bottom center">
                <div class="main-blog__bottom__heading">
                    <h1 class="main-blog__bottom__heading__title">Articles & News</h1>
                </div>
                <div id="articleItems" class="main-blog__bottom__products">
                    <div v-for="(item, id) in articleItems" :key="id" class="main-blog__bottom__products__card">
                        <div class="main-blog__bottom__products__card__img-box">
                            <img :src="getuserImg(item).image" alt="Article image" class="main-blog__bottom__products__card__img-box img" />
                            <p class="main-blog__bottom__products__card__img-box info">{{item.subTitle}}</p>
                        </div>
                        <div class="main-blog__bottom__products__card__description-box">
                            <div class="main-blog__bottom__products__card__description-box__title" v-html="item.title "></div>
                            <div class="main-blog__bottom__products__card__description-box__info">
                                <p class="main-blog__bottom__products__card__description-box__info__date">{{item.date}}</p>
                                <img src="../assets/images/arrow.svg" alt="arrow">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-blog__bottom__pagination-box">
                    <div class="main-blog__bottom__pagination-box__pagination">
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill=""><circle cx="26.5" cy="26" r="26" fill="#F4F0EC"/> <text class="main-blog__bottom__pagination-box__pagination text" x="17" y="32">01</text>
                </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill=""><circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" fill="#FFF"/><text class="main-blog__bottom__pagination-box__pagination text" x="17" y="32">02</text>
                </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill=""><circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" fill="#FFF"/><text class="main-blog__bottom__pagination-box__pagination text" x="17" y="32">03</text>
                </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none"><circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                </div>
            </div>
        </main>
</body>

</template>

<script>
export default {
  name: 'BlogPosts',
  data () {
    return {
      articleItems: [{
        imgUrl: 'main_bottom_card1.png',
        subTitle: 'Kitchan Design',
        title: 'Let’s Get Solution For Building Construction <br> Work',
        date: '26 December,2022'
      }, {
        imgUrl: 'main_bottom_card2.png',
        subTitle: 'Living Design',
        title: 'Low Cost Latest Invented Interior Designing <br> Ideas.',
        date: '22 December,2022'
      }, {
        imgUrl: 'main_bottom_card3.png',
        subTitle: 'Interior Design',
        title: 'Best For Any Office & Business Interior <br>  Solution',
        date: '25 December,2022'
      }, {
        imgUrl: 'main_bottom_card4.png',
        subTitle: 'Kitchan Design',
        title: 'Let’s Get Solution For Building Construction <br> Work',
        date: '26 December,2022'
      }, {
        imgUrl: 'main_bottom_card5.png',
        subTitle: 'Living Design',
        title: 'Low Cost Latest Invented Interior Designing <br>  Ideas.',
        date: '22 December,2022'
      }, {
        imgUrl: 'main_bottom_card6.png',
        subTitle: 'Interior Design',
        title: 'Best For Any Office & Business Interior <br>  Solution',
        date: '25 December,2022'
      }]
    }
  },

  methods: {
    getuserImg (user) {
      return {
        user,
        image: user.imgUrl && require(`../assets/images/${user.imgUrl}`)
      }
    }
  }
}
</script>
