<template>
  <div id="sidebar-main" class="row bg-dark mx-0 py-2" >

    
    <SongList @sheetEmit="updateDisplay" @vidEmit="updateVidLink" @scrollMe="scrollMe"/>



    <!-- The PDF viewer.  Not sure how to use objects/iframes, embed seemed easy enough.  JS loops through the .song-button's above and listens for a click, then updates the src attribute of the embed with the correct file path. -->

    <main id="song-main" class="col-lg-9 col-md-12 bg-dark">
      <div ref="dynamic-buttons" class="video-download-bar bg-dark">
        <a v-if="selectedSongSheet.length > 0" :href="selectedSongVideo" target="_blank"><button class="dynamic-button btn btn-primary" type="button" name="button">YouTube</button></a>
        <a v-if="selectedSongSheet.length > 0" :href="selectedSongSheet" target="_blank"><button class="dynamic-button btn btn-secondary" type="button" name="button">Download PDF</button></a>
      </div>
      <embed v-if="selectedSongSheet.length > 0" id="pdf-viewer" type="application/pdf" :src="this.selectedSongSheet">

    </main>
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
      this.selectedSongVideo = e;

      let dynamicButtons = this.$refs["dynamic-buttons"];
      dynamicButtons.scrollIntoView({ behavior: 'smooth' });
    }
  },
  components: {
    SongList
  }
};
</script>

<style scope lang="scss">

  * {
    scroll-behavior: smooth;
  }
  main {
    max-width: 100vw;
    padding: 1.5rem;
  }

  .video-download-bar {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2rem;
    margin-bottom: .8rem;

  }

  .dynamic-button {
    width: 100%;
    border: 1px solid white;
    padding: .45rem;
  }

  #pdf-viewer {
    background-color: white;
  }

</style>
