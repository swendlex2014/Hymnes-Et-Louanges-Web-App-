initDoc = function(){
    $(document).ready( SEMICOLON.documentOnReady.init );
    $window.load( SEMICOLON.documentOnLoad.init );
    $window.on( 'resize', SEMICOLON.documentOnResize.init );
}
initDoc();
setTimeout(SEMICOLON.documentOnReady.windowscroll, 100);