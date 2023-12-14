<template>
    <header class="header__content center">
          <div class="header__content__left">
            <router-link to="/">
              <img class="header__content__left logo" src="../assets/images/Logo.png" alt="logotype">
            </router-link>
              <h2 class="header__content__left title">Interno
              </h2>
          </div>
          <div class="header__content__right">
            <router-link to="/" class="header__content__right link">Home</router-link>
            <router-link to="/Project" class="header__content__right link">Project</router-link>
            <router-link to="/Blog" class="header__content__right link">Blog</router-link>
          </div>
      </header>
</template>
<script>
export default {
  name: 'HeaderComponent'
}
</script>
