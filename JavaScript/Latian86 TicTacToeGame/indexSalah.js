const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let running = false;
let options = ["", "", "", "", "", "", "", "", ""]
const playerStatus = ["X","O"]
let player = playerStatus[Math.round(Math.random() * (playerStatus.length-1))];

statusText.textContent = player + " turn";

startGame()

function startGame(){
    running = true;
    cells.forEach(box => box.addEventListener("click", () => {       
        cellIndex = box.getAttribute("cellIndex")
        if(options[cellIndex] != "" || !running){
            return;
        }           
        cells[cellIndex].textContent = player;
        options[cellIndex] = player
        statusText.textContent = player + " turn";       
        checkWin();       
    }))  
}

function playerTurn(){
    player = (player == "X") ? "O" : "X";
}

function checkWin(){
    let roundWon = false;
    for (let i = 0 ; i < winCondition.length; i++){
        let condition = winCondition[i];

        let cellA = options[condition[0]];
        let cellB = options[condition[1]];
        let cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC ==""){
            continue;
        }

        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }       
    }
    if(roundWon){
        statusText.textContent = `${player} is WIN`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `DRAW`;
        running = false;       
    }
    else{
        playerTurn()
    }
}

restartBtn.addEventListener("click", () => {
    player = playerStatus[Math.round(Math.random() * (playerStatus.length-1))];
    options = ["", "", "", "", "", "", "", "", ""]
    statusText.textContent = `${player}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
})

//UDAH BENER SIMPLER>THAN TUTORIAL. LESS THAN 80 ROW!