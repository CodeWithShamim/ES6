// advanced
const student = {
    name: 'shamim',
    roll: 405876,
    money: 5000,
    isStudent: true,

}

for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
}