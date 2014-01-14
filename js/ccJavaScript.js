function updateSizes() {   

    var width = $(window).width();
    var height = $(window).height();
    var headerMinH = 348;

    var fixedH = height*0.6;
    
    if (height > 580 && width > 640) {
        $('.mid-height').css('height', fixedH.toFixed(0));
    } else {
        $('.mid-height').css('height', headerMinH);
    }

    $('.full-height').css('height', height);

}

function scrollToElement( target ) {
    var topoffset = 30;
    var speed = 800;
    var destination = $( target ).offset().top - topoffset;
    $( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
        //window.location.hash = target;
    });
    return false;
}

function bottomMenu(obj) {
    var menuBottom = document.getElementById( 'cbp-spmenu-s4' );
    classie.toggle( obj, 'active' );
    classie.toggle( menuBottom, 'cbp-spmenu-open' );
    disableOther( 'showBottom' );
}

function disableOther( button ) {        
    if( button !== 'showBottom' ) {
      classie.toggle( showBottom, 'disabled' );
    }
}
