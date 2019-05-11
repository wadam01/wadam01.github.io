"use-strict";
let name = document.getElementById('name');
let email = document.getElementById('email');
let submit = document.getElementById('wyslij');

console.log(name);
console.log(email);
console.log(submit);
let check1 = document.getElementById('zgoda-marketingowa-1');
console.log(check1);
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('asd');
})