/*
MODELS AND COLLECTIONS
================================================== */

var ContentModel = Backbone.Model.extend({

});

var ContentCollection = Backbone.Collection.extend({

    url: "/api/v1/content",

    model: ContentModel

});

var DashboardModel = Backbone.Model.extend({

    urlRoot: "/api/v1/dashboard",

    id: "latest"    // We are only interested in the latest dashboard

});


/*
App View
================================================== */

var AppView = Backbone.View.extend({

    el: $("body"),

    // Events definition
    events: {
        "click a[href=#home]":      "handleNav",
        "click a[href=#chapter1]":  "handleNav",
        "click a[href=#chapter2]":  "handleNav",
        "click a[href=#chapter3]":  "handleNav",
        "click a[href=#chapter4]":  "handleNav",
        "click a[href=#chapter5]":  "handleNav",
        "click a[href=#chapter6]":  "handleNav",
        "click a[href=#about]":     "handleNav"
    },

    initialize: function() {

        // TODO: Explain
        _.bindAll(this, "render");

        // Let's render the AppView when it's created
        this.render();
    },

    render: function() {

        // Load template
        var source = $("#appview-tpl").html();
        // Compile template
        var tpl = Handlebars.compile(source);

        // Assign data and render
        var html = tpl({});

        // Since we append to body, we have to clean up our stuff very carefully and make sure that we don't delete our script tags
        // Select all direct childs of this.el which are not a script
        $(this.el.tagName + " > *:not(script)").remove();

        $(this.el).append(html);
    },

    handleNav: function(e) {
        // Get hash tag, i.e. #chapter1, #chapter2, ...
        hash = $(e.target).attr("href");

        // Change the selected menu item
        $(".navbar li").removeClass("active");
        $('.navbar li a[href$="' + hash + '"]').parent().addClass("active"); // <- does this work in all browsers?
        // Ensure that the title changes color as well
        $("h1.header-title").css("color", $("li.active a").css("background-color"));
    }

});


var DashboardWidgetView = Backbone.View.extend({

});




// jquery ready function is execute after the DOM is ready
$(document).ready(function() {
	var appView = new AppView(); 
});
