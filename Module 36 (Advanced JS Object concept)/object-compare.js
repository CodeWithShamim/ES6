const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;

// if (first === second) {
//     console.log('object are equal');
// } else {
//     console.log('object are different');
// }
if (first === third) {
    console.log('object are equal');
} else {
    console.log('object are different');
}

// -----------------------------------------------------------
const first2 = { a: 1, b: 2 };
const second2 = { a: 1, b: 2 };
if (JSON.stringify(first2) === JSON.stringify(second2)) {
    console.log("equal");
} else {
    console.log("different");
}


// advanced----------------------------
const first3 = { a: 1, b: 2 };
const second3 = { a: 1, b: 2 };
const compareResult = compareObjects(first3, second3);
console.log(compareResult);

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }

    return true;
}