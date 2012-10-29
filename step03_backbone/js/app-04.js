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

});


var DashboardWidgetView = Backbone.View.extend({

});




// jquery ready function is execute after the DOM is ready
$(document).ready(function() {

});
