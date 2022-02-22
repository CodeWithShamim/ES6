// JavaScript Object Notation--------------JSON
function myJsonData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => getData(data))
}

// call 
myJsonData()

// ------------------------
function getData(data) {
    const ul = document.getElementById('list-item');
    const section = document.getElementById('section');
    for (const user of data) {
        const li = document.createElement('li');
        li.classList.add('li');
        const name = document.createElement('h3');
        name.innerText = user.name;
        li.innerHTML = user.email;
        ul.appendChild(li);
        section.appendChild(name)
    }
}