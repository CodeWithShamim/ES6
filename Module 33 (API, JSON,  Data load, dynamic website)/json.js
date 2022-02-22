const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => getData(posts))
};

// call 
getPost();
// ----------------------------------
function getData(posts) {
    const section = document.getElementById('section');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('div');
        div.innerHTML = `<h2>${post.id}</h2>
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        `
        section.appendChild(div);
    }
}