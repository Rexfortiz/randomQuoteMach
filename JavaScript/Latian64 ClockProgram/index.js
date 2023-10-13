const myLabel = document.getElementById("myLabel");

update();

setInterval(update,1000);

function update(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amPm = hours >= 12 ? "PM" : "AM"

        hours =(hours % 12) || 12;

        hours = formiteZero(hours);
        minutes = formiteZero(minutes);
        seconds = formiteZero(seconds);

        return `${hours}:${minutes}:${seconds} ${amPm}`
    }
    
    function formiteZero(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}

