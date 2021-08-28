// Finding the relevant elements in the DOM

let needle = document.getElementById("needle")
let form = document.getElementById("wobble-form");
let input = document.getElementById("wobble-factor");
let html = document.querySelector("html");

// When user enters the number and clicks submit...

form.addEventListener("submit", function(e) {

  // ...prevent the page reload...
  e.preventDefault();

  // ...change the wobble factor, CSS variable that the animation calcs from
  html.style.setProperty('--wobble-factor', input.value);

  // This is a method I found for restarting an infinite Animation.  It consists of removing the animation class, triggering a "reflow", and add the class back.  Source: https://css-tricks.com/restart-css-animation/

  needle.classList.remove("needle-animation");
  void needle.offsetWidth;
  needle.classList.add("needle-animation");
})
