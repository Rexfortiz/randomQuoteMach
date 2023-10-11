let sideA;
let sideB;
let sideC;

document.getElementById("submit").onclick = function(){
    sideA = document.getElementById("sideA").value;
    sideB = document.getElementById("sideB").value;
    sideC = Math.sqrt(Math.pow(sideA,2) + Math.pow(sideB,2));
    document.getElementById("answer").innerHTML = "Side C is "+sideC
    console.log(sideC);
}