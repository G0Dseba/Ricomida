//tooltip con alerta  en navegador
document.addEventListener('DOMContentLoaded', function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });
});

//carrusel  y botones prev-next
$(document).ready(function () {
    $('#customCarousel').carousel(); 

    $('.prev-btn').on('click', function () {
        $('#customCarousel').carousel('prev'); 
    });

    $('.next-btn').on('click', function () {
        $('#customCarousel').carousel('next'); 
    });
});

//cambio color a rojo con doble click ingredientes
$(document).ready(function () {
    $("#ingredientes").on("dblclick", function () {
        $(this).css("color", "red");
    });
});

//cambio color a rojo con doble click preparacion
$(document).ready(function () {
    $("#preparacion").on("dblclick", function () {
        $(this).css("color", "red");
    });
});

//la card desaparece al hacer click en el titulo
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