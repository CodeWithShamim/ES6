const student = {
    name: 'shamim',
    roll: 405876,
    money: 5000,
    isStudent: true,
    subject: ['peripherals', 'electronics', 'object oriented programming'],
}

// keys----
const keys = Object.keys(student);
// console.log(keys);

// values-------
const values = Object.values(student);
// console.log(values);

// entries------------2 dimensional array
const entries = Object.entries(student);
// console.log(entries);



// delete----------------------------------------------
// delete student.name;
// console.log(student);

// can't delete property using 1. seal 2. freeze
// Object.seal(student);
Object.freeze(student);
delete student.name;
console.log(student);