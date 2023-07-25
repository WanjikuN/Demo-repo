console.log("TEST")
// const {fetch} = require('cross-fetch');

// GET, POST, PUT, DELETE

// Anatomy of the fetch.  Anatomy of any subsequent parameter
// Anatomy of the base_url

// GET => one argument.
const base_url = 'http://localhost:3000/students'
let listy = document.getElementById('listy')
let studentForm = document.getElementById('studentForm')


// select element
// create a child element
// add the data as the content
// append the child element

fetch(base_url)
.then(response  => response.json())
.then(data => {
    data.forEach(i => {
        let li = document.createElement('li')
        li.innerHTML = `
            <p>
                <h4>Name: ${i.name}</h4>
                <h6>Age: ${i.age}</h6>
                <h5>Major: ${i.major}</h5>
            </p>
        `
        listy.appendChild(li)
    });
})

// POST => 2 arguments
// method, headers, body



let addStudent = (e) =>{
    e.preventDefault();

    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const major = document.getElementById("major").value
    const email = document.getElementById("email").value

    const newStudent = {
        name: name,
        age: age,
        major: major,
        email: email,
    }

    fetch(base_url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStudent)
        
    })
    .then(res => res.json())
    .then(data =>{'newStudent: ',data})
}

studentForm.addEventListener('submit',addStudent)




