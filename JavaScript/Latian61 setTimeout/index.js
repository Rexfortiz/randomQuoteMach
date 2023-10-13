// setTimout() invokes a function after a number of milliseconds
//              asynchronous function (doesn't pause execution)

let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price){
    alert(`BUY THIS ${item} FOR ${price}!`);
}

function secondMessage(){
    alert(`THIS IS NOT A SCAM!`);
}

function thirdMessage(){
    alert(`DO IT!`);
}

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`thanks for buying <3`)
}