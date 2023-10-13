function doSomething(){
    //alert("You did something!");
    element.style.backgroundColor = "pink";
}

function doSomethingElse(){
    element.style.backgroundColor = "lightBlue";
}
 
//const element = document.getElementById("myButton");
//const element = document.getElementById("myText");
//const element = document.body;
const element = document.getElementById("myDiv");

//element.onload = doSomething;
//element.onclick = doSomething;
//element.onchange = doSomething;
//element.onmouseover = doSomething;
//element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

//const element = document.getElementById("myButton").onclick = function(){
//    alert("You did something!");
//}