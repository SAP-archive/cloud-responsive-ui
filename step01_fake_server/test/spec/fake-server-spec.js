describe("Fake Server Pragmatic REST API", function() {

    // For testing purposes we want to execute all AJAX calls sync; simplifies the specification
    beforeEach(function () {
        $.ajaxSetup({ async: false });

        // (2)
        this.addMatchers({

            // Only for JSON structures used in this project
            // Simple matcher; several pieces can be improved and refactored
            // Feel free to contribute ;)
            toBeStructurallyEqual: function(expected) {

                var actual = this.actual;

                // Ensure that actual and expected are of the same type
                if (Object.prototype.toString.call(actual) !== Object.prototype.toString.call(expected)) {
                    return false;
                }

                // Now, to simplify handling, we convert an object into an array just containing the object
                if (Object.prototype.toString.call(actual) === '[object Object]') {
                    actual = [ actual ];
                }
                // and expected into an object
                if (Object.prototype.toString.call(expected) === '[object Array]') {
                    expected = expected[0];
                }

                // Now all should be an array
                if (Object.prototype.toString.call(actual) === '[object Array]') {

                    // loop array
                    for (var i = 0; i < actual.length; i++) {

                        // Compare for same length
                        if (Object.keys(actual[i]).length !== Object.keys(expected).length) {
                            return false;
                        }

                        // Compare keys
                        for (var prop in actual[i]) {
                            if (!expected.hasOwnProperty(prop)) {
                                return false;
                            }


                            // --> REFACTOR

                            if (Object.prototype.toString.call(actual[i][prop]) === '[object Array]') {

                                for (var j = 0; j < actual[i][prop].length; j++) {

                                    // Compare for same length
                                    if (Object.keys(actual[i][prop][j]).length !== Object.keys(expected[prop][0]).length) {
                                        return false;
                                    }

                                    // Compare keys
                                    for (var prop_ in actual[i][prop][j]) {
                                        if (!expected[prop][0].hasOwnProperty(prop_)) {
                                            return false;
                                        }
                                    }

                                }
                            }

                            // <-- REFACTOR


                        }
                    }

                    return true;
                } 

                return false;
            }

        });
    });

    // Clean up afterwards and set back to default behavior
    afterEach(function () {
        $.ajaxSetup({ async: true });
    });


    describe("Content API", function() {

        var URI_CONTENT_API = "/api/v1/content";

        var EXPECTED_JSON_STRUCTURE_PIECE_OF_CONTENT = {    
                id: "",             
                title: "",
                sub_title: "",
                icon: "",
                tpl_name: ""
            };

        // (1)
        it("should make AJAX call to service: list every piece of content", function() {

            var status = "error";
            $.ajax({
                url: URI_CONTENT_API, 
                success: function() {
                    status = "success";
                }});

            expect(status).toEqual("success");

        });

        // (1)
        it("should make AJAX call to service: get specific piece of content", function() {

            var status = "error";
            $.ajax({
                url: URI_CONTENT_API + "/chapter1", 
                success: function() {
                    status = "success";
                }});

            expect(status).toEqual("success");

        });


        // (2)
        it("should validate returned data structure of service: list every piece of content", function() {

            // EXPECTED_JSON_STRUCTURE_PIECE_OF_CONTENT 1..n times

            var returnedJson = null;
            $.ajax({
                url: URI_CONTENT_API, 
                success: function(result) {
                    returnedJson = result;
                }});

            expect(returnedJson).toBeStructurallyEqual([ EXPECTED_JSON_STRUCTURE_PIECE_OF_CONTENT ]);

        });

        // (2)
        it("should validate returned data structure of service: get specific piece of content", function() {

            // EXPECTED_JSON_STRUCTURE_PIECE_OF_CONTENT 1 time

            var returnedJson = null;
            $.ajax({
                url: URI_CONTENT_API + "/chapter1", 
                success: function(result) {
                    returnedJson = result;
                }});

            expect(returnedJson).toBeStructurallyEqual(EXPECTED_JSON_STRUCTURE_PIECE_OF_CONTENT);

        });

    });

    describe("Dashboard API", function() {

        var URI_DASHBOARD_API = "/api/v1/dashboard";

        var EXPECTED_JSON_STRUCTURE_DASHBOARD = {

            tweet_count: "",
            re_tweet_count: "",

            latest_tweets: [    // 1..5
                {
                    created_at: "",
                    from_user: "",
                    from_user_name: "",
                    profile_image_url: "",
                    text: ""
                }
            ],

            hottest_tweets: [   // 1..5
                {
                    created_at: "",
                    from_user: "",
                    from_user_name: "",
                    profile_image_url: "",
                    text: ""
                }
            ],

            leaderboard: [  // 1..5
                {
                    user: "",
                    user_name: "",
                    profile_image_url: "",
                    tweet_count: "",
                    re_tweet_count: ""
                }
            ]};

        // (1)
        it("should make AJAX call to service: list every dashboard", function() {

            var status = "error";
            $.ajax({
                url: URI_DASHBOARD_API, 
                success: function() {
                    status = "success";
                }});

            expect(status).toEqual("success");

        });

        // (1)
        it("should make AJAX call to service: get specific dashboard", function() {

            var status = "error";
            $.ajax({
                url: URI_DASHBOARD_API + "/latest", 
                success: function() {
                    status = "success";
                }});

            expect(status).toEqual("success");

        });

        // (2)
        it("should validate returned data structure of service: list every dashboard", function() {

            // EXPECTED_JSON_STRUCTURE_PIECE_OF_CONTENT 1..n times

            var returnedJson = null;
            $.ajax({
                url: URI_DASHBOARD_API, 
                success: function(result) {
                    returnedJson = result;
                }});

            expect(returnedJson).toBeStructurallyEqual([ EXPECTED_JSON_STRUCTURE_DASHBOARD ]);

        });

        // (2)
        it("should validate returned data structure of service: get specific dashboard", function() {

            // EXPECTED_JSON_STRUCTURE_DASHBOARD 1 time

            var returnedJson = null;
            $.ajax({
                url: URI_DASHBOARD_API + "/latest",
                success: function(result) {
                    returnedJson = result;
                }});

            expect(returnedJson).toBeStructurallyEqual(EXPECTED_JSON_STRUCTURE_DASHBOARD);

        });

    });


});


