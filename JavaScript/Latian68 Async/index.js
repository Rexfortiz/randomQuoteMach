// async = makes a function return a Promise

async function loadFile(){  //lebih simple
    let fileLoaded = true;

    if(fileLoaded){
        return ("File loaded");
    }
    else{
        throw ("File Not Loaded")
    }
}

loadFile().then(value => console.log(value))
          .catch(error => console.log(error));


//============lebih syntax(?)===========
/*
function loadFile(){
    let fileLoaded = false;

    if(fileLoaded){
        return Promise.resolve("File loaded");
    }
    else{
        return Promise.reject("File Not Loaded")
    }
}

loadFile().then(value => console.log(value))
          .catch(error => console.log(error));
*/





//==============================


/*
const promise = new Promise((resolve, reject) =>{
    let fileLoaded = true;

    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File Not Loaded")
    }
});
*/

