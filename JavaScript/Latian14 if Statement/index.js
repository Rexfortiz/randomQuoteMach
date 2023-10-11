// if statement = a basic form of decision making

let age = window.prompt("Enter Your Age");
if (age >= 18 && age < 100){
    console.log("You're an adult!");
}
else if(age < 0){
    console.log("You're not born yet!");
}
else if(age >= 100){
    console.log("You're a legend!");
}
else{
    console.log("You're a child!");
}