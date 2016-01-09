function createPortrait(data, i) {
	// Returns a single portrait div
	var currentMember = data.members[i];
	var fulldiv = '<div class="col-md-2 col-sm-3 col-xs-4"><img class="guild-member-portrait thumbnail" id="' +
				i + currentMember.name +
				'" src="../images/raidteam/portrait_' +
				currentMember.name +
				'.png"><div class="guild-member-name ' + currentMember.classname.toLowerCase() + '-color">' + currentMember.name + '</div></div>';
	return fulldiv;
}

function createDescription(data) {
	// Builds the fullscreen display. Grabs the member's ID from the thumbnail.
	var id = $(this).attr('id').match(/\d+/);
	var currentMember = data.members[id];

	$("#fullscreen-image").attr('src', "../images/raidteam/full_" +
									  currentMember.name +
									  ".jpg");
	$("#fullscreen-member-name").html(currentMember.name + " <small>" + currentMember.specname + " " + currentMember.classname + "</small>");
	$("#fullscreen-text-description").html(currentMember.description);
	$("#armory-button a").attr('href', "http://us.battle.net/wow/en/character/darkspear/" +
									  currentMember.name +
									  "/");

	$("#fullscreen-member-name").removeClass().addClass(currentMember.classname.toLowerCase() + "-color");
	$("#fullscreen-container").show();
}

function closeDescription(e) {
	if ($(e.target).is('h1, small, p, #fullscreen-description-container, a, #armory-button')) {
		// Do nothing
	} else {
		// Hide fullscreen description
		$("#fullscreen-container").hide();
	}
}

var main = function() {
	$.getJSON("../json/guildmembers.json", function(data) {
		// Get data from guildmembers.json and create divs for thumbnails.
		for (i = 0; i < data.members.length; i++) {
			var portraitimage = createPortrait(data, i);
			$("#raider-container p").before(portraitimage);
		}

		// Create and Open the fullscreen description when thumbnail is clicked.
		$(".guild-member-portrait, .guild-member-name").click(function() {
			createDescription.call(this, data);
		});

		// Close the full screen description if anything outside the description is clicked.
		$("#fullscreen-container").click(closeDescription);
    });
};

$(document).ready(main);