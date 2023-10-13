// DOM = Document Object Model (API/aplication programming interface)
//       An interface for changing the content of a page

console.log(document);
console.dir(document);

console.log(document.title);
console.log(document.URL);

//document.title = "Title goes here!"           //change title
//document.location = "http://www.google.com"   //change location URL

document.body.style.backgroundColor = "skyBlue";
document.getElementById("myDiv").innerHTML = "HAYYY"