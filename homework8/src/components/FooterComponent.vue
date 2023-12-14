<template>
    <footer class="center">
        <div class="footer__content">
            <div class="footer__content__column column1">
                <div class="footer__content__column__title__box">
                    <router-link to="/">
                    <img class="footer__content__column__title__box logo" src="../assets/images/Logo.png" alt="logotype">
                    </router-link>
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
                    <router-link to="/" class="footer__content__column__navigation link">Home</router-link>
                    <router-link to="/Project" class="footer__content__column__navigation link">Project</router-link>
                    <router-link to="/Blog" class="footer__content__column__navigation link">Blog</router-link>
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
</template>
<script>
export default {
  name: 'FooterComponent'
}
</script>
