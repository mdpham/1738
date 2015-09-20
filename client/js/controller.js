 fetty.controller("FettyController", ["$scope", "$meteor", "Soundcloud", "SoundManager",
	function($scope, $meteor, Soundcloud, SoundManager){
		//FettyWap userID
		var Soundcloud = new Soundcloud("de30c3bc571c2f847651eaa8a38facb0", "35225382");
		$scope.SoundManager = new SoundManager();

		Soundcloud
			.getTracks()
			.then(function(result){
				// $scope.tracks = result;
				// console.log($scope.tracks, $(".track-image"));
				$scope.SoundManager = new SoundManager(result);
			});


		//Playing track
		$scope.playTrack = function(track){
			console.log(track);
			$scope.SoundManager.playTrack(track);
			$scope.currentTrack = track;
			$(".bottom.inverted.sidebar").sidebar("show");
		};

		//Play/pause
		$scope.togglePlay = function(){
			$scope.playState = $scope.SoundManager.deltaPlay();
		};

		//Playback
		$scope.playback = $scope.SoundManager.playback;
		$scope.togglePlayback = function(){
			$scope.playback = $scope.SoundManager.deltaPlayback();
		};

		//Volume Control
		$scope.volumeUp = function(){
			$scope.volume = $scope.SoundManager.deltaVolume(true);
		};
		$scope.volumeDown = function(){
			$scope.volume = $scope.SoundManager.deltaVolume(false);
		};
}]);