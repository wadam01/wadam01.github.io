$(function() {

    let slideShow = $('.slide-show');
    let singleSlide = $('.single-slide');
    let slideCount = singleSlide.length;
    let slideWidth = 100 / slideCount;
    let indexCounter = 0;

    // ustawianie szerokosci konteneru 
    slideShow.css('width', slideCount * 100 + '%');

    // ustawienie szerokosci obrazkow
    singleSlide.each(function(index) {
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': index * slideWidth + '%'
        })
    });

    let leftArrow = $('.prev-slide');
    let rightArrow = $('.next-slide');

    leftArrow.click(function(){
        slide(indexCounter - 1);
    });

    rightArrow.click(function(){
        slide(indexCounter + 1);
    });

    function slide(newIndex) {
        if (newIndex < 0 || newIndex >= slideCount) {
            return;
        }

        // ukrywanie napisu
        let currenTitle = $('.slide-caption').eq(newIndex); 
        currenTitle.fadeOut();

        const marginLeft = newIndex * (-100) + '%';

        // wywolanie animacji
        slideShow.animate({
            'margin-left': marginLeft
        }, 1000, function(){
            currenTitle.fadeIn();
            
        });
        indexCounter = newIndex;
    }
});