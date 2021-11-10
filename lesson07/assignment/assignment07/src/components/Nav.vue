<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"><router-link class="nav-link active p-2" to="/">Home</router-link></b-nav-item>
          <b-nav-item href="#"><router-link class="nav-link active p-2" to="/Songs">Songs</router-link></b-nav-item>
          <b-nav-item href="#"><router-link class="nav-link active p-2" to="/Glossary">Glossary</router-link></b-nav-item>
          <b-nav-item href="#"><router-link class="nav-link active p-2" to="/Discover">Discover</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
