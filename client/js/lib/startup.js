Meteor.startup(function(){
	config = {
		client_id: "2ac78168bf000e39b7e4b9b476994cf2",
		// username: "xylo100", //user_id: 49699208git
		username: "ohwondermusic",
		user_id: {
			ow: "95824500",
			xylo: "120618222"
		},
		api: {
			base: "http://api.soundcloud.com",
			tracks: "http://api.soundcloud.com/tracks/",
			users: "http://api.soundcloud.com/users/",
			credentials: "?client_id=2ac78168bf000e39b7e4b9b476994cf2"
		}
	};

	SC.initialize({
		client_id: config.client_id,
		redirect_uri: ""
	});

	// SC.get("https://api.soundcloud.com/resolve.json?url=http://soundcloud.com/"+config.username+"&client_id="+config.client_id,
	// function(user){
	// 	console.log('user', user);
	// 	//Get user
	// 	SC.get("/tracks", {user_id:95824500, limit: 100}, function(t){
	// 		console.log('tracks', t);
	// 	});

	// });

	// SC.get("https://api.soundcloud.com/resolve.json?url="+"https://soundcloud.com/harlem_fetty"+config.api.credentials,
	// 	function(fetty){
	// 		console.log("fetty", fetty );
	// 		SC.get("/tracks", {user_id:fetty.id, limit:10}, function(t){
	// 			console.log("fet tracks", t);
	// 		})
	// 	});
});