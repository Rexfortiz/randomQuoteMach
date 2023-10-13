// The date object is used to work with dates and times

let date = new Date();
//let date = new Date(0);
//let date = new Date(2001, 0, 19, 2, 3, 4, 5);
//let date = new Date("January 19, 2001 00:00:00");

/*
let year = date.getFullYear(); //get year
let dayOfMonth = date.getDate(); // get date
let dayOfWeek = date.getDay(); // get day
let month = date.getMonth(); // get month
let hour = date.getHours(); // get hour
let minutes = date.getMinutes(); // get minute
let seconds = date.getSeconds(); // get seconds
let milliseconds = date.getMilliseconds(); // get milliseconds
*/
/*
date.setFullYear(2024); //change year
date.setMonth(12); //change year
date.setDate(5); //change month
date.setHours(13); //change hour
date.setMinutes(6); //change minute
date.setSeconds(23); //change seconds
date.setMilliseconds(2); //change milliseconds
*/

//console.log(date)

//date = date.toLocaleString();
document.getElementById("myLabel").innerHTML = formatDate(date);
function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();

    return `${month} - ${day} - ${year}`
}

document.getElementById("myLabel2").innerHTML = formatTime(date);
function formatTime(date){
    let hours = date.getHours(); // get hour
    let minutes = date.getMinutes(); // get minute
    let seconds = date.getSeconds();
    let amPm = hours >= 12 ? "pm" : "am"

    hours =(hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amPm}`
}