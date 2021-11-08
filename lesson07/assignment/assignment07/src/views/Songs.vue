<template>
  <div id="sidebar-main" class="row bg-dark mx-0 py-2">
    <button type="button" name="button" @click="updateDisplay">Click me</button>
    <div class="accordion col-lg-3 col-md-12 px-0 my-4" role="tablist" id="accordionExample">
      <SongList v-for="level in levels" :name="level.skillLevel" :indexRef="level.index" :songs="level.songs" v-bind:key="level"></SongList>

    </div>



    <!-- The PDF viewer.  Not sure how to use objects/iframes, embed seemed easy enough.  JS loops through the .song-button's above and listens for a click, then updates the src attribute of the embed with the correct file path. -->
    <main id="song-main" class="col-lg-9 col-md-12">
      <embed id="pdf-viewer" type="application/pdf" :src="pdfURL">
    </main>
  </div>
</template>


<script>
// @ is an alias to /src
import SongList from "@/components/SongList.vue";


export default {
  name: "Songs",
  components: {
    SongList
  },
  methods: {
    updateDisplay: function () {
      this.pdfURL = "./sheet-music/01-tisket-tasket.pdf"
    }
  },
  data() {
      return {
        pdfURL: '',
        levels: [
          {
            skillLevel: 'Level 1',
            index: '1',
            songs: [
              {
                title: 'Hot Cross Buns',
                pdf: './sheet-music/01-hot-cross-buns.pdf',
                video: 'https://youtu.be/PaaAvBGLem0'
              },
              {
                title: 'Mary Had A Little Lamb',
                pdf: '01-mary-had-a-little-lamb',
                video: 'https://youtu.be/MX2irXhbnCs'
              },
              {
                title: 'Au Clair de la Lune',
                pdf: '01-au-clair-de-la-lune',
                video: 'https://youtu.be/KF8lZntKpSs'
              },
              {
                title: 'Jingle Bells',
                pdf: '01-jingle-bells',
                video: 'https://youtu.be/-FtdwRM0zZY'
              },
              {
                title: 'Rain, Rain, Go Away',
                pdf: '01-rain-rain',
                video: 'https://youtu.be/SOgK23KkYJs'
              },
              {
                title: 'A Tisket, A Tasket',
                pdf: '01-tisket-tasket',
                video: 'https://youtu.be/fEXYaA0sW5M'
              },
              {
                title: 'Ode to Joy',
                pdf: '01-ode-to-joy',
                video: 'https://youtu.be/zA5IbQj2Upk'
              },
              {
                title: 'Sweetly Sings the Donkey',
                pdf: '01-sweetly-sings-the-donkey',
                video: 'https://youtu.be/0lwKqvAa0lw'
              },
              {
                title: 'Go Tell Aunt Rhodie',
                pdf: '01-go-tell-aunt-rhodie',
                video: 'https://youtu.be/5E65FgTD924'
              },
              {
                title: 'Banks of the Ohio',
                pdf: '01-banks-of-the-ohio',
                video: 'https://youtu.be/534fljXmmF8'
              }
            ],
          },
          {
            skillLevel: 'Level 2',
            index: '2',
            songs: [
              {
                title: 'Pop! Goes the Weasel',
                pdf: '02-pop-goes-the-weasel',
                video: 'https://youtu.be/tsCWF9hl5IY'
              }
            ]
          },
          {
            skillLevel: 'Level 3',
            index: '3'
          },
          {
            skillLevel: 'Level 4',
            index: '4'
          },
        ],



      }
    }
};
</script>

<style lang="scss">

  main {
    max-width: 100vw;
    padding: 1.5rem;
  }

</style>
