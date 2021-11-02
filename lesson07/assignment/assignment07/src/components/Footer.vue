<template>
  <div class="bg-dark p-2">
    <h1 class="display-4 text-center text-primary my-1">HHS Piano</h1>
    <p class="lead text-primary text-center">Created by Daniel Balint for Hamden Public Schools</p>
    <p class="lead text-primary text-center">All sheet music used with permission from Gil DeBenedetti at <a href="https://gmajormusictheory.org/">G Major Music Theory</a>.  Check out his site for much more!</p>
    <p class="lead text-primary text-center">Version 2.0 with Bootstrap 4 & inline image loading.</p>
    <p class="lead text-primary text-center">Last updated 9/18/21</p>
  </div>
</template>


<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>
