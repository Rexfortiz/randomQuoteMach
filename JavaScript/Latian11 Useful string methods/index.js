// useful string properties and methods

let userName = "  Thomas Farel ";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(7));
console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));
//==================================//
userName= userName.trim(); //to get rid any empty space

console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

console.log(phoneNumber.replaceAll("-","")); //[0] = target to replace, [1]=thing to replace 