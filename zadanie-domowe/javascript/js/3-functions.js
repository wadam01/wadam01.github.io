"use strict";

const PI = 3.14;

/* function poleKola(r) {
    let poleKola = PI * r * r;
    
    console.log(poleKola);
} */


const poleKola = (r) => {
    let poleKola = PI * r * r;

    return poleKola;
}

poleKola(15);
poleKola(50);

let rDuzego = 108;
let wynikDzialaniaFunkcji = poleKola(rDuzego);
poleKola(rDuzego);
alert(wynikDzialaniaFunkcji);