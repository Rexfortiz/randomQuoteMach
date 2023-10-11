startProgram();

function startProgram(){
    document.getElementById("startBtn").onclick = function(){
        
        document.getElementById("startprogram").style.setProperty("display", "none");
        program();
    }
}

function program(){
    document.getElementById("program").style.setProperty("display", "block");
    document.getElementById("guessField").value = "";

    const answer = Math.floor(Math.random() * 100 + 1)

    console.log(answer);

    document.getElementById("submitBtn").onclick = function(){
        guess = document.getElementById("guessField").value;
        
        switch (true){
            case guess > (answer+10):
                document.getElementById("clue").innerHTML = "Kelebihan Banyak";
                break;
            case guess > answer && guess < (answer +10):
                document.getElementById("clue").innerHTML = "Kelebihan dikit";
                break;
            case guess < (answer - 10):
                console.log("kurang banyak");
                break;
            case guess < answer && guess > (answer - 10):
                console.log("kurang dikit");
                break;
            case guess == answer:
                console.log("BENER");
                menang();
                break;
        }
    }
}

function menang(){
    document.getElementById("menang").style.setProperty("display", "block");
    document.getElementById("program").style.setProperty("display", "none");
    document.getElementById("restart").onclick = function(){
        program();
        document.getElementById("menang").style.setProperty("display", "none");
    }
}