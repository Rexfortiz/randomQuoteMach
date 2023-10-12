let cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

shuffle(cards);
console.log(cards);


function shuffle(array){
    let currentIndex = array.length; //13
    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length); // pick random betwen index 0 to 12
        currentIndex -=1; 

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}
