// arrow function = compact alternative to a traditional function expression
// =>

const greeting =  (userName) => console.log(`Hello ${userName}`);
greeting("Farel");


/* Bentuk traditional function expression CONTOH:
const percent = function(x ,y){
    return x / y * 100;
}
*/

const percent = (x ,y) =>  x / y * 100;  //remove return
console.log(`${percent(25,50)}%`)

//=================================================//

let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x,y) => y-x);
grades.forEach(element => console.log(element));

/* CONTOH Traditional function
grades.sort(descending);
grades.forEach(print);

function descending(x,y){
    return y-x;
}

function print(element){
    console.log(element);
}
*/