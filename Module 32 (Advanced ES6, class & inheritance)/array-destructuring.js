// array destructuring
const [a, b, name] = [10, 20, 'shamim', 30, 40];
// console.log(a);
// console.log(b);
// console.log(name);

// --------------------------------------------------------------
// Error handle..........
const student = {
    Id: 1,
    details: {
        dept: 'computer',
        sub: 'computer',
        group: 'B',
        roll: 405876,
        shift: '1st',
        Name: 'shamim'
    },
    experience: 'web-developer'
}

console.log(student.details.dept);
// Error handle use ???? before .........
console.log(`${student?.t?.dept}`);