// array.reduce() = reduces an array to a single value

let prices = [5, 10, 15, 20, 25,50];
let total = prices.reduce(checkOut);

console.log(`The total is: $${total}`)

function checkOut(total, element){
    return total + element;
}


let huruf = ["f","a","r","e","l"];
let nama = huruf.reduce(checkOut);
console.log(`Nama: ${nama}`)
 