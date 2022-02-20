// filter---------------------------------
// const products = [
//     { name: 'iphone', price: 40000, color: 'blue' },
//     { name: 'laptop', price: 70000, color: 'white' },
//     { name: 'desktop', price: 50000, color: 'black' },
//     { name: 'watch', price: 2000, color: 'black' }
// ]

// const myFilterResult = products.filter(product => product.price > 50000);
// const myFilterResult2 = products.filter(product => product.color == 'black');
// console.log(myFilterResult);
// console.log(myFilterResult2);

// find----------------------
const products = [
    { name: 'iphone', price: 40000, color: 'blue' },
    { name: 'laptop', price: 30000, color: 'white' },
    { name: 'desktop', price: 60000, color: 'black' },
    { name: 'watch', price: 2000, color: 'black' }
]

const myFindResult = products.find(product => product.price < 50000);
const myFindResult2 = products.find(product => product.color == 'black');
console.log(myFindResult); //retun object only first item
console.log(myFindResult2);