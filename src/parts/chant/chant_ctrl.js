(function(app) {
	var chantCtrl = function($scope, dataServ, $routeParams){
		$scope.index = $routeParams.ID;
		$scope.numOnly = /^[0-9]+$/;
		
		$scope.goToChant = function(){
			if ($scope.num > 0 && $scope.num < 655){
				var loc = window.location;
				loc.href = 'chant/' + $scope.num;
			}
			else{
				$scope.num = '';
			}
		}

		$scope.playsong = function(){
			var song = document.getElementById('song');
			if ($("#song").children().length < 1){
				var source= document.createElement('source');
				source.src = $scope.chant.audio;
				song.appendChild(source);
				song.pause();
			}

			if (song.paused){
				song.play();
				$('#play').removeClass('icon-line2-control-play');
				$('#play').addClass('icon-line2-control-pause');
			}
			else{
				song.pause();
				$('#play').removeClass('icon-line2-control-pause');
				$('#play').addClass('icon-line2-control-play');
			}
			console.dir(song);
		}

		jQuery(".lookupsong").keyup(function (e) {
			if (e.which == 13) {
				$scope.goToChant();
			}
		});

		$scope.loc = window.location.href;

		dataServ.getServData('chant', $routeParams.ID).then(function(data){
			$scope.chant = data;
			$scope.chant.audio = $routeParams.ID;
			if ($routeParams.ID.length == 1)
				$scope.chant.audio = '00' + $scope.chant.audio;
			else if ($routeParams.ID.length == 2)
				$scope.chant.audio = '0' + $scope.chant.audio;

			$scope.chant.audio = "http://hl.site90.com/H" + $scope.chant.audio + ".mp3"

		});
	};

	app.controller('chantCtrl', ['$scope', 'dataServ', '$routeParams', chantCtrl]);

})(angular.module('wsapp'));
