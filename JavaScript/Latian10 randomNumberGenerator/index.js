

test = function(){
    let x = Math.round(Math.random() *6)+1;
    console.log(x);
    document.getElementById("number").innerHTML = x;
}

document.getElementById("btn").onclick = function(){
    test();
}