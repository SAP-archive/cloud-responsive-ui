var DUMMY_CONTENT = "<div class=\"container\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc...</div><div class=\"container-padding\"><button class=\"btn\" type=\"button\"><i class=\"icon-book\"></i> Read blog</button> <button class=\"btn\" type=\"button\"><i class=\"icon-download-alt\"></i> Get code</button></div>";

var JSON_PIECE_OF_CONTENT_HOME = {
    id: "#home",
    title: "HOME",
    sub_title: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.",
    icon: "icon_home.png",
    content: DUMMY_CONTENT
};    

var JSON_PIECE_OF_CONTENT_CHAPTER_1 = {
    id: "#chapter1",
    title: "CHAPTER 1",
    sub_title: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.",
    icon: "icon_book.png",
    content: DUMMY_CONTENT
};

var JSON_PIECE_OF_CONTENT_CHAPTER_2 = {
    id: "#chapter2",
    title: "CHAPTER 2",
    sub_title: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.",
    icon: "icon_book.png",
    content: DUMMY_CONTENT
};

var JSON_PIECE_OF_CONTENT_CHAPTER_3 = {
    id: "#chapter3",
    title: "CHAPTER 3",
    sub_title: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.",
    icon: "icon_book.png",
    content: DUMMY_CONTENT
};

var JSON_PIECE_OF_CONTENT_CHAPTER_4 = {
    id: "#chapter4",
    title: "CHAPTER 4",
    sub_title: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.",    
    icon: "icon_book.png",
    content: DUMMY_CONTENT
};

var JSON_PIECE_OF_CONTENT_CHAPTER_5 = {
    id: "#chapter5",
    title: "CHAPTER 5",
    sub_title: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.",
    icon: "icon_book.png",
    content: DUMMY_CONTENT
}; 

var JSON_PIECE_OF_CONTENT_CHAPTER_6 = {
    id: "#chapter6",
    title: "CHAPTER 6",
    sub_title: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    icon: "icon_book.png",
    content: DUMMY_CONTENT
}; 

var JSON_PIECE_OF_CONTENT_ABOUT = {
    id: "#about",
    title: "ABOUT",
    sub_title: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.",
    icon: "icon_about.png",
    content: DUMMY_CONTENT
};    


var JSON_CONTENT = [
    JSON_PIECE_OF_CONTENT_HOME,
    JSON_PIECE_OF_CONTENT_CHAPTER_1,
    JSON_PIECE_OF_CONTENT_CHAPTER_2,
    JSON_PIECE_OF_CONTENT_CHAPTER_3,
    JSON_PIECE_OF_CONTENT_CHAPTER_4,
    JSON_PIECE_OF_CONTENT_CHAPTER_5,
    JSON_PIECE_OF_CONTENT_CHAPTER_6,
    JSON_PIECE_OF_CONTENT_ABOUT
];

var JSON_DASHBOARD = {

            tweet_count: "120",
            re_tweet_count: "10",

            latest_tweets: [    // 1..3
                {
                    created_at: "15 Aug 2012, 20:33:57",
                    from_user: "Nick 1",
                    from_user_name: "Username 1",
                    profile_image_url: "http://a0.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
                    text: "1 Lorem ipsum dolor sit amet, consectetuer adipiscing",
                },
                {
                    created_at: "15 Aug 2012, 21:33:57",
                    from_user: "Nick 2",
                    from_user_name: "Username 2",
                    profile_image_url: "http://a0.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
                    text: "2 Lorem ipsum dolor sit amet, consectetuer adipiscing",
                },
                {
                    created_at: "15 Aug 2012, 22:33:57",
                    from_user: "Nick 3",
                    from_user_name: "Username 3",
                    profile_image_url: "http://a0.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
                    text: "3 Lorem ipsum dolor sit amet, consectetuer adipiscing",
                }
            ],

            hottest_tweets: [   // 1..3
                {
                    created_at: "16 Aug 2012, 20:33:57",
                    from_user: "Nick 4",
                    from_user_name: "Username 4",
                    profile_image_url: "http://a0.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
                    text: "1 Lorem ipsum dolor sit amet, consectetuer adipiscing"
                },
                {
                    created_at: "17 Aug 2012, 20:33:57",
                    from_user: "Nick 5",
                    from_user_name: "Username 5",
                    profile_image_url: "http://a0.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
                    text: "2 Lorem ipsum dolor sit amet, consectetuer adipiscing"
                },
                {
                    created_at: "18 Aug 2012, 20:33:57",
                    from_user: "Nick 6",
                    from_user_name: "Username 6",
                    profile_image_url: "http://a0.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
                    text: "3 Lorem ipsum dolor sit amet, consectetuer adipiscing"
                }
            ],

            leaderboard: [  // 1..3 ... we assume that the order is given by the order they are shown
                {
                    user: "Nick 7",
                    user_name: "Username 7",
                    profile_image_url: "http://a0.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
                    tweet_count: "25",
                    re_tweet_count: "2"
                },
                {
                    user: "Nick 8",
                    user_name: "Username 8",
                    profile_image_url: "http://a0.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
                    tweet_count: "15",
                    re_tweet_count: "3"
                },
                {
                    user: "Nick 9",
                    user_name: "Username 9",
                    profile_image_url: "http://a0.twimg.com/sticky/default_profile_images/default_profile_5_normal.png",
                    tweet_count: "9",
                    re_tweet_count: "0"
                }
            ]};

var JSON_DASHBOARDS = [
    JSON_DASHBOARD,
    JSON_DASHBOARD
];


// INIT

// We are using the high-level API to manipulate FakeXMLHttpRequest
// Since we fake the backend, we never restore the native XHR constructor 
// by calling server.restore(); This shoud only be done for development / demo purposes

// Creates a new server
var server = sinon.fakeServer.create();

// Setting autoRespond ensures that server.respondWith is automatically called after each request
server.autoRespond = true;



// RESPONSES

// API
//      Description: List every piece of content
//      Operation:   GET     
//      URI:         /api/v1/content/
server.respondWith("GET", "/api/v1/content", function (xhr) {
    xhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(JSON_CONTENT));
});

// API
//      Description: Get specific piece of content    
//      Operation    GET     
//      URI:         /api/v1/content/{id}
server.respondWith("GET", /\/api\/v1\/content\/(\w+)/, function (xhr, id) {
    xhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(JSON_PIECE_OF_CONTENT_CHAPTER_1));
});

// API
//      Description: List every dashboard                               
//      Operation    GET             
//      URI:        /api/v1/dashboard/
server.respondWith("GET", "/api/v1/dashboard", function (xhr) {
    xhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(JSON_DASHBOARDS));
});

// API
//      Description: Get specific dashboard   
//      Operation    GET     
//      URI:         /api/v1/content/{id}
server.respondWith("GET", /\/api\/v1\/dashboard\/(\w+)/, function (xhr, id) {
    xhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(JSON_DASHBOARD));
});






