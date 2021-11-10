<template>
  <div class="accordion col-lg-3 col-md-12 px-0 my-4" role="tablist" id="accordionExample">
    <b-card v-for="level in levels" v-bind:key="level" no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1 col text-center bg-secondary" role="tab">
        <b-button v-b-toggle="'accordion-'+level.index" variant="primary" class="btn-block">{{ level.skillLevel }}</b-button>
      </b-card-header>
      <b-collapse :id="'accordion-'+level.index" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ol>
            <li v-for="song in level.songs" v-bind:key="song" class="song-button" :data-pdf="'./sheet-music/'+song.pdf+'.pdf'" :data-video="song.video" @click="updateDisplay">{{ song.title }}</li>
          </ol>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>


<script>
export default {
  methods: {
    updateDisplay(e) {
      this.songSheet = e.currentTarget.getAttribute('data-pdf');
      this.songVideo = e.currentTarget.getAttribute('data-video');
      this.$emit("sheetEmit", this.songSheet);
      this.$emit("vidEmit", this.songVideo);
      },
  },
  name: "SongList",
  data() {
      return {
        songSheet: '',
        songVideo: '',
        levels: [
          {
            skillLevel: 'Level 1',
            index: '1',
            songs: [
              {
                title: 'Hot Cross Buns',
                pdf: '01-hot-cross-buns',
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

<style>
.btn-block {
  width: 100%
}
</style>
