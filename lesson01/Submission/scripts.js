// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Declare arrays and forms at global scope
  let data1 = [2, 3, 5, 7, 11, 13, 17]
  let data2 = []
  const form1 = document.querySelector('#form1')
  const form2 = document.querySelector('#form2')
  const form3 = document.querySelector('#form3')
  const form4 = document.querySelector('#form4')
  const form5 = document.querySelector('#form5')
  const form6 = document.querySelector('#form6')
  const thanks = document.querySelector("#thanks")

  // Find #form1, and handle its submit event
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

    // Reveal the next question
    form2.classList.remove("invisible")

  })


/* FORM 2 FORM 2 FORM 2 FORM 2 FORM 2 FORM 2 FORM 2 FORM 2 FORM 2 */


  // Find #form2, and handle its submit event

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

    // Reveal the next question
    form3.classList.remove("invisible")
  })


/* FORM 3 FORM 3 FORM 3 FORM 3 FORM 3 FORM 3 FORM 3 FORM 3 FORM 3 */


  // Find #form3, and handle its submit event

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

    // Reveal the next question
    form4.classList.remove("invisible")

  })


/* Form 4 Form 4 Form 4 Form 4 Form 4 Form 4 Form 4 Form 4 Form 4 Form 4 */


  // Find #form4, and handle its submit event

  form4.addEventListener('submit', function(event){

    // Prevent the form from trying to submit to a server
    event.preventDefault()

    const inputField4 = document.querySelector('#form4 .input')
    const userInput4 = inputField4.value
    const userNumber4 = parseInt(userInput4)

    // If the user's input was a number, find out if it's in the new array.
    if(!isNaN(userNumber4)){
      const isPresent = data2.filter(x => x == userInput4)
        // Output the response.
        if(isPresent.length >= 1) {
          document.querySelector('#form4 .output').innerHTML = `Yes! ${userInput4} is in the array!`
        } else {
          document.querySelector('#form4 .output').innerHTML = `No, ${userInput4} is not in the array.`
        }
    }

    // Lock the box.
    inputField4.classList.add("locked")
    inputField4.setAttribute("readonly", "")

    // Reveal the next question
    form5.classList.remove("invisible")

  })


  /* Form 5 Form 5 Form 5 Form 5 Form 5 Form 5 Form 5 Form 5 Form 5 Form 5 */


    // Find #form5, and handle its submit event

    form5.addEventListener('submit', function(event){

      // Prevent the form from trying to submit to a server
      event.preventDefault()

      const inputField5 = document.querySelector('#form5 .input')
      const userInput5 = inputField5.value
      const userNumber5 = parseInt(userInput5)

      // If the user's input was a number, find out what the next higher number in the array is.
      if(!isNaN(userNumber5)){
        const nextHighest = data2.find(x => x > userInput5)
          // Output the response.
          if(typeof nextHighest === 'undefined') {
            document.querySelector('#form5 .output').innerHTML = `${userNumber5} is higher than all the numbers in the array!`
          } else {
            document.querySelector('#form5 .output').innerHTML = `${nextHighest} is the next highest number in the array.`
          }
      }

      // Lock the box.
      inputField5.classList.add("locked")
      inputField5.setAttribute("readonly", "")

      // Reveal the next question
      form6.classList.remove("invisible")

    })


    /* Form 6 Form 6 Form 6 Form 6 Form 6 Form 6 Form 6 Form 6 Form 6 Form 6 */


      // Find #form6, and handle its submit event

      form6.addEventListener('submit', function(event){

        // Prevent the form from trying to submit to a server
        event.preventDefault()

        const inputField6 = document.querySelector('#form6 .input')
        const userInput6 = inputField6.value
        const userNumber6 = parseInt(userInput6)

        // If the user's input was a number, push it to the array and sum it all.
        if(!isNaN(userNumber6)){
          data2.push(userNumber6)
          console.log(data2)
          const sum = data2.reduce((total, element) => {
            return total + element;
          }, 0);
          console.log(sum)
            // Output the response.
              document.querySelector('#form6 .output').innerHTML = `Your number, ${userNumber6}, plus all the other numbers in the array equals: ${sum}!`


        }

        // Lock the box.
        inputField6.classList.add("locked")
        inputField6.setAttribute("readonly", "")

        // Reveal the thank you note
        thanks.classList.remove("invisible")

      })

})
