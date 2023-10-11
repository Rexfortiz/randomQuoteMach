/*
    aritmetic expressions is a combination of
    operands (values, variables, etc.)
    operators (+ - * / %)
    that can be evaluated to a value
    ex. y = x +5
*/

let students = 20;

//students += 1;
//students -=1;
//students *=5;
//students /= 2 
let extraStudents = students % 3;



console.log(extraStudents);

/*
    operator precedence
    1. parenthesis()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

let result = 1 + 2 * (3+4);

console.log(result);

