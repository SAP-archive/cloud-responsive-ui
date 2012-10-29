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


// jquery ready function is execute after the DOM is ready
$(document).ready(function() {

    var contentCollection = new ContentCollection();
    contentCollection.fetch({
        error: function(model, response) {
            $('body').append('<h3>ERROR - ContentCollection: </h3>' + '<br />' + JSON.stringify(response));
        },
        success: function(model, response) {
            $('body').append('<h3>SUCCESS - ContentCollection: </h3> ' + '<br />'  + JSON.stringify(response));
        }});

    var dashboardModel = new DashboardModel();
    dashboardModel.fetch({
        error: function(model, response) {
            $('body').append('<h3>ERROR - DashboardModel: </h3>' + '<br />' + JSON.stringify(response));
        },
        success: function(model, response) {
            $('body').append('<h3>SUCCESS - DashboardModel: </h3>' + '<br />' + JSON.stringify(response));
        }});
});
