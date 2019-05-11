"use-strict";
let parFirst = document.getElementById('parFirst');
console.log(parFirst);

let links = document.getElementsByClassName('superlink');
console.log(links);

let tag = document.getElementsByTagName('a');
console.log(tag);

let id = document.querySelector('#parSecond');
console.log(id);

let firstLinkSelector = document.querySelector('.superlink');
console.log(firstLinkSelector);

let allLinkSelector = document.querySelectorAll('.superlink');
console.log(allLinkSelector);

allLinkSelector.forEach( (link, i) => {
    console.log(link.outerHTML); 
});

