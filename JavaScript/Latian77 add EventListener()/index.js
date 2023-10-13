// .addEventListener(event, function, useCapture)
// You can add many event handler to one element.
// Even the same event that invokes different functions

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");
 
//innerDiv.addEventListener("mouseover", changeRed);
//innerDiv.addEventListener("mouseout", changeGreen);

innerDiv.addEventListener("click", changeRed);     // when 2 object handle function at the same time
outerDiv.addEventListener("click", changeRed, true);



/*
function changeRed(){
    innerDiv.style.backgroundColor = "red";
}
*/
function changeRed(){
    alert("You Selected"+this.id)
    this.style.backgroundColor = "pink";
}
