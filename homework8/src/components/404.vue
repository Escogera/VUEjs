<template>
    <div class="notFound-div">
        <div class="notFound-div__left">
            <div class="notFound-div__left__content">
                <h1 class="notFound-div__left__conten__title">404</h1>
                <p class="notFound-div__left__conten__description">We are sorry, but the page you requested was not found</p>
            </div>
            <div class="notFound-div__left__button">
                <router-link to="/" class="notFound-div__left__button__link">Back To Home <img src="../assets/images/Vector.png" alt="Vector"></router-link>
            </div>
        </div>
        <div class="notFound-div__right">

        </div>
    </div>
  </template>

<script>
export default {
  name: 'NotFound'
}
</script>

  <style lang="css">
.notFound-div__right{
    background: url(../assets/images/404.jpg), lightgray 50% / cover no-repeat;
}
  </style>
