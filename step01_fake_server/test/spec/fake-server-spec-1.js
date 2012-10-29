describe("Fake Server Pragmatic REST API", function() {

    beforeEach(function () {
        // For testing purposes we want to execute all AJAX calls sync; simplifies the specification
        $.ajaxSetup({ async: false });
    });
        
    afterEach(function () {
        // Clean up afterwards and set back to default behavior
        $.ajaxSetup({ async: true });
    });

    describe("Content API", function() {

        var URI_CONTENT_API = "/api/v1/content";

        it("should make AJAX call to service: list every piece of content", function() {

            var status = "error";
            $.ajax({
                url: URI_CONTENT_API, 
                success: function() {
                    status = "success";
                }});

            expect(status).toEqual("success");

        });

        it("should make AJAX call to service: get specific piece of content", function() {

            var status = "error";
            $.ajax({
                url: URI_CONTENT_API + "/chapter1", 
                success: function() {
                    status = "success";
                }});

            expect(status).toEqual("success");

        });

    });


    describe("Dashboard API", function() {

        var URI_DASHBOARD_API = "/api/v1/dashboard";

        it("should make AJAX call to service: list every dashboard", function() {

            var status = "error";
            $.ajax({
                url: URI_DASHBOARD_API, 
                success: function() {
                    status = "success";
                }});

            expect(status).toEqual("success");

        });

        it("should make AJAX call to service: get specific dashboard", function() {

            var status = "error";
            $.ajax({
                url: URI_DASHBOARD_API + "/latest", 
                success: function() {
                    status = "success";
                }});

            expect(status).toEqual("success");

        });

    });

});