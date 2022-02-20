class Student {
    constructor(name, roll) {
            this.name = name;
            this.rollll = roll;
        }
        // studentDetails(name, roll) {
        //     console.log(`your name is ${name}. And your roll is ${roll}`)
        // }
    studentDetails() {
        console.log(`your name is ${this.name}. And your roll is ${this.rollll}`)
    }
}

// -------------------create Object---------------------
// const obj = new Student();
// obj.studentDetails('shamim', 405876)
const obj = new Student('shamim', 405876);
const obj2 = new Student('shamim2', 405876);
obj2.studentDetails()