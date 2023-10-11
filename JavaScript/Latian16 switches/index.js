// switch = statement that examines a value
//          for a match against many case clauses.
//          more efficient than many "else if" statement

/*
let grade = "A";

if (grade=="A"){
    console.log("You did great!");
}
else if (grade=="B"){
    console.log("You did good!");
}
else if (grade=="C"){
    console.log("You did okay!");
}
else if (grade=="D"){
    console.log("You passed... barely!");
}
else if (grade=="F"){
    console.log("YOU FAILED!");
}
else if (grade=="B"){
    console.log(grade,"is not a letter grade");
}

*/

/*
let grade = "A";

switch(grade){
    case "A":
        console.log("You did Great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed...barely!");
        break;
    case "F":
        console.log("YOU FAILED");
        break;
    default:
        console.log(grade,"is not a letter grade!")
}
*/

let grade = 59;

switch(true){ //passing true for condition
    case grade >= 90:
        console.log("You did Great!");
        break;
    case grade >= 80:
        console.log("You did good!");
        break;
    case grade >= 70:
        console.log("You did okay!");
        break;
    case grade >= 60:
        console.log("You passed...barely!");
        break;
    case grade < 60:
        console.log("YOU FAILED");
        break;
    default:
        console.log(grade,"is not a letter grade!")
}