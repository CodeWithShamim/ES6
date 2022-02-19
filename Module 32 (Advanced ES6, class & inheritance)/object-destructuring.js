const fish = {
    id: 100,
    name: 'hisha',
    color: 'silver',
    phone: '01762000000',
    address: 'dhaka-1200, savar'
}

// ------------------
// destructuring
const { id, name, color, phone, address } = fish;
console.log(id);
console.log(name);
console.log(color);
console.log(phone);
console.log(address);

// nested object & destructuring
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

// ------------destructuring------------
const { Id, dept, sub, group, roll, shift, Name } = student.details;
console.log(`----------------${Id}--------------------`); //undefined

console.log(dept);
console.log(sub);
console.log(group);
console.log(roll);
console.log(shift);
console.log(Name);