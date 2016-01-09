function updateContainer() {
	$("#about-us-image").height($("#about-us-container").height() - 8);
}

var main = function() {
    $.getJSON("../json/guildprogress.json", function(data) {
        $("#guild-progress-number").replaceWith(data.progress);
        $("#guild-progress").css("display", "inline");
    });

    $(window).on('resize', updateContainer);
    $(window).on('load', updateContainer);
};

$(document).ready(main);