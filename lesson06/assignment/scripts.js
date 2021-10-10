
// Make selectors for the critical elemnts, the viewer (embed tag) and the song buttons.
let viewer = document.getElementById('pdf-viewer');
let buttons = document.getElementsByClassName('song-button');

// When a song button is click, take its ID and make it the file path for the viewer's src attribute.
let imageLoader = function() {
  viewer.src = "images/pdfs/" + this.id + '.pdf'
};

// "buttons" above selects all of the buttons in an HTML object.  This loops through that object listening for clicks, then sends the clicked button to imageLoader
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', imageLoader);
}
