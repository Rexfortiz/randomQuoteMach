// promise = object that encapsulates the result of an asynchronous operation
//           let asynchronous method return values like synchronous methods
//           "I promise to return something in the future"

//           the STATE is 'pending' then: 'fulfilled' or 'rejected'
//           the RESULT is what can be returned
//           2 parts producing & consuming

const promise = new Promise((resolve, reject) =>{
    let fileLoaded = false;

    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File Not Loaded")
    }
});

promise.then(value => console.log(value))
        .catch(error => console.log(error));

const janji = new Promise(resolve => {      //arrow function
    setTimeout(resolve, 5000);
})

janji.then(()=> console.log("Hai kamu nunggu 5 detik"));


const wait = time => new Promise(resolve => {   //argument
    setTimeout(resolve, time);
})

wait(3000).then(()=> console.log("Hai kamu nunggu 3 detik"));

