"use strict";
let wzrostEwy = 166;
let wzrostAdama = 199;

if (wzrostAdama > wzrostEwy) {
    console.log("Adam jest wyzszy");
} else {
    console.log("Ewa jest wyzsza");
}
let kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log('Kolor zielony');
        break;
    case 'niebieski':
        console.log('Kolor niebieski');
        break;
    default:
        console.log('Inny kolor')
}