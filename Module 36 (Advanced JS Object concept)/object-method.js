const student = {
    name: 'shamim',
    roll: 405876,
    money: 5000,
    isStudent: true,
    subject: ['peripherals', 'electronics', 'object oriented programming'],
    id: {
        name: 'rof',
        secton: 24,
        sub: 'programming'
    },
    midTerm: function(name) {
        console.log(this.roll, "is your roll");
        console.log('hello', name);
    },
    treatAmount: function(expense) {
        this.money = this.money - expense;
        return this.money;
    }


}

// const exam = student.midTerm('shamim');
// console.log(exam);


const result1 = student.treatAmount(500);
const result2 = student.treatAmount(500);
console.log(result1);
console.log(result2);