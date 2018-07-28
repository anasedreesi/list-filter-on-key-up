//search begin
function srch(txt, ob) {
    // Retrieve the input field text and reset the count to zero
    var filter = $("#filter").val(),
        count = 0;
    if (!filter) {
        ob.show();
        return;
    }
    var regex = new RegExp(filter, "i");
    // Loop through the comment list
    ob.each(function() {
        var ths = $(this);
        var ftd = ths.find(txt).text();
        if (ftd.search(regex) < 0) {
            ths.hide();
            // Show the list item if the phrase matches and increase the count by 1
        } else {
            ths.show();
        }
    });
    // Update the count
    var numberItems = count;
    $("#filter-count").text("Number of Comments = " + count);
};
function srchHilight(txt, ob) {
    var filter = $("#filter").val(),
        count = 0;
    if (!filter) {
        ob.show();
        element = ob; //convert string to JQuery element
        element.each(function(index) {
            var text = $(this).find(txt).html() //get span content
            text = text.replace('<span class="highlight">', '');
            //text = text.replace('<span class="highlight fcty">','');  
            text = text.replace('</span>', '');
            $(this).find(txt).html(text); //replace all span with just content
        })
        return;
    }
    var regex = new RegExp(filter, "i");
    // Loop through the comment list
    ob.each(function() {
        var ths = $(this);
        var ftd = ths.find(txt).text();
        //var ftd = ths.find(txt).text().replace("Ù€","");;
        if (ftd.search(regex) < 0) {
            ths.hide();
            // Show the list item if the phrase matches and increase the count by 1
        } else {
            ths.show();
            ftd = ftd.replace(regex, '<span class="highlight">' + regex + "</span>");
            //     ftd = ftd.replace(regex, '<span class="highlight fcty">' + regex +"Ù€"+ "</span>");
            ftd = ftd.replace(">/", ">");
            ftd = ftd.replace("/<", "<");
            ftd = ftd.replace("/i", "");
            //       ftd = ftd.replace("Ù€</span> ","</span> ");
            ths.find(txt).html(ftd);
        }
    });
    // Update the count
    var numberItems = count;
    $("#filter-count").text("Number of Comments = " + count);
};
//search end
//hilight function
function hilight(txt, ob) {
    var filter = $("#filter").val(),
        count = 0;
    var regex = new RegExp(filter, "i");
    ob.each(function() {
        var ths = $(this);
        var ftd = ths.find(txt).text();
        ftd = ftd.replace(regex, '<span class="highlight">' + regex + '</span>');
        ftd = ftd.replace(">/", ">");
        ftd = ftd.replace("/<", "<");
        ftd = ftd.replace("/i", "");
        ths.find(txt).html(ftd);
    });
};
//remove hilight function
function removeHilight(txt, ob) {
    element = ob; //convert string to JQuery element
    element.each(function(index) {
        var text = $(this).find(txt).html() //get span content
        text = text.replace('<span class="highlight">', '');
        text = text.replace('</span>', '');
        $(this).find(txt).html(text); //replace all span with just content
    })
};
