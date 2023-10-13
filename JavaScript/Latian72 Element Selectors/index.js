//let element = document.getElementById("myTitle");
//element.style.backgroundColor = "lightGreen";

let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})

//let vegetables = document.getElementsByTagName("li");
//vegetables[0].style.backgroundColor = "lightGreen";

let desserts = document.getElementsByClassName("desserts");
desserts[2].style.backgroundColor = "lightBlue";

//================Query Selector===================

let element = document.querySelector("#myTitle"); //only select first element on group.
element.style.backgroundColor = "lightblue";    // use querrySelectorAll to select all

let element2 = document.querySelector("[for]");    //select first element with for attribute
element2.style.backgroundColor = "lightblue";

let element3 = document.querySelectorAll("li")
element3.forEach(element =>{
    element.style.backgroundColor = "lightGreen";
})