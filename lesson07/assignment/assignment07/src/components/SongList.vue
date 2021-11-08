<template>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="'accordion-'+indexRef" variant="info">{{ name }}</b-button>
      </b-card-header>
      <b-collapse :id="'accordion-'+indexRef" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ol>
            <li v-for="song in songs" v-bind:key="song" class="song-button" :id="song.pdfLink" :data-video="song.videoLink" @click="pdfURL=song.pdfLink">{{ song.title }}</li>
          </ol>
        </b-card-body>
      </b-collapse>
    </b-card>
</template>


<script>
export default {
  name: "SongList",
  props: {
    name: String,
    indexRef: String,
    songs: Array
  },
};
</script>
