(function(app) {
 var wsHome = function(){
 return {
 restrict: 'AE',
 controller : 'homeCtrl',
 templateUrl : 'pages/home.html'
 };
 };
 
 app.directive('wsHome', wsHome);
 
 })(angular.module('wsapp'));
 