<template>
  <div class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"
      ><span class="navbar-toggler-icon"></span></button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav nav-pills">
          <li class="nav-item p-2">
            <router-link class="nav-link active p-2" to="/">Home</router-link>
          </li>
          <li class="nav-item p-2">
            <router-link class="nav-link active p-2" to="/">Songs</router-link>
          </li>
          <li class="nav-item p-2">
            <router-link class="nav-link active p-2" to="/">Glossary</router-link>
          </li>
          <li class="nav-item p-2">
            <router-link class="nav-link active p-2" to="/">Discover</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Nav",
  props: {
    msg: String,
  },
};
</script>
