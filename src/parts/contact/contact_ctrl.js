(function(app) {
	var contactCtrl = function($scope, dataServ){
		$scope.sent = {};
		$scope.sent.show = false;
		// $scope.mail = {"name":"Dev Test","email":"dev@gmail.com","subject":"Subé","msg":"Subé"};

		$scope.sendEmail = function(){
			dataServ.sendEmail($scope.mail).then(function(data){
				$scope.mail = {};
				$scope.sent = data;
				$scope.sent.show = true;
				setTimeout(function(){
					$scope.sent.show = false;
				}, 2000);
				console.log(data);
			})
		}
	};

	app.controller('contactCtrl', ['$scope', 'dataServ', contactCtrl]);

})(angular.module('wsapp'));
