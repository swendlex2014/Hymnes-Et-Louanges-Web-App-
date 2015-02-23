(function(app) {
 var wsIndex = function(){
 return {
 restrict: 'AE',
 controller : 'indexCtrl',
 templateUrl : 'pages/index.html'
 };
 };
 
 app.directive('wsIndex', wsIndex);
 
 })(angular.module('wsapp'));
 