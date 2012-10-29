describe("App Session Supplements", function() {

    describe("Models and Collections", function() {

        beforeEach(function() {

            this.contentCollection = new ContentCollection();
            this.dashboardModel = new DashboardModel();

        });

        describe("when instantiated", function() {

            it("should ensure that ContentCollection url is set", function() {

                expect(this.contentCollection.url).toEqual("/api/v1/content");

            });

            it("should ensure that ContentCollection model is set", function() {

                expect(this.contentCollection.model).toBeDefined();
                expect(this.contentCollection.model).not.toBeNull();

            });

            it("should ensure that DashboardModel urlRoot is set", function() {

                expect(this.dashboardModel.urlRoot).toEqual("/api/v1/dashboard");

            });

            it("should ensure that DashboardModel id is set", function() {

                expect(this.dashboardModel.id).toEqual("latest");

            });

        });

        // We don't test for the semantics -> see fake-server-spec.js
        describe("when fetching models and collections", function() {

            beforeEach(function () {
                $.ajaxSetup({ async: false });
            });

            // Clean up afterwards and set back to default behavior
            afterEach(function () {
                $.ajaxSetup({ async: true });
            });

            it("should make AJAX call to content service", function() {

                var status = "error";
                this.contentCollection.fetch({
                    success: function(model, response) {
                        status = "success";
                    }});

                expect(status).toEqual("success");

            });

            it("should make AJAX call to dashboard service", function() {

                var status = "error";
                this.dashboardModel.fetch({
                    success: function(model, response) {
                        status = "success";
                    }});

                expect(status).toEqual("success");

            });

        });

    });

});