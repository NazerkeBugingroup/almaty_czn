// basic_linear
// options.revers - change the direction of transition
function ws_basic_linear(options, images, container){
    var $ = jQuery;
    var $this = $(this);
    var ul = container.find('.ws_list');

    // create tempory box
    var effectDiv = $('<div>').addClass('ws_effect ws_basic_linear').css({
        position:'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    }).appendTo(container);

    var movingDiv = $('<div>').css({
        position:'absolute',
        display:'none',
        'z-index':2,
        width: '200%',
        height: '100%',
        transform: 'translate3d(0,0,0)'
    }).appendTo(effectDiv);

    var part1Div = $('<div>').css({
            position: 'absolute',
            left: 'auto',
            top: 'auto',
            width: '50%',
            height: '100%',
            overflow: 'hidden'
        }),
        part2Div = part1Div.clone();

    movingDiv.append(part1Div, part2Div);

    this.go = function(new_index,curIdx,dir){
        movingDiv.stop(1,1);
        if(dir == undefined)
            dir = (!!((new_index-curIdx+1)%images.length)^options.revers?'left':'right');
        else dir = dir?'left':'right';

        var curImg = $(images[curIdx]);
        var imageSizes = {
            width: curImg.width() || options.width,
            height: curImg.height() || options.height
        };

        // add current image
        curImg.clone().css(imageSizes).appendTo(part1Div).css(dir,0);
        // add new image
        $(images[new_index]).clone().css(imageSizes).appendTo(part2Div).show();

        if(dir == 'right') {
            part1Div.css('left','50%');
            part2Div.css('left',0);
        } else {
            part1Div.css('left',0);
            part2Div.css('left','50%');
        }

        // prepare params to animate
        var from = {}, to = {};

        from[dir] = 0;
        to[dir] = -container.width();

        // use transform
        if(options.support.transform) {
            if(dir == 'right') {
                from.left = from.right;
                to.left = -to.right;
            }
            from = { translate: [from.left, 0, 0] };
            to = { translate: [to.left, 0, 0] };
        }

        // hide images list
        ul.hide();

        // start animate
        wowAnimate(movingDiv.css({left:'auto',right:'auto',top:0}).css(dir,0).show(),
            from, to, options.duration, 'easeInOutExpo',
            function() {
                $this.trigger('effectEnd');
                movingDiv.hide().find('div').html('');
            }
        );
    }
};// init main object
// jQuery(document).ready - conflicted with some scripts
// Transition time = 2.4s = 44/10
// SlideShow delay = 6.5s = 19/10
jQuery('#wowslider-container1').wowSlider({
    effect:"glass_parallax",
    prev:"",
    next:"",
    duration: 19*100,
    delay:44*100,
    width:830,
    height:360,
    autoPlay:true,
    autoPlayVideo:false,
    playPause:false,
    stopOnHover:false,
    loop:false,
    bullets:0,
    caption: true,
    captionEffect:"fade",
    controls:false,
    responsive:3,
    fullScreen:false,
    gestures: 2,
    onBeforeStep:0,
    images:0
});