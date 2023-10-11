// type conversion = change datatype of a value to another
//                        (string, numbers, booleans)

/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
age += 1;

console.log("Happy BIrthday! you are", age,"years olds");
*/

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("") //if boolean empty, it means false. if not empty, then true

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


let i = 50;
let j = window.prompt("50 + ...");

console.log(i+Number(j));