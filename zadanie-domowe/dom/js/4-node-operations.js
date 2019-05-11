"use-strict";
let btn = document.createElement("button");
console.log(btn);

let textBtn = document.createTextNode("Kliknij mnie!");
console.log(textBtn);

let classBtn = document.createAttribute("class");
classBtn.value = 'btn'
console.log(classBtn);
// dorzucanie do btn dziecko w postaci textBtn
btn.appendChild(textBtn);
// dorzucanie do btn atrybutu w postaci classBtn
btn.setAttributeNode(classBtn);
// dorzucanie do btn atrybutu w postaci nowo stworzonych atrybutow w locie
btn.setAttribute("onclick", "btnClick();");
// wrzucenie buttonu w strukture html
document.body.append(btn);

btn.removeAttribute("onClick");
btn.removeAttribute("class");

//btn.parentElement.removeChild(btn);
//document.body.removeChild(btn);