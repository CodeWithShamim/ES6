class Add {
    constructor(name, roll) {
        this.name = name;
        this.rollll = roll;
    }
}

class Student extends Add {
    constructor(name, roll, id) {
        super(name, roll)
        this.id = id;
    }

    // studentDetails(name, roll) {
    //     console.log(`your name is ${name}. And your roll is ${roll}`)
    // }
    studentDetails() {
        console.log(`your name is ${this.name}. And your roll is ${this.rollll}------id-${this.id}`)
    }
}

// -------------------create Object---------------------
// const obj = new Student();
// obj.studentDetails('shamim', 405876)
const obj = new Student('shamim', 405876, 99);
obj.studentDetails()