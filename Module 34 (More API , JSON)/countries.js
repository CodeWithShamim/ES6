const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();
const displayCountries = (countries) => {
    const div = document.getElementById('countries');
    countries.forEach(country => {
        const div2 = document.createElement('div');
        div2.classList.add('div');

        const h3 = document.createElement('h3');
        h3.innerText = `Country Name: ${country.name.common}`;
        div2.appendChild(h3);


        const p = document.createElement('p');
        p.innerText = `Capital: ${country.capital}`;
        if (country.capital == undefined) {
            p.innerText = `Ohh!! Capital can't find in this Country!`;
            div2.appendChild(p);
        } else {

            div2.appendChild(p);
        }




        div.appendChild(div2);




    });
};