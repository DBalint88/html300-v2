<template>
  <div id="sidebar-main" class="row bg-dark mx-0 py-2" >

    <SongList @sheetEmit="updateDisplay" @vidEmit="updateVidLink"/>



    <!-- The PDF viewer.  Not sure how to use objects/iframes, embed seemed easy enough.  JS loops through the .song-button's above and listens for a click, then updates the src attribute of the embed with the correct file path. -->

    <main id="song-main" class="col-lg-9 col-md-12">
      <embed id="pdf-viewer" type="application/pdf" :src="this.selectedSongSheet">

    </main>
    <a :href="this.selectSongVideo"><button type="button" name="button" :href="this.selectedSongVideo">click a the button</button></a>
  </div>
</template>


<script>
// @ is an alias to /src
import SongList from "@/components/SongList.vue";


export default {
  name: "Songs",
  data() {
    return {
      selectedSongSheet: "",
      selectedSongVideo: ""
    }
  },
  methods: {
    updateDisplay(e) {
      this.selectedSongSheet = e;
      // this.selectSong = e.songData;
    },
    updateVidLink(e) {
      this.selectSongVideo = e;
    }
  },
  components: {
    SongList
  }
};
</script>

<style lang="scss">

  main {
    max-width: 100vw;
    padding: 1.5rem;
  }

</style>
