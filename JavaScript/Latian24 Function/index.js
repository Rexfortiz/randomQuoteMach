// function = Define code once, and use it many times.
//            To perform some code, call the function name.

startProgram();

function startProgram(){
    let userName = "Farel";
    let age = 22;

    happyBIrthday(userName,age);
}

function happyBIrthday(userName, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday dear",userName);
    console.log("Happy Birthday to you!");
    console.log("You are",age,"years old!");

}