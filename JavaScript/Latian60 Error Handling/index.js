// error = object with a description of
//         something went wrong

//         Can't open a file
//         Lose connection
//         User types incorrect input
//         TypeError

// throw = executes a user-defined error

try{
    let x = window.prompt("Enter a #");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number!";
    if(x == "") throw "That was EMPTY";

    console.log(`${x} is a number`);
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always exec");
}