// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Declare arrays at global scope
  let data1 = [2, 3, 5, 7, 11, 13, 17]
  let data2 = []

  // Find #form1, and handle its submit event
  const form1 = document.querySelector('#form1')
  form1.addEventListener('submit', function(event){

    // Prevent the form from trying to submit to a server
    event.preventDefault()

    const inputField1 = document.querySelector('#form1 .input')
    const userInput1 = inputField1.value
    const userNumber1 = parseInt(userInput1)

    // If the user's input was a number, multiply each number in the array by it.
    if(!isNaN(userNumber1)){
      data2 = data1.map(x => x * userNumber1)

      // Output the new array.
      document.querySelector('#form1 .output').innerHTML = data2
    }

    // Lock the first input box visually and functionally, so the other forms can be consistent.
    inputField1.classList.add("locked")
    inputField1.setAttribute("readonly", "")

  })

  // Find #form2, and handle its submit event
  const form2 = document.querySelector('#form2')
  form2.addEventListener('submit', function(event){

    // Prevent the form from trying to submit to a server
    event.preventDefault()

    const inputField2 = document.querySelector('#form2 .input')
    const userInput2 = inputField2.value
    const userNumber2 = parseInt(userInput2)

    // If the user's input was a number, find out if it's lower than ALL the entries.
    if(!isNaN(userNumber2)){
      const isHigher = data2.every(x => x > userInput2)
        // Output the response.
        if(isHigher) {
          document.querySelector('#form2 .output').innerHTML = `Yes!  They're all higher than ${userInput2}`
        } else {
          document.querySelector('#form2 .output').innerHTML = `No, at least one is lower than ${userInput2}`
        }
    }

    // Lock the box.
    inputField2.classList.add("locked")
    inputField2.setAttribute("readonly", "")

  })

  // Find #form3, and handle its submit event
  const form3 = document.querySelector('#form3')
  form3.addEventListener('submit', function(event){

    // Prevent the form from trying to submit to a server
    event.preventDefault()

    const inputField3 = document.querySelector('#form3 .input')
    const userInput3 = inputField3.value
    const userNumber3 = parseInt(userInput3)

    // If the user's input was a number, find out if it's lower than ANY of the entries.
    if(!isNaN(userNumber3)){
      const isHigher = data2.some(x => x > userInput3)
        // Output the response.
        if(isHigher) {
          document.querySelector('#form3 .output').innerHTML = `Yes!  At least one number is higher than ${userInput3}`
        } else {
          document.querySelector('#form3 .output').innerHTML = `No, none of the numbers are higher than ${userInput3}`
        }
    }

    // Lock the box.
    inputField3.classList.add("locked")
    inputField3.setAttribute("readonly", "")

  })

})
