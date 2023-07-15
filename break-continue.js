// break condition

var numbers = [12, 20, 30, 40, 34, 67, 9, 19, 30];
for( var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log( number);
    if(number > 50){
        break;
    }
}

// continue condion

var numbers = [12, 20, 30, 40, 34, 67, 9, 19, 30];
for( var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log( number);
    if(number > 50){
        continue;
    }
}