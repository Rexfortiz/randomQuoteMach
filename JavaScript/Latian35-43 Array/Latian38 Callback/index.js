// callback = a function passed as an argument to another function.

sum(2, 3, displayDom);

function sum(x, y, callBack){   //callback
    let result = x + y;
    callBack(result);       //calling function from function
}

function displayConsole(output){
    console.log(output);
}

function displayDom(output){
    document.getElementById("myLabel").innerHTML = output;
}