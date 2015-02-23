(function(app) {
 var wsChant = function(){
 return {
 restrict: 'AE',
 controller : 'chantCtrl',
 templateUrl : 'pages/chant.html'
 };
 };
 
 app.directive('wsChant', wsChant);
 
 })(angular.module('wsapp'));
 