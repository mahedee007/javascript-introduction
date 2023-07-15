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