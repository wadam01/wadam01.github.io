$('body')
    .find('.par2')
    .text('zmieniamy')
    .css('color', 'red');
    
let par2 = $('.par2');
// console.log(par2);
par2.each(function(index, biezacyParagraf) {
    if (index === 0) {
        $(biezacyParagraf).css('color', 'green').text('powrot');
    } else if (index === 1) {
        $(biezacyParagraf).css('color', 'yellow').text('powrot');
    } else if (index === 2) {
        $(biezacyParagraf).css('color', 'blue').text('powrot');
    }
    console.log(index, biezacyParagraf);
});