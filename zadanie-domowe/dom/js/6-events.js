'use strict';
let parSecond = document.querySelector('#parSecond');
console.log(parSecond);

// dziala przy podpieciu onclick w html
// const klikAlert = (e) => {
//     e.preventDefault();
//     alert('siemanko');
//     console.log(e);
// }
// obydwie metody uzywaja callback tzn ze nie uzywamy wywolania funkcji przy deklaracji ()

// bez wywolywania onclick w html
// parSecond.onclick = klikAlert;

// bez wywolywania onclick w html
// parSecond.addEventListener('click', klikAlert);

// parSecond.removeEventListener('click', klikAlert);

// let link = document.querySelector('.link');
// console.log(link);
// link.addEventListener('click', klikAlert);

let parWParSecond = document.getElementById('parWParSecond');
console.log(parWParSecond);

const klikDiv = (e) => {
    console.log('Kliknieto DIV');
}

const klikParagraf = (e) => {
    e.stopPropagation();
    console.log('kliknieto PARAGRAF');
}

parSecond.addEventListener('click', klikDiv);
parWParSecond.addEventListener('click', klikParagraf);