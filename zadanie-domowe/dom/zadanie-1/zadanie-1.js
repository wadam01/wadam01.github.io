'use strict';
let btn = document.getElementById('btn');
console.log(btn);


const ustawTlo = () => {
    let par1 = document.getElementById('paragraf1');
    let par2 = document.getElementById('paragraf2');
    par1.style.backgroundColor = 'red';
    par2.style.backgroundColor = 'yellow';
}
btn.addEventListener('click', ustawTlo);