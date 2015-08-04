//Factory for single artist pages
fetty.factory("Soundcloud", ["$q", function($q){
	//Constructor
	function Soundcloud(client_id, user_id) {
		SC.initialize({
			client_id: client_id,
			redirect_uri: ""
		});

		this.userID = user_id;
		this.uri = {
			base: "http://api.soundcloud.com",
			tracks: "http://api.soundcloud.com/tracks/",
			users: "http://api.soundcloud.com/users/",
			credentials: "?client_id=9d3700f41a6e7c052108742a6d661971"
		};
	};

	//Instance methods
	Soundcloud.prototype = {
		getTracks: function(){
			var deferred = $q.defer();
			SC.get("/tracks", {user_id:this.userID, limit:100}, function(tracks){
				_.each(tracks, function(t){
					t.data = {};
					t.data.artworkURL = 
						(t.artwork_url ? 
							(t.artwork_url.replace("large", "t500x500")) :
							(t.user.avatar_url ? t.user.avatar_url.replace("large", "t500x500") : ""))
				});
				console.log(tracks);
				deferred.resolve(tracks);
			})
			return deferred.promise;
		},
		playTrack: function(track){
			soundManager.stopAll();
			soundManager.destroySound("current");
			//Create sound
			soundManager.createSound({
				id: "current",
				url: track.stream_url + "?client_id=2ac78168bf000e39b7e4b9b476994cf2",
				volume: 50,
				ondataerror: function(){
					console.log("DATAERROR");
				}
			}).play();
		}
	};

	//Static methods
	Soundcloud.goTo = function(){
		
	}


	return (Soundcloud);
}]);