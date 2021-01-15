//hamburger-icon clicking (works below 1000px) 
$(".banner-hamburgerIcon").on("click", function () {
    $(this).toggleClass("active");
    $(".banner-navigation").toggleClass("is-showed")
    $("body").toggleClass("scrollDisabled")
    $(".filter").toggleClass("active")
})

if($(window).width() >= 1000){
    $(".filter").removeClass("active")
}


//slide
let counter = 0;
let slide = $(".slide")

function nextSlide() {
    counter++
    if ($(window).width() >= 800) {                                     //upper 800px no transition effect
        $(".slides").css({
            "transform": "translateX(" + -100 * counter + "%" + ")",
            "transition": "all 0s ease-in"
        })
    }
    else if ($(window).width() < 800) {                                 //below 800px transition effect available
        $(".slides").css({
            "transform": "translateX(" + -100 * counter + "%" + ")",
            "transition": "all 1s ease-in"
        })
    }
    if (counter > slide.length - 1) {                                   //when it reaches the last slide, returns back to the first slide
        counter = 0;
        $(".slides").css({
            "transform": "translateX(" + -100 * counter + "%" + ")",
            "transition": "none"
        })
    }
}

function prevSlide() {
    counter--
    if ($(window).width() > 800) {                                      //upper 800px no transition effect
        $(".slides").css({
            "transform": "translateX(" + -100 * counter + "%" + ")",
            "transition": "all 0s ease-in"
        })
    }
    else if ($(window).width() < 800) {                                 //below 800px transition effect available
        $(".slides").css({
            "transform": "translateX(" + -100 * counter + "%" + ")",
            "transition": "all 1s ease-in"
        })
    }
    if (counter < 0) {                                                  //when it reaches the last slide, returns back to the first slide
        counter = 2;
        $(".slides").css({
            "transform": "translateX(" + -100 * counter + "%" + ")",
            "transition": "none"
        })
    }
}

$(".nextBtn").on("click", nextSlide)
$(".prevBtn").on("click", prevSlide)


//Keyboard left and right arrows function in order to control the slider
$(document).on("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        prevSlide()
    }
    if(e.key === "ArrowRight"){
        nextSlide()
    }
})