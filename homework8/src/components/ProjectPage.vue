<template>
    <div class="main-project">
      <div class="main-project__top">
        <div class="main-project__top__div center">
          <h1 class="main-project__top__div project-title">Our Project</h1>
          <p class="main-project__top__div project-subtitle">Home / Project</p>
        </div>
      </div>
      <div class="main-project__projects center">
          <div class="main-project__projects__categories">
            <button
              @click="changeCategory('Bathroom')"
              :class="[
                activeCategory === 'Bathroom'
                  ? 'main-project__projects__categories active-category'
                  : 'main-project__projects__categories category',
              ]"
            >
              Bathroom
            </button>
            <button
              @click="changeCategory('Bedroom')"
              :class="[
                activeCategory === 'Bedroom'
                  ? 'main-project__projects__categories active-category'
                  : 'main-project__projects__categories category',
              ]"
            >
              Bed Room
            </button>
            <button
              @click="changeCategory('Kitchen')"
              :class="[
                activeCategory === 'Kitchen'
                  ? 'main-project__projects__categories active-category'
                  : 'main-project__projects__categories category',
              ]"
            >
              Kitchan
            </button>
            <button
              @click="changeCategory('LivingArea')"
              :class="[
                activeCategory === 'LivingArea'
                  ? 'main-project__projects__categories active-category'
                  : 'main-project__projects__categories category',
              ]"
            >
              Living Area
            </button>
          </div>
          <div
            v-for="(category, index) in filteredList"
            :key="index"
            class="main-project__projects__categories__category-items"
          >
            <ProjectItem
              v-for="(item, index) in category.items"
              :key="index"
              :itemData="item"
              :item-i-d="index"
              :Category="category.name"
            ></ProjectItem>
          </div>
          <div class="main-project__projects__categories__pagination-box">
                    <div class="main-project__projects__categories__pagination-box__pagination">
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill=""><circle cx="26.5" cy="26" r="26" fill="#F4F0EC"/> <text class="main-project__projects__categories__pagination-box__pagination text" x="17" y="32">01</text>
                </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill=""><circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" fill="#FFF"/><text class="main-project__projects__categories__pagination-box__pagination text" x="17" y="32">02</text>
                </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill=""><circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" fill="#FFF"/><text class="mmain-project__projects__categories__pagination-box__pagination text" x="17" y="32">03</text>
                </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none"><circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
          </div>
        </div>
      </div>
  </template>
<script>
import ProjectItem from './ProjectItem.vue'

export default {
  name: 'ProjectPage',
  data () {
    return {
      activeCategory: 'Bedroom',
      categories: [
        {
          name: 'Bathroom',
          items: [
            {
              image: 'project-1.png',
              itemTitle: 'Minimal Bathroom',
              itemText: 'Decor / Artchitecture'
            }
          ]
        },
        {
          name: 'Bedroom',
          items: [
            {
              image: 'project-img-1.png',
              itemTitle: 'Minimal Bedroom',
              itemText: 'Decor / Artchitecture'
            },
            {
              image: 'project-img-2.png',
              itemTitle: 'Minimal Bedroom',
              itemText: 'Decor / Artchitecture'
            },
            {
              image: 'project-img-3.png',
              itemTitle: 'Classic Minimal Bedroom',
              itemText: 'Decor / Artchitecture'
            },
            {
              image: 'project-img-4.png',
              itemTitle: 'Modern Bedroom',
              itemText: 'Decor / Artchitecture'
            },
            {
              image: 'project-img-5.png',
              itemTitle: 'Minimal Bedroom table',
              itemText: 'Decor / Artchitecture'
            },
            {
              image: 'project-img-6.png',
              itemTitle: 'System Table',
              itemText: 'Decor / Artchitecture'
            },
            {
              image: 'project-img-7.png',
              itemTitle: 'Modern Medroom',
              itemText: 'Decor / Artchitecture'
            },
            {
              image: 'project-img-8.png',
              itemTitle: 'Modern Bedroom',
              itemText: 'Decor / Artchitecture'
            }
          ]
        },
        {
          name: 'Kitchen',
          items: [
            {
              image: 'project-img-1.png',
              itemTitle: 'Minimal Kitchen',
              itemText: 'Decor / Artchitecture'
            }
          ]
        },
        {
          name: 'LivingArea',
          items: [
            {
              image: 'project-img-1.png',
              itemTitle: 'Minimal Living Area',
              itemText: 'Decor / Artchitecture'
            }
          ]
        }
      ]
    }
  },
  methods: {
    changeCategory (category) {
      this.activeCategory = category
    },
    getItemImage (item) {
      return {
        item,
        image: item.image && require(`../assets/images/${item.image}`)
      }
    }
  },
  computed: {
    filteredList () {
      return this.categories.filter((category) =>
        category.name.includes(this.activeCategory)
      )
    }
  },
  components: { ProjectItem }
}
</script>
<style>
@import url("../assets/style/style.css");
.main-project__top {
  background: url(../assets/images/Project-main-img.jpg), lightgray 50%;}
</style>
