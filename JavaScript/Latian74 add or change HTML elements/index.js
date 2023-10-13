// add/change HTML elements
// .innerHTML (vulnerable to XSS attack)
// .textContent (more secure)

//const nameTag = document.createElement("h1");
//nameTag.textContent = window.prompt("Enter Your Name");
//document.body.append(nameTag);

const list = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = window.prompt("enter fruit");
//list.append(listItem) //add in last (prepend) for in the first
list.insertBefore(listItem,list.getElementsByTagName("li")[1]) // to add element in between