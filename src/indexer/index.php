<!DOCTYPE html>
<html dir="ltr" lang="fr" ng-app="wsapp">
<head>
    <!-- Google Webmaster Tools -->
    <meta name="google-site-verification" content="auWLh2j-_GSzy7T1CGoJJ21hiENPHO0s0hc-CVRDnkk" />
    <base href="/hl/">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <?php require_once('seo.php') ?>

    <link href="http://fonts.googleapis.com/css?family=Lato:300,400,400italic,600,700|Raleway:300,400,500,600,700|Crete+Round:400italic" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
    <link rel="stylesheet" href="ws.static.min.css" type="text/css" />
    <link rel="stylesheet" href="ws.min.css" type="text/css" />
    <link rel="stylesheet" href="css/dark.css" type="text/css" />
    <link rel="stylesheet" href="css/font-icons.css" type="text/css" />
    <link rel="stylesheet" href="css/animate.css" type="text/css" />
    <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
    <link rel="shortcut icon" href="img/fav.ico" />
    <link rel="stylesheet" href="css/responsive.css" type="text/css" />
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/plugins.js"></script>
    <script async src="http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>
<body class="stretched side-header">
    <div id="wrapper" class="clearfix">

        <!-- Header
        ============================================= -->
        <header id="header" class="no-sticky dark">

            <div id="header-wrap">

                <div class="container clearfix">

                    <div id="primary-menu-trigger"><i class="icon-reorder"></i></div>

                    <div id="logo" class="nobottomborder">
                        <a ng-href="home"  class="standard-logo" data-dark-logo="img/hlogo.png"><img src="img/hlogo.png" alt="Canvas Logo"></a>
                        <a ng-href="home" class="retina-logo" data-dark-logo="img/hlogo.png"><img src="img/hlogo.png" alt="Canvas Logo"></a>
                    </div><!-- #logo end -->

                    <nav id="primary-menu">

                        <ul>
                            <li><a ng-href="home"><div>Accueil</div></a></li>
                            <li><a ng-href="chant/1"><div>Chant</div></a></li>
                            <li><a ng-href="alphabet/A"><div>Index (A-Z)</div></a></li>
                            <li><a ng-href="numero/1"><div>Index (1-654)</div></a></li>
                            <li><a ng-href="contact"><div>Contact</div></a></li>
                        </ul>

                    </nav>

                    <!-- <div class="clearfix visible-md visible-lg">
                        <a href="#" class="social-icon si-small si-borderless si-facebook">
                            <i class="icon-facebook"></i>
                            <i class="icon-facebook"></i>
                        </a>

                        <a href="#" class="social-icon si-small si-borderless si-twitter">
                            <i class="icon-twitter"></i>
                            <i class="icon-twitter"></i>
                        </a>

                        <a href="#" class="social-icon si-small si-borderless si-gplus">
                            <i class="icon-gplus"></i>
                            <i class="icon-gplus"></i>
                        </a>

                        <a href="#" class="social-icon si-small si-borderless si-pinterest">
                            <i class="icon-pinterest"></i>
                            <i class="icon-pinterest"></i>
                        </a>

                        <a href="#" class="social-icon si-small si-borderless si-github">
                            <i class="icon-github"></i>
                            <i class="icon-github"></i>
                        </a>
                    </div> -->

                </div>

            </div>

        </header>
        <div ng-view></div>
    </div>


    <div id="gotoTop" class="icon-angle-up"></div>
    <script type="text/javascript" src="js/functions.js"></script>
    <script type="text/javascript" src="js/dependencies/showdown.min.js"></script>
    <script type="text/javascript" src="js/angular/angular.min.js"></script>
    <script type="text/javascript" src="js/angular/angular-route.min.js"></script>
    <script type="text/javascript" src="js/angular/angular-sanitize.min.js"></script>
    <script type="text/javascript" src="js/angular/angularjs-viewhead.js"></script>
    <script type="text/javascript" src="js/angular/patternRestrict.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/wsinit.js"></script>

</body>
</html>