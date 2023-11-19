"use strict";

Vue.component("articles", {
    template: `
    <div class="main__center__content">
        <div class="main__center__content-posts">       
            <div class="main__center__content-posts__post" v-for="(item, index) in filteredList":key="index">
                <h1 v-if="item.title.trim().length==0" class="hide"></h1>
                <h1 v-else class="main__center__content-posts__post__title">{{item.title}}</h1>
                <img v-if="item.imgUrl.trim().length==0" class="hide"/>
                <img v-else :src="item.imgUrl" alt="Article image" class="main__center__content-posts__post__image"/>
                <div v-if="item.date.trim().length==0" class="hide">
                </div>
                <div v-else class="main__center__content-posts__post__info">
                    <p class="main__center__content-posts__post__date">{{item.date}}</p>
                    <p class="main__center__content-posts__post__tags">Interior / Home / Decore</p>
                </div>
                <div v-if="item.text.trim().length==0" class="hide"></div>
                <div v-else class="main__center__content-posts__post__content">
                    <p class="main__center__content-posts__post__text">{{item.text}}</p>
                    <ol class="main__center__content-posts__post__list">
                        <li class="main__center__content-posts__post__list__element" v-for="(listItem, listIndex) in item.list" :key="listIndex"> {{listItem}} </li>
                    </ol>
                </div>
                <div v-if="item.quote.trim().length==0" class="hide"></div>
                <div v-else class="main__center__content-posts__post__quote">        
                    <p class="main__center__content-posts__post__quotation-marks">”</p>
                    <p class="main__center__content-posts__post__quote-text"> {{item.quote}} </p>
                </div>
            </div>
        </div>         
        <div class="main__center__content-filters">
            <div class="main__center__content-filters__title">Tags</div>
            <div class="main__center__content-filters__items">
                <div class="main__center__content-filters__items__item" @click="currentFilter='Kitchen'">
                Kitchen </div>
                <div class="main__center__content-filters__items__item" @click="currentFilter='Bedroom'">
                Bedroom </div>
                <div class="main__center__content-filters__items__item" @click="currentFilter='Building'"> Building </div>
                <div class="main__center__content-filters__items__item" @click="currentFilter='Artchitecture'"> Artchitecture </div>
                <div class="main__center__content-filters__items__item" @click="currentFilter='Kitchen Planning'"> Kitchen Planning </div>
                <div class="main__center__content-filters__items__item" @click="currentFilter='Bedroom'">
                Bedroom </div>
            </div>                      
        </div>
    </div>`,
    data() {
        return {
            articles: [{
                    title: "Let’s Get Solution for Building Construction Work",
                    imgUrl: "img/post1.png",
                    date: "26 December,2022",
                    tag: "Kitchen",
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
                    list: [],
                    quote: "The details are not the details. They make the design.",
                },
                {
                    title: "Design sprints are great",
                    imgUrl: "",
                    date: "",
                    tag: "Bedroom",
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
                    list: [
                        "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    ],
                    quote: "",
                },
                {
                    title: "",
                    imgUrl: "img/post2.png",
                    date: "",
                    tag: "Building",
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
                    list: [],
                    quote: "",
                },
                {
                    title: "Test post",
                    imgUrl: "img/post2.png",
                    date: "",
                    tag: "Kitchen Planning",
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
                    list: [],
                    quote: "",
                },
                {
                    title: "Test post 2",
                    imgUrl: "img/post1.png",
                    date: "",
                    tag: "Artchitecture",
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
                    list: [],
                    quote: "",
                },

            ],
            currentFilter: "",
        };
    },
    methods: {
        changeFilter(event) {
            text = event.target.text;
            this.currentFilter = text;
        },
    },
    computed: {
        filteredList() {
            if (this.currentFilter) {
                return this.articles.filter((item) =>
                    item.tag.includes(this.currentFilter)
                );
            } else {
                return this.articles;
            }
        },
    },
});


new Vue({
    el: "#main",
    data: {},
});