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

// 1) Write a function called foo() which prints “foo” and a function called bar() which prints
// “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
// the foo() to see the output.

function foo() {
    console.log("foo");
    bar();
}
function bar() {
    console.log("bar");
}
foo();

// 2) Write a function called make_avg() which will take an three integers and return the
// average of those values.

// s

// 3) Challenging: Write a function called make_avg() which will take an array of integers and
// the size of that array and return the average of those values.

// 4) Write a function called odd_even() which takes an integer value and tells whether this
// value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter

// Practise Task

// 5) You are in a hurry to go to your school on time. But when you are crossing the road, the
// traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
// danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
// coloured traffic signal, you should cross the road. So write a JS code, where there is a
// variable called signal. Its value can be green, yellow or red & we will get different activities as
// output depending on the variable. So, hurry up.