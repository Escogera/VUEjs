<template>
  <div class="main-project__details">
    <div class="main-project__details__top"></div>
    <div class="main-project__details__centre center">
      <div class="main-project__details__centre__info">
        <h1 class="main-project__details__centre__info__title">{{ title }}</h1>
        <p class="main-project__details__centre__info__text">
          {{ text[0] }}<br /><br />{{ text[1] }}
        </p>
      </div>
        <BootstrapCarusel></BootstrapCarusel>
    </div>
  </div>
</template>

<script>
import BootstrapCarusel from './BootstrapCarusel.vue'

export default {
  components: { BootstrapCarusel },
  name: 'ProjectDetails',
  data () {
    return {}
  },
  methods: {},
  computed: {
    title () {
      return this.$store.state.projectTitle
    },
    text () {
      return this.$store.state.projectText
    }
  }
}
</script>

<style lang="css">
.main-project__details__top {
  background: url(../assets/images/ProjectDetailsMainImg.jpg),
    lightgray 50% / cover no-repeat;
}
.main-project__details__centre__slider__image{

    background: url(../assets/images/ProjectSliderImg.png),
    lightgray 50% / cover no-repeat;
}
.main-project__details__centre__slider__buttons{
  background: url(../assets/images/ProjectSliderBtns.png),
    rgb(255, 255, 255) 50% / cover no-repeat;
    }
</style>
