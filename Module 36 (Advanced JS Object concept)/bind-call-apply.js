const student = {
    name: 'roul',
    roll: 405876,
    money: 5000,
    treatAmount: function(expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        return this.money;
    }


}

const shaimIslam = {
    name: 'shamim islam',
    roll: 405876,
    money: 7000,
    isStudent: true
}

// bind-----------------------------------------------
// const bind = student.treatAmount.bind(shaimIslam);
// console.log(bind(3000));

// call----------------------------------------------- using , separat
const call = student.treatAmount.call(shaimIslam, 2000, 100, 50);
console.log(call);

// apply-----------------------------------------------using array
const apply = student.treatAmount.apply(shaimIslam, [2000, 100, 50]);
console.log(apply);