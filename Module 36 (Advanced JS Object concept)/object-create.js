//1. using object literal------------ 
const players = { name: 'sakib al hasasn', position: 'cricketer' };

//2. using object constructor-------------------
// const obj = new Object();
const obj = new Object({ name: 'hello' });
console.log(obj);

// 3.--------------inherite
// const human = Object.create(null);
const human = Object.create(players);
console.log(human);


// syntactical sugar================================
// function

function Manus(name) {
    this.name = name;
}

const man = new Manus('shamim');
console.log(man);