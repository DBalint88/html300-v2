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
  }
}

</script>

<style lang="scss">
@import './src/css/base.normalize';
@import './src/css/settings.variables';
@import './src/css/settings.responsive';
@import './src/css/components.content';
@import './src/css/style.scss'

</style>
