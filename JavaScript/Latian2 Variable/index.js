// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let firstName = "Farel";
let age = 21;
let student = true;


console.log("Nama:",firstName);
console.log("Umur: "+age);
console.log("Status Pelajar: "+student);

document.getElementById("p1").innerHTML = "Hello " +firstName;
document.getElementById("p2").innerHTML = "You are " +age+ " years old";
document.getElementById("p3").innerHTML = "enrolled: "+student;