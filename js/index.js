// JS functions


$(document).ready(function () {
    $(".categ-name").mouseenter(function () {
        $(this).find("h4 i").addClass("fa-sort-up");
        $(this).find('.sub-categ').slideDown(500);

    });
    $(".categ-name").mouseleave(function () {
        $(this).find("h4 i").removeClass("fa-sort-up");
        $(this).find('.sub-categ').slideUp(500);
    });


});