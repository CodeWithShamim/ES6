// 0 is False & other  positive-negative number is True 
// empty string is False & white space || any string is True 
// undefined is False 
// null is False 
// empty array & empty object is True 

// let x = "";
// let x;
// let x = null;
// let n = parseInt('hello');
// console.log('Value of n', n);
// console.log('Value of x', x);

// let x = [];
let x = {};
if (x) {
    console.log('Variable is True');
} else {
    console.log('Variable is False');
}