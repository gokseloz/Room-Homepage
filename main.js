//hamburger-icon clickind (works smaller than 1000px) 
$(".banner-hamburgerIcon").on("click", function () {
    $(this).toggleClass("active");
    $(".banner-navigation").toggleClass("is-showed")
    $("body").toggleClass("scrollDisabled")
    $(".filter").toggleClass("active")
})

//slide
let counter = 0;
let slide = $(".slide")

function nextSlide() {
    counter++
    $(".slides").css({
        "transform": "translateX(" + -100 * counter + "%" + ")",
        "transition": "all 1s ease-in"
    })

    if (counter > slide.length - 1) {
        counter = 0;
        $(".slides").css({
            "transform": "translateX(" + -100 * counter + "%" + ")",
            "transition": "none"
        })
    }
}

function prevSlide() {
    counter--
    $(".slides").css({
        "transform": "translateX(" + -100 * counter + "%" + ")",
        "transition": "all 1s ease-in"
    })

    if (counter < 0) {
        counter = 2;
        $(".slides").css({
            "transform": "translateX(" + -100 * counter + "%" + ")",
            "transition": "none"
        })
    }
}

$(".nextBtn").on("click", nextSlide)
$(".prevBtn").on("click", prevSlide)


//Keyboard left and right functions in order to control the slider
$(document).on("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        prevSlide()
    }
    if(e.key === "ArrowRight"){
        nextSlide()
    }
})