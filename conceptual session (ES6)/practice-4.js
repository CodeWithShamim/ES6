// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const student = {
    name: 'shamim',
    details: {
        id: [10, 20, 30, 40],
        roll: 405876,
        group: 'B',
        shift: '1st',
        deperment: {
            dName: 'computer-dName',
            sub: 'computer-sub'
        },
    },
    technology: 'computer',
    ins: 'RPIR'
}

console.log(student.details.deperment.dName);
console.log(student.details.id);