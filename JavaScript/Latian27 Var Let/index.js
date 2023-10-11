// variable scope = where a variable is accessible

// let = variables are limited to block scope{}
// var = variables are limited to a function(){}

// global variable = is declared outside any function
// (var will Change browser's window properties if declare in global)

let name = "Farel"; //global variable

doSomething()

function doSomething(){
    for(var i=1; i <= 3; i += 1){
        //console.log(i);
    }
}

console.log(i);