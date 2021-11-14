<template>
  <div id="sidebar-main" class="row mx-0">

    <!-- This portion below is the index on the side. -->
    <aside id="glossary-aside" class="bg-dark col-lg-2 col-md-12">
      <div id="glossary-sticky">
        <h2 id="glossary-h2" class="text-primary text-center mb-2">Glossary</h2>
        <ul class="text-center px-0">
          <li class="glossary-index-item" v-for="term in terms" v-bind:key="term" @click="glossaryScroll(term.anchor)">{{ term.name }}</li>
        </ul>
      </div>
    </aside>

    <!-- This portion below is for the actual flash cards.  I thought of making the index and the flash cards into separate components, but realized I would just be copying the data to both components - at that point I might as well just build both on the same page so they can reference the same data.-->
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
    // I had one hell of a time getting page anchors to work dynamically because of the Vue router.  This was the solution I landed on but had to do a lot of debugging before I figured out I need to reference the first entry in the array returned by this.$refs - I still don't fully understand it, but it works.
    glossaryScroll(refname) {
      // store the designated glossary term in the global Vue data item "scrollTarget" ...
      this.scrollTarget = refname;
      console.log(this.scrollTarget);

      // ...then pass that string to the refs on the page.  The matching one exists on one of the divs, as the refs were made dynamically using the same terms.anchor attribute.
      let scrollAnchor = this.$refs[this.scrollTarget];
      console.log(scrollAnchor);

      // For the life of me I can't get smooth scroll to work on mobile, in safari or Chrome, using JS or CSS...
      scrollAnchor[0].scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
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
            definition: 'A half rest gets 2 beats.  It looks like a "top-half" that Abe Lincoln might\'ve worn!',
          },
          {
            name: 'Whole Rest',
            pic: './glossary/whole-rest.png',
            anchor: 'whole-rest',
            definition: 'A whole rest gets 4 beats.  It looks like a "whole" in the ground!',
          },
        ]
      }
  }
}
</script>

<style scope>

/* ...but I keep trying. */
* {
  scroll-behavior: smooth;
}

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
