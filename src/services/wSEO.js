(function(app) {
	var wSEO = function($rootScope) {
		$rootScope.og = {};
		$rootScope.og.title = 'WS | APP';
		$rootScope.og.type = 'website';
		$rootScope.og.description = document.wsConfig.description;
		$rootScope.og.image = window.location.origin + document.wsConfig.image;
		$rootScope.og.url = window.location.href;
		$rootScope.og.site_name = document.wsConfig.siteName;

		$rootScope.twitter = {};
		$rootScope.twitter.card = 'WS | APP';
		$rootScope.twitter.title = 'WS | APP';
		$rootScope.twitter.description = document.wsConfig.description;
		$rootScope.twitter.image = window.location.origin + document.wsConfig.image;
		$rootScope.twitter.site = document.wsConfig.twitter;
		$rootScope.twitter.creator = document.wsConfig.twitterSite;
		

		$rootScope.title = 'WS | APP';
		$rootScope.description = 'WS | APP';
		$rootScope.keywords = document.wsConfig.keywords;
		$rootScope.author = document.wsConfig.author;
		return {
			setTitle: function(data) { 
				$rootScope.title = data; 
				$rootScope.og.title = data; 
				$rootScope.twitter.title = data; 
				$rootScope.twitter.card = data; 
			},

			setSiteName : function(data){
				$rootScope.og.site_name = data;
			},

			setTwitterPublisher : function(data){
				$rootScope.twitter.site = data;
			},

			setImage : function(data){
				$rootScope.og.image = data;
				$rootScope.twitter.image = data;
			},

			setKeywords: function(data) { 
				$rootScope.keywords += data; 
			},	

			setType : function(data){
				$rootScope.og.type = data;
			},

			setUrl : function(data){
				$rootScope.og.url = data;
				$rootScope.twitter.site = data;
			},

			setDescription: function(data) { 
				$rootScope.description = data; 
				$rootScope.twitter.description = data;
				$rootScope.og.description = data;
			},			
		};
	};

	app.factory('wSEO', ['$rootScope', wSEO]);

})(angular.module('wsapp'));
