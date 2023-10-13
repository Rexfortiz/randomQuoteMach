// synchronous code = in an ordered sequence.
//                    step-by-step linear instructions
//                    (start now, finish now)

// asynchronous code = out of sequence.
//                     Ex. Access a database
//                         Fetch a file
//                         Task that take time
//                     (Start now, finish sometime later)

console.log("START");   //synchronous
setTimeout(() => console.log("This is asynchronous"), 3000); //asynchronous
console.log("END");     //synchronous