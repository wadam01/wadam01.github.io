"use-strict";

let mainHeader = document.getElementById('header');
console.log(mainHeader.innerHTML);
console.log(mainHeader.innerText);
console.log(mainHeader.outerHTML);

mainHeader.id = 'nowe-id';
mainHeader.setAttribute('class', 'header');
console.log(mainHeader.outerHTML);

mainHeader.className = 'nowa-klasa';
console.log(mainHeader.outerHTML);

let klasy = mainHeader.className;
mainHeader.classList.add('active');
mainHeader.classList.remove('active');
console.log(klasy);

let zmienKolor = document.getElementById('toogle');
zmienKolor.addEventListener('click', () => {
    zmienKolor.classList.toggle('active');
})
zmienKolor.style.color = 'red';