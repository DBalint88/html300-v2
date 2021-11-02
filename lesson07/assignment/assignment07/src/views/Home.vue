<template>
  <main class="bg-dark">
  <h1 class="text-primary">Welcome to the HHS Piano page!</h1>
  <p class="text-primary">Use the links above to find your music and other information.  Here's what else is going on in the department:</p>
  <div class="news-card row border border-primary">
    <!-- When the screen is medium or wider, these sections are split 8/4, but any smaller and they become 2 rows one on top of the other. -->
    <div class="news-card-image col-md-4 col-sm-12 bg-secondary">
      <a href="https://youtu.be/DwSzU8DhETQ"><img class="img-fluid" src="@/assets/this-is-me.jpg" alt=""></a>
    </div>
    <div class="news-card-text col-md-8 col-sm-12 bg-dark text-primary">
      <h3>The Hamden High Virtual Chorus Sings "This Is Me"</h3>
      <p>Watch our very own chorus members adapting to the pandemic.  We may not be allowed to sing inside the building, but that won't stop us from singing.  Have a listen and enjoy This Is Me.</p>
    </div>
  </div>
</main>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  components: {
  },
};
</script>

<style lang="scss">

  .news-card {
    height: auto;
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 4rem;
  }

  .news-card-image {
    height: auto;
    padding: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }

  main {
    max-width: 100vw;
    padding: 1.5rem;
  }

</style>
