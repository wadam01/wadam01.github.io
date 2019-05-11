"use strict";
let imiona = ['Monika', 'Kamil', 'Krzysio'];
imiona[3] = 'Robcio';
imiona[0] = 'Mati';
imiona.push('Ewa');
imiona.pop();
console.log(imiona);
console.log(imiona.unshift('Geralt'));
console.log(imiona);
let imionaStr = imiona.join();
console.log(imionaStr);

imiona.reverse();
console.log(imiona);
imiona.sort();
console.log(imiona);