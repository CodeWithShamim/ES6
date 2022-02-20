const products = [
    { name: 'iphone', price: 40000, color: 'blue' },
    { name: 'laptop', price: 70000, color: 'white' },
    { name: 'desktop', price: 50000, color: 'black' },
    { name: 'watch', price: 2000, color: 'black' }
]

// use forEach & arrow function
products.forEach(product => console.log(product.name));