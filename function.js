function startFan(){
    console.log ('hello world');
}
startFan();

// Parameter
function totalMoney(money){
    console.log('amar total', money, 'ache');

}
var taka = 500;
totalMoney(taka);

// Return 
//if return is not define then it will be undefined 
function number(num1, num2){
    // var num1 = 30;
    // var num2 = 20;
    var sum = num1 + num2;
    return sum;
}
var total = number(1, 2);
console.log('Total', total);

// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  

function squareNumber(n) {
    var square = n * n;
    return square
}
console.log (squareNumber(4));

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

function fullName(firstName, lastName){
    
    var name = firstName + " " + lastName;
    return name;
}

console.log(fullName('Mahedee', 'Hasan'));

// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

function upperCase(value){
    var result = value.toLowerCase();
    return result
}
console.log(upperCase('MAHEDEE'));

// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 