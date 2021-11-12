<template>
  <main class="bg-dark text-primary py-2">
    <h2>Coming soon:</h2>
    <p>On this page I will build an API interface using <a href="https://tastedive.com/">TasteDive</a> to help students discover more music they might like based on what other people listen to who like the same artists.  Stay tuned!  For now, enjoy an if/else button:</p>

    <div class="button-game">
      <button v-if="status === true" class="btn btn-primary" type="button" name="button" @click="toggle">Click this blue button!</button>
      <button v-else class="btn btn-danger" type="button" name="button" @click="toggle">Click this red button!</button>

    </div>

    <!-- I don't think my other pages used 3 breakpoints as required, so here is just a demonstration of that. -->

  </main>
</template>

<script>
export default {
  name: "Discover",
  methods: {
    toggle() {
      this.status = !this.status;
    }
  },
  data() {
    return {
      status: true
    }
  }
};
</script>
