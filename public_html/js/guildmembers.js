function createPortrait(data, i) {
	// Returns a single portrait div
	var currentMember = data.members[i];
	var d = new Date();
	var fulldiv = '<div class="col-md-2 col-sm-3 col-xs-6"><img class="guild-member-portrait thumbnail" id="' +
				i + currentMember.name +
				'" src="/images/raidteam/portrait_' +
				currentMember.name +
				'.png?ver=' + d.getHours() + '"><div class="guild-member-name ' +
				currentMember.classname.toLowerCase().replace(" ", "-") + '-color">' + currentMember.name + '</div></div>';
	return fulldiv;
}

function createDescription(data) {
	// Builds the fullscreen display. Grabs the member's ID from the thumbnail.
	var id = $(this).attr('id').match(/\d+/);
	var currentMember = data.members[id];

	var d = new Date();
	$("#fullscreen-image").attr('src', "/images/raidteam/full_" +
									  currentMember.name +
									  ".jpg?ver=" + d.getHours());
	$("#fullscreen-member-name").html(currentMember.name + " <small>" + currentMember.specname + " " + currentMember.classname + "</small>");
	$("#fullscreen-text-description").html(currentMember.description);
	$("#armory-button a").attr('href', "http://us.battle.net/wow/en/character/darkspear/" +
									  currentMember.name +
									  "/");

	$("#fullscreen-member-name").removeClass().addClass(currentMember.classname.toLowerCase().replace(" ", "-") + "-color");
	$("#fullscreen-container").show();
}

function closeDescription(e) {
	if ($(e.target).is('h1, small, p, strong, li, center, #fullscreen-description-container, a, #armory-button')) {
		// Do nothing
	} else {
		// Hide fullscreen description
		$("#fullscreen-container").hide();
	}
}

var main = function() {
	$.getJSON("/json/guildmembers.json", function(data) {
		// Get data from guildmembers.json and create divs for thumbnails.
		for (i = 0; i < data.members.length; i++) {
			var portraitimage = createPortrait(data, i);
			$("#raider-container p").before(portraitimage);
		}

		$("#raider-container").imagesLoaded(function() {
			$("#raider-container").show();
		});

		// Create and Open the fullscreen description when thumbnail is clicked.
		$(".guild-member-portrait, .guild-member-name").click(function() {
			createDescription.call(this, data);
		});

		// Close the full screen description if anything outside the description is clicked.
		$("#fullscreen-container").click(closeDescription);
    });
};

$(document).ready(main);