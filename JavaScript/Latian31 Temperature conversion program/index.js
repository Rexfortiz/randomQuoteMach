let temp = 0;
let convert = "CtoF";

document.getElementById("submitBtn").onclick = function(){
    temp = document.getElementById("inputNumber").value;
    if (convert == "CtoF"){
        convertion = toFahrenheit(temp);
        convertion = convertion.toLocaleString("en-US", {style: "unit", unit:"fahrenheit"})
    }
    else if(convert == "FtoC"){
        convertion = toCelcius(temp);
        convertion = convertion.toLocaleString("en-US", {style: "unit", unit:"celsius"})
    }
    
    document.getElementById("hasil").innerHTML = ""+convertion;
}

document.getElementById("swapBtn").onclick = function(){
    if (convert == "CtoF"){
        convert = "FtoC";
        document.getElementById("convertText1").innerHTML = "Fahrenheit";
        document.getElementById("convertText2").innerHTML = "Celsius";
    }
    else if(convert == "FtoC"){
        convert = "CtoF";
        document.getElementById("convertText1").innerHTML = "Celsius";
        document.getElementById("convertText2").innerHTML = "Fahrenheit";
    }
    console.log(convert);
}

function toCelcius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9 / 5 +32;
}

