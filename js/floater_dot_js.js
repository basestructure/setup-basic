
var FloatThisDIV = jQuery( '.site-header' ), // the selector for the area that will be floated (#selector for id or .selector for class)
    StopAtThisDIV = jQuery( '.site-footer' ), // option if you want to stop floating somewhere
    StopAtThisDivDistance = 30; // distance of FloatThisDIV's bottom to StopAtThisDIV
    divMove = 0; // distance of the area's top to the document top's

var WinTop, divTop, divWidth, divMove, divBottom, StopAt;

jQuery( document ).ready( function() {
    
    // get floating div's top on document load
    divTop = FloatThisDIV.offset().top;
    
    // get floating div's width
    divWidth = FloatThisDIV.width();
    
    // call calibrate function
    CalibrateFloater();
    
});


jQuery(window).scroll(function() {
    
    // call calibrate function
    CalibrateFloater();
    
});


function CalibrateFloater() {

    // get window' top position when scrolling
    WinTop = jQuery(window).scrollTop();
    
    // stop floating at footer-widgets' top
    divBottom = WinTop + divMove + FloatThisDIV.outerHeight(true);
    
    StopAt = StopAtThisDIV.offset().top - StopAtThisDivDistance;
    
    // check current window top and trigger class changes
    if( WinTop > ( divTop.toFixed( 2 ) - divMove ) && divBottom < StopAt) {
        
        // scrolling down
        if ( FloatThisDIV.css("position") !== "fixed") {
            FloatThisDIV
                .removeAttr( 'style' )
                .css({ "position": "fixed","width": divWidth, "top": divMove });
        }
        
    } else if( divBottom >= StopAt ) {
        
        // stop at ...
        if ( FloatThisDIV.css("position") !== "absolute") {
            FloatThisDIV
                .removeClass( 'floater_floating' )
                .removeAttr( 'style' )
                .css({ "position": "absolute", "top": StopAt - FloatThisDIV.outerHeight(true), "width": divWidth });
        }
        
    }else {
        
        // scrolling up
        FloatThisDIV.removeAttr( 'style' );
        
    }
    
}