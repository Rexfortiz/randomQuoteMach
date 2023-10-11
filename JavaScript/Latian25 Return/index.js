// return = return a value back to the place
//          where you invoke a function

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width,height)
console.log(area);

function getArea(w, h){
    return w * h;
    //area = w * h;
    //return;
}