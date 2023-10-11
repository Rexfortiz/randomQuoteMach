let fullName = "Thomas Farel";
let firstName;
let lastName;

//firstName = fullName.slice(0,6);
//lastName = fullName.slice(7); //can be (7,12) || fill only [0] if [1] is end

firstName = fullName.slice(0, fullName.indexOf(" "))
lastName = fullName.slice(fullName.indexOf(" ")+1)

console.log(firstName);
console.log(lastName);