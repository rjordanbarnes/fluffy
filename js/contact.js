var main = function() {
    $(".contact-info-portrait").mouseenter(function() {
        var classBackground = $(this).children(".contact-info-container").attr("class").split(" ")[1];
        $(this).addClass(classBackground);
    	$(this).css("background-color", classBackground);
    	$(this).children(".contact-info-container").slideDown(200);
    });

    $(".contact-info-portrait").mouseleave(function() {
        var classBackground = $(this).children(".contact-info-container").attr("class").split(" ")[1];
        $(this).removeClass(classBackground);
    	$(this).children(".contact-info-container").slideUp(100);
    });
};

$(document).ready(main);