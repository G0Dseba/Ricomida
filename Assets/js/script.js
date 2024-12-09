//tooltip y alerta
document.addEventListener('DOMContentLoaded', function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });
});

//cambio color con dbclick
$(document).ready(function () {
    $("#ingredientes").on("dblclick", function () {
        $(this).css("color", "red");
    });
});

$(document).ready(function () {
    $("#preparacion").on("dblclick", function () {
        $(this).css("color", "red");
    });
});

//carrusel botones prev-next
$(document).ready(function () {
    $('#customCarousel').carousel(); 

    $('.prev-btn').on('click', function () {
        $('#customCarousel').carousel('prev'); 
    });

    $('.next-btn').on('click', function () {
        $('#customCarousel').carousel('next'); 
    });
});

//cada card desaparece al hacer click en su titulo
$(document).ready(function () {
    $("#cardTitle1").click(function () {
        $(".card-text").toggle();
    });
});


$(document).ready(function () {
    $("#cardTitle2").click(function () {
        $(".card-text").toggle();
    });
});

$(document).ready(function () {
    $("#cardTitle3").click(function () {
        $(".card-text").toggle();
    });
});