let btnStart = $('#btn').click(function() {
    $.getJSON( "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data) {
        const startDiv = $('<div>').attr('id', 'dane-programisty');
        startDiv.html(`
        <p>Imie: ${data.imie}</p>
        <p>Nazwisko: ${data.nazwisko}</p>
        <p>Zawód: ${data.zawod}</p>
        <p>Firma: ${data.firma}</p>
        `) 
        $('#btn').after(startDiv);
    });
});
