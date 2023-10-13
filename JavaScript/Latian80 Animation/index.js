const myButton = document.getElementById("myButton");
const myButton2 = document.getElementById("myButton2");
const myButton3 = document.getElementById("myButton3");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);
myButton2.addEventListener("click", begin2);
myButton3.addEventListener("click", begin3);

function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            x += 1;
            y += 1;
            myAnimation.style.left = x +"px";
            myAnimation.style.top = x +"px";
        }
    }
    
}

function begin2(){
    let timerId = null;
    let degrees = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(degrees >= 360){
            clearInterval(timerId);
        }
        else{
            degrees += 1;
            myAnimation.style.transform = "rotateX("+degrees+"deg)"; //can rotate Z,X, or Y
        }
    }
    
}

function begin3(){
    let timerId = null;
    let scaleX=1;
    let scaleY=1;

    timerId = setInterval(frame, 5);

    function frame(){
        if(scaleX >= 2 || scaleY >= 2){
            clearInterval(timerId);
        }
        else{
            scaleX += 0.01;
            scaleY += 0.01;
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")"; 
        }
    }
    
}


