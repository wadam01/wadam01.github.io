'use-strict';

let submit = document.getElementById('sub');
console.log(submit);

let send = (e) => {
    e.preventDefault();
    let fname = document.getElementById('formularz').childNodes[1].value;
    console.log(fname);
    let lname = document.getElementById('formularz').childNodes[5].value;
    console.log(lname);
}

submit.addEventListener('click', send);