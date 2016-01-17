function updateContainer() {
	console.log($('html').css('max-width'));
	if (window.matchMedia('(min-width: 768px)').matches) {
		$("#about-us-image-container").height($("#about-us-container").height() - 8);
	}
}

var main = function() {
    $.getJSON("/json/guildprogress.json", function(data) {
        $("#guild-progress-number").replaceWith(data.progress);
        $("#guild-progress").show();
    });

    $(window).on('resize', updateContainer);
    $(window).on('load', updateContainer);
};

$(document).ready(main);