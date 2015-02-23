(function(app) {
 var wsContact = function(){
 return {
 restrict: 'AE',
 controller : 'contactCtrl',
 templateUrl : 'pages/contact.html'
 };
 };
 
 app.directive('wsContact', wsContact);
 
 })(angular.module('wsapp'));
 