"use strict";
/* for (let i = 10; i>0; i--) {
    console.log(i)
} */

let tablica = ['Adam', 'Ewa', 'Marcin'];

// petla for

/* for (let i = 0; i< tablica.length; i++) {
    console.log(tablica[i]);
} */

// petla forEach - wykonywana tylko na tablicach

/* const iteruj = (elemenet, index) => {
    console.log(`Element z indexem ${elemenet} ma wartość ${index}.`)
} */

/* tablica.forEach((elemenet, index) => {
    console.log(`Element z indexem ${elemenet} ma wartość ${index}.`)
}); */


// petla for in - tylko na obiekcie - zwraca wszystkie wartosci

// let person = {
//     name: 'Krystian',
//     wiek: 35
// }

// for(let key in person) {
//     console.log(person[key]);
// }

// petla for of - tylko na tablicy
let iterable = [10, 20, 300];

for (let value of iterable) {
    value += 1;
    console.log(value);
}

// petla while 

let it = 0;
while (it < 10) {
    console.log(it);
    it++;
}


// petla do while
let iter = 20;
do {
    
    iter ++;
    console.log(iter)
} while (iter < 10 )

// przerywanie petli - break

let a = 0;
while ( a < 10) {
    console.log(++a);
    if (a == 5) {
        break;
    }
}

// przeskakiwanie do kolejnej iteracji - continue

for (let b =0; b < 10; b ++) {
    if (b == 5) {
        continue;
    } else {
        console.log(b);
    }
    console.log('------');
}