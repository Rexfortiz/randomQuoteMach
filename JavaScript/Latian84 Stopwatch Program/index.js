const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;


startBtn.addEventListener("click", () =>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime,100)
    }
});

pauseBtn.addEventListener("click", () =>{
    if(!paused){
        paused= true;
        clearInterval(intervalId);
    }
});

resetBtn.addEventListener("click", () =>{
    startTime = Date.now();
    elapsedTime = Date.now() - startTime;
    timeDisplay.textContent = "00:00:00"
});

function updateTime(){
    elapsedTime = Date.now() - startTime;
    console.log(elapsedTime)

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / ((1000 *60)*60)) % 60);

    hrs = formiteZero(hrs);
    mins = formiteZero(mins);
    secs = formiteZero(secs);

    timeDisplay.innerHTML = `${hrs}:${mins}:${secs}`;
    
    function formiteZero(time){
        time = time.toString()
        return time.length < 2 ? "0"+time : time;
    }

}