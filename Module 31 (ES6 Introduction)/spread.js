const myArray = [10, 20, 30, 40, 50, 60, 70, 80]
    // spread operator ...
console.log(...myArray);
// push 
myArray.push(1000)
    // max 
const maximumValue = Math.max(...myArray);
console.log("maxmimum value", maximumValue);

const newArray = [...myArray, 100];

console.log(newArray);