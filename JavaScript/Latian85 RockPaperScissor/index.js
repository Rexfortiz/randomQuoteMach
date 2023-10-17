const actionBtn = document.querySelectorAll(".actionBtn")
const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")

const compArray = ["Rock", "Paper", "Scissors"];
let player;
let computer
actionBtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    action(player);
}));

function action(playerChoose){
    computer = computerAnswer();
    playerAnswer = playerChoose

    playerText.textContent = "Player: "+playerAnswer
    computerText.textContent = "Computer: "+computer
    resultText.textContent = checkAnswer()
}

function computerAnswer(){
    randomAnswer = compArray[Math.round(Math.random() *2)];
    return randomAnswer
}

function checkAnswer(){
    if(player == computer){
        return "DRAW!";
    }
    else if(computer == "Rock"){
        return (player == "Paper") ? "You Win" : "You Lose"
    }
    else if(computer == "Paper"){
        return (player == "Scissors") ? "You Win" : "You Lose"
    }
    else if(computer == "Scissors"){
        return (player == "Rock") ? "You Win" : "You Lose"
    }
}
