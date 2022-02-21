// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
const myArray = [10, 20, 30, 40, 50, 60, 70];
const mapResult = myArray.map(x => x * 5);
console.log(mapResult);


// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো
const myArray2 = [10, 11, 12, 13, 14, 15, 16];
// const mapResult2 = myArray2.filter(x => x % 2 != 0);
const mapResult2 = myArray2.filter(x => x % 2);
console.log(mapResult2);


// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।
const products = [
    { name: 'laptop1', price: 50000, color: 'white' },
    { name: 'laptop2', price: 30000, color: 'white' },
    { name: 'laptop3', price: 60000, color: 'white' },
    { name: 'laptop4', price: 30000, color: 'white' },
    { name: 'laptop5', price: 20000, color: 'white' },
    { name: 'laptop6', price: 45000, color: 'white' },
    { name: 'laptop7', price: 30000, color: 'white' },
    { name: 'laptop8', price: 70000, color: 'white' },
    { name: 'laptop9', price: 40000, color: 'white' },
    { name: 'laptop10', price: 20000, color: 'white' }
]
const findResult = products.find(product => product.price > 50000);
console.log(findResult);