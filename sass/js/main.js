$(window).scroll(function() {
    var scrl = $(window).scrollTop();
    if (scrl < 60) {
        $('.header_01').removeClass('fixedbar');
    } else {
        $('.header_01').addClass('fixedbar');
    }
});

var sliderIndex = 1;
showSlides(sliderIndex);

function plusSlides(n) {
    showSlides(sliderIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    if (n > slides.length) {
        sliderIndex = 1
    }
    if (n < 1) {
        sliderIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[sliderIndex - 1].style.display = "block";
}