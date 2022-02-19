function sumation(...values) {
    // console.log(values) //return array 
    let sum = 0;
    for (const value of values) {
        sum = sum + value;
    }
    return sum;

}

const result = sumation(100, 200, 300, 400);
console.log(result);