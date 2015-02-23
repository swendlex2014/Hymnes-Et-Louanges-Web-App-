(function(app) {
	var indexCtrl = function($scope, dataServ, $routeParams){
		$scope.numero = [];
		for (var i = 1; i < 654; i+=50) { 
			$scope.numero.push(i);
		}
		$scope.index = $routeParams.ID;
		dataServ.getServData('indexer', $routeParams.ID).then(function(data){
			$scope.alpha = data;
		})
	};

	app.controller('indexCtrl', ['$scope', 'dataServ', '$routeParams', indexCtrl]);

})(angular.module('wsapp'));
