const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
let time = new Date();

let startTime = 0;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () =>{
    setInterval(updateTime,1000)

});


function updateTime(){
    secs += 1;
    
    if(secs >= 60){
        mins += 1;
        secs = 0
    }
    if(mins >= 60){
        hrs += 1;
        mins = 0;
    }
    hrs = formiteZero(hrs);
    mins = formiteZero(mins);
    secs = formiteZero(secs);
    console.log(secs)

    timeDisplay.innerHTML = `${hrs}:${mins}:${secs}`;

    function formiteZero(time){

       return time.length < 2 ? "0"+time : time;
    }
}


