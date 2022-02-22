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
    for (const user of data) {
        const li = document.createElement('li');
        li.innerHTML = user.email;
        ul.appendChild(li);
    }
}