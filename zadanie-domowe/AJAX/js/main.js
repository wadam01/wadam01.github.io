// AJAX - fetch()

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(response => console.log(response));


// AJAX - $.getJSON()

// $.getJSON('https://jsonplaceholder.typicode.com/posts', response => {
//    console.log(response);
// });

// AJAX - $.ajax()

// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/users/1",
//     dataType: "json",
//     success: function (resultJSON) {
//         console.log(resultJSON);
//     },
//     onerror: function (msg) {
//         console.log(msg);
//     }
// });

// AJAX - czysta funkcja JS

const ajax = (method, url) => {
    // tworzymy obiekt
    let httpReq = new XMLHttpRequest();
    // otwieramy polaczenie
    httpReq.open(method, url);
    // w momencie dotarcia do serwera
    httpReq.onreadystatechange = () => {
        // jesli wwszystko poszlo pomysnie i dane zostaly zwrocone
        if (httpReq.readyState === 4 && httpReq.status === 200) {
            // wrzucamy gotowe dane do zmiennej
            let response = httpReq.responseText;
            // parsujemy JSON stringa do tablicy z obiektami
            response = JSON.parse(response);
            console.log(response);

            // rozlaczamy sie z serwerem
            httpReq = null;
        }
    }
    // wysylamy polaczenie
    httpReq.send();
}

setInterval(() => {
    ajax('GET', "https://jsonplaceholder.typicode.com/users/1")}, 9000
)