// nested loop = a loop inside of another loop

let symbol = window.prompt("Enter symbol");
let rows = window.prompt("Enter number of rows");
let column = window.prompt("Enter number of column");5

for(let i = 1; i <= rows; i += 1){
    for(let j = 1; j <= column; j += 1){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}