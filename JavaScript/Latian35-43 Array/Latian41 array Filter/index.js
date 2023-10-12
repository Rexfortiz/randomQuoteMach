// array.filter() = creates a new array with all elements
//                  that pass the test provided by a function

let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge) //filter will show only iterate 
adults.forEach(print);              // true or false the element is.

function checkAge(element){
    return element >= 18;
}

function print(element){
    console.log(element);
}