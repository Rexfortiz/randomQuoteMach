// Canvas API = a means for drawing graphics
//              used for animations, games, data visualize

let canvas1 = document.getElementById("myCanvas1");
let context1 = canvas1.getContext("2d");

context1.lineWidth = 5;
context1.strokeStyle = "blue";

context1.beginPath();
context1.moveTo(0, 0);
context1.lineTo(200, 200);
context1.lineTo(200, 400);
context1.moveTo(400, 0);
context1.lineTo(200, 200);
context1.stroke();


//Draw Triangle
let canvas2 = document.getElementById("myCanvas2");
let context2 = canvas2.getContext("2d");

context2.fillStyle = "yellow";
context2.lineWidth = 5;
context2.strokeStyle = "green";
context2.beginPath();
context2.moveTo(200,0);
context2.lineTo(0,200);
context2.lineTo(400,200);
context2.lineTo(200,0);
context2.stroke();
context2.fill();

//Draw Rectangle
let canvas3 = document.getElementById("myCanvas3");
let context3 = canvas3.getContext("2d");

context3.fillStyle = "blue";
context3.fillRect(0,0,200,200)
context3.lineWidth = 5;
context3.strokeStyle = "green";
context3.strokeRect(0,0,200,200)

context3.fillStyle = "red";
context3.fillRect(0,200,200,400)
context3.lineWidth = 5;
context3.strokeStyle = "blue";
context3.strokeRect(0,200,200,400)
 
context3.fillStyle = "green";
context3.fillRect(200,0,400,200)
context3.lineWidth = 5;
context3.strokeStyle = "black";
context3.strokeRect(200,0,400,200)

context3.fillStyle = "yellow";
context3.fillRect(200,200,400,400)
context3.lineWidth = 5;
context3.strokeStyle = "black";
context3.strokeRect(200,200,400,400)

//Draw Circle
//(x,y,r,sAngle,eAngle, counterclockwise)
let canvas4 = document.getElementById("myCanvas4");
let context4 = canvas4.getContext("2d");

context4.fillStyle = "blue";
context4.strokeStyle = "black";
context4.lineWidth = 5;
context4.beginPath();
context4.arc(200, 200, 100, 0, 2 * Math.PI);
context4.stroke();
context4.stroke();
context4.fill();

//Draw Text 
let canvas5 = document.getElementById("myCanvas5");
let context5 = canvas5.getContext("2d");

context5.font = "50px MV Boli";
context5.fillStyle = "grey";
context5.textAlign = "center";
context5.fillText("You WIN", canvas5.width / 2, canvas5.height / 2);
