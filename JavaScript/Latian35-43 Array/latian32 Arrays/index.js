// array = think of it as a variable
//          that can store multiple values

let fruits = ["apple", "orange", "banana"];

//fruits[0] = "coconut"

fruits.push("lemon");   // add an element
fruits.pop();           //remove last element
fruits.unshift("mango");// add element to beginning
fruits.shift();         // remove element from beginning

let length = fruits.length;
let index = fruits.indexOf("apple");

console.log(fruits);
console.log(length);
console.log(index);