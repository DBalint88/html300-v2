let viewer = document.getElementById('pdf-viewer');
let buttons = document.getElementsByClassName('song-button');

let imageLoader = function() {
  viewer.src = "/images/pdfs/" + this.id + '.pdf'
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', imageLoader);
}
