// gives us the ability to check more than 1 condition concurrently
// && AND (both condition must be true)
// || OR (either condition can be true)

let temp = 15;
let sunny = true;

if (temp > 0 && temp < 30 && sunny){
    console.log("The weather is good");
}
else{
    console.log("The weather is bad!")
} 