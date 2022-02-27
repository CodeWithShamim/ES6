const student = {
    name: 'shamim',
    roll: 405876,
    money: 5000,
    isStudent: true,
    treatAmount: function(expense) {
        this.money = this.money - expense;
        return `${this.name} your balance is ${this.money}`;
    }


}

const shaimIslam = {
    name: 'shamim islam',
    roll: 405876,
    money: 7000,
    isStudent: true
}

const bind = student.treatAmount.bind(shaimIslam);

console.log(bind(3000));
console.log(bind(3000));