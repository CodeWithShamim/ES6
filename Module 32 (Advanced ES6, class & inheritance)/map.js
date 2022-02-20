// 1. for of loop
// 2. function
// 3.push
function getFunction(x) {
    // console.log(x);
    return x * x;

}
const myArray = [10, 20, 30, 40, 50];
const myMapResult = myArray.map(getFunction);
console.log(myMapResult);