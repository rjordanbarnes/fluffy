function createTableRow(data, i) {
    // Returns a single table row
    currentClass = data.openings[i];
    return "<tr><td class='" + currentClass.classname.toLowerCase().replace(" ", "-") +
           "-color'>" + currentClass.classname + ":</td><td>" +
           currentClass.status + "</td></tr>";
}

var main = function() {
    $.getJSON("/json/openings-mythic.json", function(data) {
        // Get data from openings-mythic.json and build table.
        for (i = 0; i < data.openings.length; i++) {
            var tableRow = createTableRow(data, i);
            $("#mythic-table").append(tableRow);
        }
    });
};

$(document).ready(main);