// console.time() = Starts a time you can use to
//                  track how long an operation takes
//                  Give each timer a unique name.

//start
console.time("Response time");

alert("CLICK THE OK BUTTON")
setTimeout(() => console.log("Hello"),3000);

//end
console.timeEnd("Response time");
