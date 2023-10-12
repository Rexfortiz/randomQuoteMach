// function expression = function without a name (anonymous function)
//                       avoid polluting the global scope with names
//                       Write it, then forget about it

const greeting = function(){
    console.log("Hello!");
}

greeting();
let count=0

document.getElementById("increase").onclick = function(){
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("decrease").onclick = function(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}