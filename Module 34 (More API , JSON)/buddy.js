const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => displayBuddies(data))
};

loadBuddies()

const displayBuddies = (buddies) => {
    console.log(buddies);
    const buddySection = document.getElementById('buddy');
    for (const buddy of buddies.results) {
        const div = document.createElement('div');
        div.classList.add('div');

        const img = document.createElement('img');
        img.classList.add('buddy');
        img.src = buddy.picture.large;

        const h4 = document.createElement('h4');
        h4.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;
        h4.classList.add('p')

        const p = document.createElement('p');
        p.innerHTML = `Email: ${buddy.email}`;
        p.classList.add('p')


        div.appendChild(img);
        div.appendChild(h4);
        div.appendChild(p);



        buddySection.appendChild(div);

    }
}