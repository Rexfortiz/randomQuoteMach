// class = a blueprint for creating objects
//          define what properties and methods they have
//          use a constructor for unique properties

class Player{
    score = 0;

    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();

player1.score =+ 1;
console.log(player1.score)
player1.pause();

player2.score =+ 25;
console.log(player2.score)
player2.exit();