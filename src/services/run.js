(function(app) {
    var configuration = function($rootScope, $location){
        $rootScope.goto = function(path){
            $location.path(path);
        }
    }
    app.run(['$rootScope', '$location', configuration]); 
})(angular.module('wsapp'));