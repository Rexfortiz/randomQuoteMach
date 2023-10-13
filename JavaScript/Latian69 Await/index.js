// await = makes an async function wait for Promise
//  must be inside async function

async function loadFile(){  
    let fileLoaded = false;

    if(fileLoaded){
        return ("File loaded");
    }
    else{
        throw ("File Not Loaded")
    }
}


async function startProcess(){
    try{
        let message = await loadFile();
        console.log(message);
    }   
    catch(error){
        console.log(error);
    }
}
startProcess();

