var active = 0; // Active image of the carousel

var timer = null; // Time to change the image of the carousel

$(document).ready(function () {


    timer = setInterval(function () { nextSlide(); }, 5000);

    // Change the src of the carousel img
    cambiarImg()

    // Next button pressed
    $("#next").click(function () {

        // Next image
        nextSlide();

        // Reset timer
        clearInterval(timer);
        timer = setInterval(function () { nextSlide(); }, 5000);
    });

    // Previous button pressed
    $("#prev").click(function () {

        // Previous image
        previousSlide();

        // Reset timer
        clearInterval(timer);
        timer = setInterval(function () { nextSlide(); }, 5000);
    });

    // Change gallery img modal window
    $("body").on("click", ".imagenes", function () {
        var id = $(this).attr('id');
        $("#imagenModal").attr("src", "img/galeria" + id + "Big.jpg");
    });

    $("#btn-formulary").click(function () {

        // Launch sweetAlert
        swal({
            icon: "success",
            title: "Su mensaje ha sido enviado",
            text: "Le responderemos lo antes posible"
        }

        );

    });

})

function cambiarImg() {

    // Change images
    $("#carousel1").attr("src", "img/carousel1.jpg");
    $("#carousel2").attr("src", "img/carousel2.jpg");
    $("#carousel3").attr("src", "img/carousel3.jpg");

}


function nextSlide() {

    // We obtain the images and icons
    var carouselItem = $(".carousel-item");
    var iconItem = $(".icon-item");

    // Remove the active class 
    $(carouselItem[active]).toggleClass("active");
    $(iconItem[active]).toggleClass("active");

    // Next image
    active = (active + 1) % 3;

    // Add active classe to the next element
    $(carouselItem[active]).toggleClass("active");
    $(iconItem[active]).toggleClass("active");
}

function previousSlide() {

    // We obtain the images and icons
    var carouselItem = $(".carousel-item");
    var iconItem = $(".icon-item");

    // Remove the active class
    $(carouselItem[active]).toggleClass("active");
    $(iconItem[active]).toggleClass("active");

    // Previous image
    active = active - 1;
    if (active < 0) active = 2;

    // Add active class to the previous element
    $(carouselItem[active]).toggleClass("active");
    $(iconItem[active]).toggleClass("active");
}