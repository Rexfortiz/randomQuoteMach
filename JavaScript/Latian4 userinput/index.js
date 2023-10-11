//how to accept user input

// Window Prompt

//let username = window.prompt("What's your name");
//console.log(username);

// Difficult way HTML textbox

let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello "+username;
} 