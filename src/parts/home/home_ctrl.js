(function(app) {
	var homeCtrl = function($scope, dataServ, wSEO){
		wSEO.setTitle('Hymnes & Louanges');

		$scope.goToChant = function(){
			if ($scope.num > 0 && $scope.num < 655){
				var loc = window.location;
				loc.href = 'chant/' + $scope.num;
			}
			else{
				$scope.num = '';
			}
		}

		$scope.chant = [];
		$scope.list = '';
		$scope.numOnly = /^[0-9]+$/;
		$scope.numCommas = /^[-,0-9]+$/;
		
		$scope.createList = function(){
			$scope.list = '';
			$scope.chant.map(function(item){
				$scope.list += item.n + ',';
			})
		}

		$scope.isValidNum = function(num){
			return (num > 0 && num < 655);
		}

		$scope.clearList = function(){
			$scope.chant = [];
			$scope.add = '';
		}

		$scope.addToList = function(){
			var index = $scope.chant.length;

			if ($scope.isValidNum($scope.add)){
				var obj = {};
				obj.n = $scope.add;
				$scope.chant.push(obj);
			} else {
				var nums = $scope.add.split(",");
				var w = 0;
				for (w = 0; w < nums.length ; w++){
					var num = nums[w];
					if ($scope.isValidNum(num)){
						var obj = {};
						obj.n = num;
						$scope.chant.push(obj);
					}
					else {
						var jump = num.split("-");
						if (jump.length == 2 && jump[0].length > 0 && jump[0] < jump[1]){
							var i = 0;
							for (i = jump[0]; i <= jump[1]; i++){
								var obj = {};
								obj.n = i;
								$scope.chant.push(obj);
							}
						}
					}
				}
			}

			var index = 0;
			for (index = 0; index < $scope.chant.length; index++)
				$scope.addNumToList($scope.chant[index]);

			$scope.createList();
		}

		$scope.addNumToList = function(obj){
			if ($scope.isValidNum(obj.n)){
				dataServ.getServData('titre', obj.n).then(function(data){
					obj.title = data;
				});
			}
		}

		$scope.removeIndex = function(index){
			$scope.chant.splice(index, 1);
			$scope.createList();
		}

		jQuery(".lookupsong").keyup(function (e) {
			if (e.which == 13) {
				$scope.goToChant();
			}
		});

		jQuery(".addtolist").keyup(function (e) {
			if (e.which == 13) {
				$scope.addToList();
			}
		});
	};

	app.controller('homeCtrl', ['$scope','dataServ', 'wSEO', homeCtrl]);

})(angular.module('wsapp'));
