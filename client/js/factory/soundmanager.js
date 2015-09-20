//Factory for single artist pages
fetty.factory("SoundManager", function(){
	//Constructor
	function SoundManager(tracks) {
		this.playback = "random";
		//Tracks for playback
		this.tracks = tracks;
		//Current track
		this.currentTrack = null;

		//Playstate
		this.playState = "play";
	};

	//Instance methods
	SoundManager.prototype = {
		playTrack: function(track){
			//Update current track
			this.currentTrack = track;
			//Update playSate
			this.playState = "play";
			//Reset loading in menu player
			$(".menu-player-loading").addClass("active");
			//Reset sounds
			soundManager.stopAll();
			soundManager.destroySound("current");
			//Create sound
			soundManager.createSound({
				id: "current",
				url: track.stream_url + "?client_id=de30c3bc571c2f847651eaa8a38facb0",
				volume: 50,
				// volume: 0,
				ondataerror: function(){
					console.log("DATAERROR");
				},
				onload: function(){
					//Remove loading in menu player
					$(".menu-player-loading").removeClass("active");
					this.play();

				},
				onfinish: function(){
					SoundManager.playTrack(SoundManager.nextTrack());
				},
				whileplaying: function(){
					console.log("playing @ volume", this.volume);
				}
			}).load();
		},
		nextTrack: function(){
			var next = (this.playback == "random") ? 
				_.sample(this.tracks) : this.currentTrack;
			return next;
		},
		deltaVolume: function(toggleUp){
			var volume = soundManager.getSoundById("current").volume;
			switch (toggleUp) {
				case true:
					volume = Math.min(100, volume+7);
					break;
				case false:
					volume = Math.max(1, volume-7);
					break;
			};
			soundManager.getSoundById("current").setVolume(volume);
			return volume;
		},
		deltaPlayback: function(){
			this.playback = this.playback == "random" ? "repeat" : "random";
			return this.playback;
		},
		deltaPlay: function(){
			var playState;
			switch (this.playState) {
				case "play":
					soundManager.getSoundById("current").pause();
					playState = "pause";
					break;
				case "pause":
					soundManager.getSoundById("current").play();
					playState = "play";
					break;
			};
			this.playState = playState;
			return this.playState;
		}
	};

	return (SoundManager);
});