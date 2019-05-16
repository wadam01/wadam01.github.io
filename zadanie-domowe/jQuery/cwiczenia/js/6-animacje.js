// $('#naglowek-1').hide('slow').show('fast');
// $('#naglowek-2').fadeOut('slow').fadeIn('fast');
// $('#naglowek-2').slideUp('fast').slideDown('slow');

function przesunNaSrodek() {
    $('#naglowek-1').delay(1000).animate({
        'margin-left': '500px',
        'font-size': '40px'
    }, 3000, przesunNaPoczatek);
}

function przesunNaPoczatek() {
    $('#naglowek-1').animate({
        'margin-left': '0',
        'font-size': '20px'
    }, 3000, przesunNaSrodek);
}

przesunNaSrodek();