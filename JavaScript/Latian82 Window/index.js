// window = interface used to talk to the web browser
//          the DOM is a properti of the window

console.dir(window);
console.log(window.innerWidth) //get window width and height
console.log(window.innerHeight)

console.log(window.scrollX); //get scroll bar value
console.log(window.scrollY);

//console.log(window.location.href); get web's link
//window.location.href = "http://google.com" //change link
console.log(window.location.hostname); //
console.log(window.location.pathname);

const myButton = document.querySelector("#myButton");
//myButton.addEventListener("click", () => window.open()); //open new windo
//myButton.addEventListener("click", () => window.open("https://google.com")); //open link in new window
//myButton.addEventListener("click", () => window.close()); //close window
//myButton.addEventListener("click", () => window.print()); //printing page

//window.alert("Hello";)
//window.confirm("Press OK to Continue");
