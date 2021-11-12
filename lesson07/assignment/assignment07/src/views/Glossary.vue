<template>
  <div id="sidebar-main" class="row mx-0">

    <aside id="glossary-aside" class="bg-dark col-lg-2 col-md-12">
      <div id="glossary-sticky">
        <h2 id="glossary-h2" class="text-primary text-center mb-2">Glossary</h2>
        <ul class="text-center px-0">
          <li class="glossary-index-item" v-for="term in terms" v-bind:key="term" @click="glossaryScroll(term.anchor)">{{ term.name }}</li>
        </ul>
      </div>
    </aside>

    <main id="glossary-main" class="bg-dark col-lg-10 col-md-12">

      <div v-for="term in terms" v-bind:key="term" class="glossary-card card">
        <div :ref="term.anchor" :id="term.anchor" class="card-header">
          {{ term.name }}
        </div>
        <div class="card-body text-center">
          <div class="glossary-image-container">

            <!-- Images are all responsive using Bootstrap img-fluid class. -->
            <img class="img-fluid" :src="term.pic" alt="">
          </div>
          <h4 class="card-text">{{ term.name }}</h4>
          <p>{{ term.definition }}</p>
        </div>
        <div class="card-footer">
        </div>
      </div>

    </main>
  </div>
</template>

<script>
export default {
  name: "Glossary",
  scrollTarget: '',
  methods: {
    glossaryScroll(refname) {
      this.scrollTarget = refname;
      console.log(this.scrollTarget);
      let scrollAnchor = this.$refs[this.scrollTarget];
      console.log(scrollAnchor);
      scrollAnchor[0].scrollIntoView();
    },
  },
  data() {
      return {
        terms: [
          {
            name: 'Eighth Note',
            pic: './glossary/eighth-note-single.png',
            anchor: 'eighth-note',
            definition: 'An eighth note (or 8th note) gets 1/2 of one beat.',
          },
          {
            name: 'Quarter Note',
            pic: './glossary/quarter-note.png',
            anchor: 'quarter-note',
            definition: 'A quarter note gets 1 beat.',
          },
          {
            name: 'Half Note',
            pic: './glossary/half-note.png',
            anchor: 'half-note',
            definition: 'A half note gets 2 beats.',
          },
          {
            name: 'Whole Note',
            pic: './glossary/whole-note.png',
            anchor: 'whole-note',
            definition: 'A whole note gets 4 beats.',
          },
          {
            name: 'Eighth Rest',
            pic: './glossary/eighth-rest.png',
            anchor: 'eighth-rest',
            definition: 'An eighth rest (or 8th rest) gets 1/2 of one beat.',
          },
          {
            name: 'Quarter Rest',
            pic: './glossary/quarter-rest.png',
            anchor: 'quarter-rest',
            definition: 'A quarter rest gets 1 beat.',
          },
          {
            name: 'Half Rest',
            pic: './glossary/half-rest.png',
            anchor: 'half-rest',
            definition: 'A half rest gets 2 beats.  It looks like a "top-half" that Abe Lincoln might\'ve worn.',
          },
          {
            name: 'Whole Rest',
            pic: './glossary/whole-rest.png',
            anchor: 'whole-rest',
            definition: 'A whole rest gets 4 beats.  It looks like a "whole" in the ground!.',
          },
        ]
      }
  }
}
</script>

<style>

#glossary-sticky {
  height: auto;
  position: sticky;
  top: 2rem;
}
.glossary-index-item {
  color: white;
  list-style: none;
  cursor: pointer;
  margin-top: 1rem;
}
</style>
