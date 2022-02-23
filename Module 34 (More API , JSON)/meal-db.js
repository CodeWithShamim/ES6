const mealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
const loadData = () => {
    fetch(mealUrl)
        .then(res => res.json())
        .then(data => getData(data))
};
loadData();

const getData = meals => {
    for (const meal of meals.meals) {
        console.log(meal.strCategory);
    }
}