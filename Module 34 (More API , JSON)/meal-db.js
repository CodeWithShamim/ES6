const search = () => {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    inputField.value = "";


    // fetch data 
    const mealUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldValue}`;
    const loadData = () => {
        fetch(mealUrl)
            .then(res => res.json())
            .then(data => getData(data))
    };
    loadData();

    const getData = data => {
        const rowParent = document.getElementById('row-parent');
        for (const meal of data.meals) {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div onclick="loadFoodDetails(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">
                            ${meal.strInstructions.slice(0,200)}
                        </p>
                    </div>
                </div>
              `;

            rowParent.appendChild(div);
        }
    }
}

const loadFoodDetails = id => {
    detaiilsUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(detaiilsUrl)
        .then(res => res.json())
        .then(data => getDetailsData(data))
}

const getDetailsData = data => {
    const meals = data.meals[0];
    const mealsDetails = document.getElementById('meals-details');

    const div = document.createElement('div');
    div.classList.add('card');
    mealsDetails.innerHTML = `
            <img  src="${meals.strMealThumb}" class=" rounded img-fluid card-img-top" alt="..." />
            <div class="card-body">    
                <div class="text-center">
                <h5 class="card-title">${meals.strMeal}</h5>
                <p class="card-text">
                ${meals.strInstructions.slice(0,500)}
                </p>
                <a href="${meals.strYoutube}" class=" btn btn-primary ">MORE DETAILS</a>
                </div>
            </div>
    `;

    mealsDetails.appendChild(div);
}