"use-strict";

let kontoLukasza = 100000;

const zrobZakupy = (zaIle) => {
    let kontoNatalii = 200000;
    let ileZostaloNaKoncie = kontoLukasza - zaIle;
    return ileZostaloNaKoncie; 
}

console.log(zrobZakupy(500));