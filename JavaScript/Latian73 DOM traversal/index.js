let element = document.querySelector("#fruit");
//let child = element.firstElementChild;
let children = Array.from(element.children);

children.forEach(child => child.style.backgroundColor = "lightGreen")


//let child = element.child[0];
//child.style.backgroundColor = "lightgreen";

// .firstElementChild //to call first child of parent
// .lastElementChild  // to call last child of parent
// .parentElement     // to call the parent element of element that we call
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)