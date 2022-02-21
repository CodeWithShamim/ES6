// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।

const myArrowFunction = inputValue => inputValue * 5;
// call function
const result = myArrowFunction(10);
console.log(`practice-1> ${result}`);

// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
const myArrowFunction2 = (x, y) => {
    const sum1 = x + 2;
    const sum2 = y + 2;
    const multiplication = sum1 * sum2;
    return multiplication;
}
const result2 = myArrowFunction2(8, 8);
console.log(`practice-2> ${result2}`);

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।
const myArrowFunction3 = (x, y, z) => {
    const multiplication2 = x * y * z;
    return multiplication2;
}
const result3 = myArrowFunction3(2, 3, 4);
console.log(`practice-3> ${result3}`);