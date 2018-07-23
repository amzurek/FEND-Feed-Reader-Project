$(function() {

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

          it('have URLs defined / not empty', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toEqual('');
            }
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('names are defined / not empty', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toEqual('');
            }
        });
   });

    	/* A new test suite named "The menu" */

    	describe('The menu', function () {

       		/* A test that ensures the menu element is
        	* hidden by default. 
       		*/

        	it('menu is hidden', function () {
            	expect($('body').hasClass('menu-hidden')).toEqual(true);
        	});

			/* A test that ensures the menu changes
		 	* visibility when the menu icon is clicked. A test
		 	* have two expectations: does the menu display when
		 	* clicked and does it hide when clicked again.
			*/
        
        	it('show/hidden when menu clicked', function () {
            	$('.menu-icon-link').click();
            		expect($('body').hasClass('menu-hidden')).toEqual(false);
            
            	$('.menu-icon-link').click();
            		expect($('body').hasClass('menu-hidden')).toEqual(true);
        	});
    	});  

    	/* A new test suite named "Initial Entries" */

    	describe('Initial Entries', function () {

        	/* A test that ensures when the loadFeed
         	* function is called and completes its work, there is at least
         	* a single .entry element within the .feed container.
        	*/

        	beforeEach(function (done) {
            	loadFeed(0, done);
        	});

        	it('on entry when loaded', function () {
            	expect($('.feed .entry').length).toBeGreaterThan(0);
        	});
    	}); 

    	/* A new test suite named "New Feed Selection" */

    	describe('New Feed Selection', function() {

			/* A test that ensures when a new feed is loaded
		 	 * by the loadFeed function that the content actually changes.
			*/

        	var $feedOne;
        	var $feedTwo
        
        	beforeEach(function(done) {
            	loadFeed(1, function() {
                	feedOne = $('.feed').html();
                	done();
            	});        
         	});

        	it('feeds are different?', function(done) {
            	loadFeed(2, function() {
            	feedTwo = $('.feed').html();
            	expect(feedTwo).not.toEqual(feedOne);
            	done();	        
        	});   
        	}); 
    	});       
}());





   

   

