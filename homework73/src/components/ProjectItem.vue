<template>
    <div class="main-project__projects__categories__category-item">
      <img
        :src="require(`../assets/images/${itemData.image}`)"
        alt=""
        class="main-project__projects__categories__category-item-image"
      />
        <div class="main-project__projects__categories__category-item-info">
        <div class="main-project__projects__categories__category-item__info-left">
          <div class="main-project__projects__categories__category-item title">{{ itemData.itemTitle }}</div>
          <div class="main-project__projects__categories__category-item text">{{ itemData.itemText }}</div>
        </div>
        <div class="main-project__projects__categories__category-item
        __info-right">
        <img src="../assets/images/arrow.svg" alt="arrow">
        </div>
      </div>
    </div>
  </template>
<script>
export default {
  name: 'ProjectItem',
  props: ['itemData', 'itemID', 'Category'],

  data () {
    return {}
  }
}
</script>
