<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-nav pills>
          <!-- Router links inside each bootstrap nav tag control what component vue is displayed in the App.  Can't find a natural way to identify the active page, so I set up the method below which updates "currentPage" on each click of a link, and then conditionally apply "active" class to the appropriate link.  It breaks on refresh though.  Seems like hooks might be the answer. -->
          <b-nav-item @click="setCurrentPage('home')"><router-link class="nav-link text-white p-2" :class="{ active : this.currentPage === 'home'}"  to="/">Home</router-link></b-nav-item>

          <b-nav-item @click="setCurrentPage('songs')"><router-link class="nav-link text-white p-2" :class="{active : this.currentPage === 'songs'}"  to="/Songs">Songs</router-link></b-nav-item>

          <b-nav-item @click="setCurrentPage('glossary')"><router-link class="nav-link text-white p-2" :class="{active : this.currentPage === 'glossary'}" to="/Glossary">Glossary</router-link></b-nav-item>

          <b-nav-item @click="setCurrentPage('discover')"><router-link class="nav-link text-white p-2" :class="{active : this.currentPage === 'discover'}" to="/Discover">Discover</router-link></b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: "Nav",
  data(){
    return{
      currentPage: 'home'
    }
  },
  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
    }
  }
};
</script>
