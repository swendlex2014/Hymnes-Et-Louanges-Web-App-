(function(app) {
	var footerCtrl = function($scope, dataServ){
		$scope.sendEmail = function(){
			dataServ.sendEmail($scope.mail).then(function(data){
				$scope.mail = {};
				$scope.sent = data;
				$scope.sent.show = true;
				setTimeout(function(){
					$scope.sent.show = false;
				}, 2000);
			})
		}

		dataServ.getServData('footer').then(function(data){
			$scope.footer = data;
			document.wsConfig.analytics();
		})

		$('body,html').stop(true).animate({scrollTop:0},400);
	};

	app.controller('footerCtrl', ['$scope', 'dataServ', footerCtrl]);

})(angular.module('wsapp'));
