const profiles = [
  {
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Node", "Express"
    ]
  },
  {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "JavaScript", "C", "Go"
    ]
  },
  {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS"
    ]
  },
  {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
  }
]

// Only run code once the page is laoded, so it isn't looking for elements that don't exist yet

document.addEventListener("DOMContentLoaded", function(event) {

  // Loop through object in the array
  profiles.forEach(function(el) {

    // Within each object,
    let list = document.createElement('div')
    list.classList.add('outer-gray')
    list.innerHTML = `

          <div class="main-white">

        <div class="photo-header">
          <img id="headshot" src="/img/headshot.jpg" alt="the handsomes front-end dev">
          <div class="header">
            <h1>${el.name}</h1>
            <h2>${el.jobTitle}</h2>
          </div>
        </div>

        <div class="info">
          <table>
            <tr>
              <td>
                <h3>Company:</h3>
                <p>${el.company}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Experience:</h3>
                <p>${el.experience}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>School:</h3>
                <p>${el.school}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Major:</h3>
                <p>${el.major}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Email:</h3>
                <p>${el.email}</p>
              </td>
            </tr>
          </table>
          <div class="linkedin">
            <img src="/img/linkedin.svg" alt="Linkedin Logo Icon">
            <p>${el.linkedInUrl}</p>
          </div>
        </div>

      </div>
      </div>
    `

    const container = document.querySelector('.template-hook')
    container.append(list)
  })

});
