// closure&Encapsulation&private-variable
function stopWatch() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
// result1--------
const result1 = stopWatch();
console.log(result1());
console.log(result1());
console.log(result1());

// result2-------------
console.log('---------------------------------');
const result2 = stopWatch();
console.log(result2());
console.log(result2());