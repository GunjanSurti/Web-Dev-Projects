function calculator (num1 , num2 , operator){
    return operator(num1 , num2);
}

function add(num1 , num2) {
    return num1 + num2
}

function sub(num1 , num2) {
    return num1 - num2;
}


function multiply(num1 ,num2 ) {
    return num1 * num2;
}

function divide(num1 , num2) {
    return num1 / num2;
}

//calculator( 5 , 2 , multiply);
//10

// calculator( 5 , 2 , add);
// 7
//  calculator( 5 , 2 , divide);
// 2.5

