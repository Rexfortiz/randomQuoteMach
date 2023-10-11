// if statement = a basic form of decision making

document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");


    if(myCheckBox.checked == true){
        console.log("Gudd");
    } 
    else{
        console.log("mam dong sayang :(");
    }

    if(visaBtn.checked){
        console.log("You're paying with a Visa")
    }
    else if(mastercardBtn.checked){
        console.log("You're paying with a MasterCard")
    }
    else if(paypalBtn.checked){
        console.log("You're paying with a PayPal")
    }

}