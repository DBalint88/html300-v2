<template>
  <div>

    <div class="accordion" role="tablist">
      <SongList v-for="level in levels" :name="level.title" :indexRef="level.index" v-bind:key="level"></SongList>

    </div>


    <div id="sidebar-main" class="row bg-dark mx-0 py-2">
      <!-- Begin the sidebar accordion.  Within each collapsible "level #" is a list of songs that get progressively harder. -->
      <div class="accordion col-lg-3 col-md-12 px-0 my-4" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Level 1
              </button>
            </h2>
          </div>
          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              <ol>
                <li id="01-hot-cross-buns" class="song-button"><a href="#pdf-viewer">Hot Cross Buns</a></li>
                <li id="01-mary-had-a-little-lamb" class="song-button"><a href="#pdf-viewer">Mary Had A Little Lamb</a></li>
                <li id="01-au-clair-de-la-lune" class="song-button"><a href="#pdf-viewer">Au Claire de la Lune</a></li>
                <li id="01-jingle-bells" class="song-button"><a href="#pdf-viewer">Jingle Bells</a></li>
                <li id="01-rain-rain" class="song-button"><a href="#pdf-viewer">Rain, Rain, Go Away</a></li>
                <li id="01-tisket-tasket" class="song-button"><a href="#pdf-viewer">A Tisket, A Tasket</a></li>
                <li id="01-ode-to-joy" class="song-button"><a href="#pdf-viewer">Ode to Joy</a></li>
                <li id="01-sweetly-sings-the-donkey" class="song-button"><a href="#pdf-viewer">Sweetly Sings the Donkey</a></li>
                <li id="01-go-tell-aunt-rhodie" class="song-button"><a href="#pdf-viewer">Go Tell Aunt Rhodie</a></li>
                <li id="01-banks-of-the-ohio" class="song-button"><a href="#pdf-viewer">Banks of the Ohio</a></li>
              </ol>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Level 2
              </button>
            </h2>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
              <ol>
                <li id="02-pop-goes-the-weasel" class="song-button"><a href="#pdf-viewer">Pop! Goes the Weasel</a></li>
                <li id="02-row-row-row-your-boat" class="song-button"><a href="#pdf-viewer">Row, Row, Row Your Boat</a></li>
                <li id="02-camptown-races" class="song-button"><a href="#pdf-viewer">Camptown Races</a></li>
                <li id="02-swan-lake" class="song-button"><a href="#pdf-viewer">Swan Lake</a></li>
                <li id="02-auld-lang-syne" class="song-button"><a href="#pdf-viewer">Auld Lang Syne</a></li>
                <li id="02-bridal-march" class="song-button"><a href="#pdf-viewer">Bridal March</a></li>
                <li id="02-london-bridge" class="song-button"><a href="#pdf-viewer">London Bridge</a></li>
                <li id="02-five-fat-turkeys" class="song-button"><a href="#pdf-viewer">Five Fat Turkeys</a></li>
                <li id="02-yankee-doodle" class="song-button"><a href="#pdf-viewer">Yankee Doodle</a></li>
                <li id="02-old-macdonald" class="song-button"><a href="#pdf-viewer">Old MacDonald</a></li>
                <li id="02-twinkle-twinkle" class="song-button"><a href="#pdf-viewer">Twinkle, Twinkle Little Star</a></li>
              </ol>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingThree">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Level 3
              </button>
            </h2>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
              <ol>
                <li id="03-baby-bumble-bee" class="song-button"><a href="#pdf-viewer">The Baby Bumble Bee</a></li>
                <li id="03-happy-birthday" class="song-button"><a href="#pdf-viewer">Happy Birthday</a></li>
                <li id="03-bingo" class="song-button"><a href="#pdf-viewer">B-I-N-G-O</a></li>
                <li id="03-ode-to-joy-lefty" class="song-button"><a href="#pdf-viewer">Ode to Joy (LH only!)</a></li>
                <li id="03-alouette" class="song-button"><a href="#pdf-viewer">Alouette</a></li>
                <li id="03-jolly-fisherman" class="song-button"><a href="#pdf-viewer">There Were Three Jolly Fishermen</a></li>
                <li id="03-row-row-row-your-boat" class="song-button"><a href="#pdf-viewer">Row, Row, Row Your Boat</a></li>
                <li id="03-turkey-in-the-straw" class="song-button"><a href="#pdf-viewer">Turkey in the Straw</a></li>
                <li id="03-banks-of-the-ohio" class="song-button"><a href="#pdf-viewer">Banks of the Ohio</a></li>
                <li id="03-ode-to-joy" class="song-button"><a href="#pdf-viewer">Ode to Joy</a></li>
                <li id="03-jingle-bells" class="song-button"><a href="#pdf-viewer">Jingle bells</a></li>
              </ol>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingFour">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                Level 4
              </button>
            </h2>
          </div>
          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
            <div class="card-body">
              <ol>
                <li id="04-beautiful-dreamer" class="song-button"><a href="#pdf-viewer">Beautiful Dreamer</a></li>
                <li id="04-brahms-lullaby" class="song-button"><a href="#pdf-viewer">Brahms' Lullaby</a></li>
                <li id="04-clementine" class="song-button"><a href="#pdf-viewer">Clementine</a></li>
                <li id="04-bullock-cart" class="song-button"><a href="#pdf-viewer">Bullock Cart</a></li>
                <li id="04-wheels-on-the-bus" class="song-button"><a href="#pdf-viewer">The Wheels on the Bus</a></li>
                <li id="04-fur-elise" class="song-button"><a href="#pdf-viewer">Fur Elise</a></li>
                <li id="04-frere-jacques" class="song-button"><a href="#pdf-viewer">Frere Jacques</a></li>
                <li id="04-bahay-kubo" class="song-button"><a href="#pdf-viewer">Bahay Kubo</a></li>
                <li id="04-i-heard-a-robin-singing" class="song-button"><a href="#pdf-viewer">I Heard A Robin Singing</a></li>
                <li id="04-largo" class="song-button"><a href="#pdf-viewer">Largo - from "New World"</a></li>
                <li id="04-skip-to-my-lou" class="song-button"><a href="#pdf-viewer">Skip to my Lou</a></li>
                <li id="04-sonatina-piccolina" class="song-button"><a href="#pdf-viewer">Sonatina Piccolina</a></li>
              </ol>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingFive">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                Level 5
              </button>
            </h2>
          </div>
          <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
            <div class="card-body">
              <ol>
                <li id="05-oh-susanna" class="song-button"><a href="#pdf-viewer">Oh! Susanna</a></li>
                <li id="05-polly-wolly-doodle" class="song-button"><a href="#pdf-viewer">Polly Wolly Doodle</a></li>
                <li id="05-do-do-lenfant-do" class="song-button"><a href="#pdf-viewer">Do, Do, L'enfant Do</a></li>
                <li id="05-jingle-bells" class="song-button"><a href="#pdf-viewer">Jingle Bells</a></li>
                <li id="05-ainsi-ainsi-font-font" class="song-button"><a href="#pdf-viewer">Ainsi, Ainsi, Font, Font</a></li>
                <li id="05-the-muffin-man" class="song-button"><a href="#pdf-viewer">Do You Know the Muffin Man?</a></li>
                <li id="05-au-clair-de-la-lune" class="song-button"><a href="#pdf-viewer">Au Clair de la Lune</a></li>
                <li id="05-thina-singum" class="song-button"><a href="#pdf-viewer">Thina Singum</a></li>
                <li id="05-lazy-mary" class="song-button"><a href="#pdf-viewer">Lazy Mary</a></li>
                <li id="05-a-tisket-a-tasket" class="song-button"><a href="#pdf-viewer">A Tisket, A Tasket</a></li>
                <li id="05-the-irish-washer-woman" class="song-button"><a href="#pdf-viewer">The Irish Washer Woman</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- The PDF viewer.  Not sure how to use objects/iframes, embed seemed easy enough.  JS loops through the .song-button's above and listens for a click, then updates the src attribute of the embed with the correct file path. -->
    <main id="song-main" class="col-lg-9 col-md-12">
      <embed id="pdf-viewer" type="application/pdf" src="">
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
  data() {
      return {
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
        levels: [
          {
            title: 'Level 1',
            index: '1'
          },
          {
            title: 'Level 2',
            index: '2'
          },
          {
            title: 'Level 3',
            index: '3'
          },
          {
            title: 'Level 4',
            index: '4'
          },
        ],
        L1Songs: [
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
        ]
      }
    }
};
</script>

<style lang="scss">

  .news-card {
    height: auto;
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 4rem;
  }

  .news-card-image {
    height: auto;
    padding: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }

  main {
    max-width: 100vw;
    padding: 1.5rem;
  }

</style>
