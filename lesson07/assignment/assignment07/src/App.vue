<template>
  <div id="app" class="bg-dark">
    <div id="content-wrapper" class="bg-primary container">
      <Header />
      <Nav />
      <router-view />
      <Footer />
    </div>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Nav,
    Footer
  },
}
</script>

<style lang="scss">
@import './src/css/base.normalize';
@import './src/css/settings.variables';
@import './src/css/settings.responsive';
@import './src/css/components.content';

#app {
display: grid;
justify-content: center;
}

#content-wrapper {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  row-gap: .25rem;
padding: 0;
grid-template-rows: auto auto 1fr auto;
grid-template-areas: "header"
                     "nav"
                     "content"
                     "footer"
}

Header {grid-area: header;}
Nav {grid-area: nav;}
router-view {grid-area: content;}
Footer {grid-area: footer;}

@media only screen and (max-width: 991px) {#song-main {padding-bottom: 150%; background-color: white;}}
@media only screen and (min-width: 992px) {#song-main {padding-bottom: 103%;}}
@media only screen and (min-width: 1200px) {#song-main {padding-bottom: 100%;}}
@media only screen and (min-width: 1400px) {#song-main {padding-bottom: 90%;}}

</style>
