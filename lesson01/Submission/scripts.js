// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the #form1, and handle its submit event
  const form1 = document.querySelector('#form1')

  form1.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data1 = [2, 3, 5, 7, 11, 13, 17]

    const inputField1 = document.querySelector('#form1 .input')
    const userInput1 = inputField1.value
    const userNumber1 = parseInt(userInput1)

    // If the user's input was a number, multiply each number in the array by it.
    if(!isNaN(userNumber1)){
      const data2 = data1.map(x => x * userNumber1)

      // Output the new array.
      document.querySelector('#form1 .output').innerHTML = data2
      console.log(data2)

    }

    // Lock the first input box visually and functionally, so the other forms can be consistent.
    inputField1.classList.add("locked")
    inputField1.setAttribute("readonly", "")

  })



})
