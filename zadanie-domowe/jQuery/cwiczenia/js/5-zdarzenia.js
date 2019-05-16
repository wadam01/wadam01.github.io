let naglowek1 = $('#naglowek-1');

naglowek1.click(function() {
    $(this).css({
        'background-color': 'red',
        'text-decoration': 'underline'
    });
});

let naglowek2 = $('#naglowek-2');
naglowek2.on({
    'dblclick': function() {
        $(this).css({
            'background-color': 'yellow'
        })
    },
    'mouseenter': function(){
        $(this).css('font-size', '30px')
    },
    'mouseleave': function(){
        $(this).css('font-size', 'inherit')
    }
});


