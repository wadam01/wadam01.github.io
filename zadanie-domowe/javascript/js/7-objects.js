"use strict";
let kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe() {
        console.log(this.imie);
    }
}

let krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe() {
        console.log(this.imie + this.wzrost);
    }
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();
kaja.wzrost = 200;
console.log(kaja);

let monetaZl = {
    promien: 20,
    nominal: 100,
    waga: 50,
    material: "zloto"
}

console.log(monetaZl.material);

class Osoba {
    constructor(imie, nazwisko, wzrost = 500, oczy) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost = wzrost;
        this.oczy = oczy;
    }

    wyswietlInfo() {
        console.log(
            `Imię: ${this.imie} \n nazwisko: ${this.nazwisko}`
        )
    }
}

let adam = new Osoba('Adam', "Wroblewski", 222);
console.log(adam);