// ternary operator = Shortcut for an 'if/else statement'
//                    Takes 3 operands

//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False

// condition ? exprIfTrue : exprIfFalse

let adult = checkAge(12);
console.log(adult)

function checkAge(age){

    /*
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
    */

    return age >= 18 ? true : false;

}

console.log(checkWinner(true));

function checkWinner(win){
    return win ? "YEAYYY" : "OHMAGA";
}


