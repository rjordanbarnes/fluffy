var main = function() {
    $(".contact-info-portrait").mouseenter(function() {
    	$(this).css("background-color", "#f6a6c1");
    	$(this).children(".contact-info-container").slideDown(200)
    });

    $(".contact-info-portrait").mouseleave(function() {
    	$(this).css("background-color", "initial");
    	$(this).children(".contact-info-container").slideUp(100);
    });
};

$(document).ready(main);