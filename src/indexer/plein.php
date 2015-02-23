<!doctype html>
<html dir="ltr" lang="fr" ng-app="wsapp">

<head>
	<meta charset="utf-8">
    <base href="/hl/">
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	
	<?php require_once('seo.php') ?>
	
	<link rel="stylesheet" href="css/reveal.min.css">
	<link rel="stylesheet" href="css/theme/night.css" id="theme">
	<link rel="stylesheet" href="lib/css/zenburn.css">
	<script>
		if( window.location.search.match( /print-pdf/gi ) ) {
			var link = document.createElement( 'link' );
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = 'css/print/pdf.css';
			document.getElementsByTagName( 'head' )[0].appendChild( link );
		}
	</script>
</head>

<body>

	<div class="reveal">
		<div class="slides">
			<section ng-controller="revealSlideController">
				<view-title>{{slides.s[0].t}}</view-title>
				<section ng-repeat="w in slides.s" on-last-repeat="revealAllSlides" data-background="img/slide_bg.png">
					<h2 ng-bind-html="w.t | sanitize"></h2> 
					<p ng-bind-html="w.p | sanitize"></p> 
				</section>
			</section>

		</div>

	</div>

	<script src="lib/js/head.min.js"></script>
	<script src="js/reveal.min.js"></script>
	<script type="text/javascript" src="js/dependencies/showdown.min.js"></script>
	<script type="text/javascript" src="js/angular/angular.min.js"></script>
	<script type="text/javascript" src="js/angular/angular-route.min.js"></script>
	<script type="text/javascript" src="js/angular/angular-sanitize.min.js"></script>
	<script type="text/javascript" src="js/angular/angularjs-viewhead.js"></script>
    <script type="text/javascript" src="js/angular/patternRestrict.js"></script>
	<script type="text/javascript" src="js/pleinapp.js"></script>
	<script>
		function getParamValue( name ) {
			name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
			var regexS = "[\\?&]"+name+"=([^&#]*)";
			var regex = new RegExp( regexS );
			var results = regex.exec( window.location.href );
			if( results == null )
				return "";
			else
				return results[1];
		}

		(function(app) {
			var revealSlideController = function($scope, dataServ){
				$scope.$on('revealAllSlides', function(){
					Reveal.initialize({
						controls: true,
						progress: true,
						history: true,
						center: true,
						theme: Reveal.getQueryHash().theme,
						transition: Reveal.getQueryHash().transition || 'zoom', 

						dependencies: [
						{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
						{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
						{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
						{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
						{ src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
						{ src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
						]
					});
				});

				console.dir(window.location);
				$scope.num = getParamValue('c');
				if ($scope.num.length < 1){
					var index = window.location.pathname.lastIndexOf('/') + 1;
					$scope.num = window.location.pathname.substring(index);
				};
				dataServ.getServData('full', $scope.num).then(function(data){
					$scope.slides = data;
				})

			};

			app.controller('revealSlideController', ['$scope', 'dataServ', revealSlideController]);

		})(angular.module('wsapp'));

	</script>

</body>
</html>
