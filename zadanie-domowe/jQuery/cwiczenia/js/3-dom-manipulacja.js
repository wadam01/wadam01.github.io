let paragrafy = $('p');
// console.log(paragrafy.text());

// // paragrafy.text('nowy tekst');
// let paragrafyByHtml = $('p');
// console.log(paragrafyByHtml.html());
// console.log(paragrafyByHtml.html('<b>asd</b>'));

let naglowek2 = $('#naglowek-2');
// naglowek2.prepend('sssss');
// naglowek2.append('ssssddddd');
// naglowek2.before('llllllll');
// naglowek2.after('llllkkkk');

// naglowek2.empty();
// naglowek2.remove();
// naglowek2.replaceWith('<span>Span</span>');
// paragrafy.css({ 'background': 'green', 'font-size': '20px', 'color': 'white' });
let pierwszyParagraf = $('.par').eq(0);
console.log(pierwszyParagraf);
pierwszyParagraf.addClass('red');
pierwszyParagraf.removeClass('red');

$('input#input-1').val('Kak Kowalski');
$('input#input-1').change(function(){
    console.log($(this).val());
});