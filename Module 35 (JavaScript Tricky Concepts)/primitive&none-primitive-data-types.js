/* 
datatype-------------------- 7:
1. number
2. string
3. boolean
4. undefined
5. null
6. object
7. symbol

*/

// primitive-------------------
let a = 'hello';
let b = a;
console.log(a, b);
a = 'hi'
console.log(a, b);

// None-primitive-------------------
let A = { job: 'web developer' };
let B = A;
console.log(A, B);
// A.job = "Front end developer";
B.job = "Front end developer";
console.log(A, B);