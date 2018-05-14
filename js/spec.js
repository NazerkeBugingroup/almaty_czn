$(document).ready(function() {
    $('.eye').click(function () {
        $('.top-imp').css("display", "block");
    function loadstyle() {
        if ($.cookie('fontSize'))
            parent.$(".version-impairment *").css("fontSize", $.cookie('fontSize'));
        if ($.cookie('background'))
            parent.$(".version-impairment *").css("background", $.cookie('background'))
        else
            parent.$(".version-impairment *").css("background-color", "#fff");
        if ($.cookie('color'))
            parent.$(".version-impairment *").css("color", $.cookie('color'))
        else
            parent.$(".version-impairment *").css("color", "#000");
        if ($.cookie('letter-spacing'))
            parent.$(".version-impairment *").css("letter-spacing", $.cookie('letter-spacing'));
        if ($.cookie('img-color'))
            parent.$("img").css("-webkit-filter", $.cookie('img-color'))
        else
            parent.$("img").css("-webkit-filter", "grayscale(100%)");
        if ($.cookie('font-family'))
            parent.$(".version-impairment *").css("font-family", $.cookie('font-family'));
        parent.$('.glyphicon').css("font-family", 'Glyphicons Halflings');
        parent.$('.fa').css("font-family", 'FontAwesome');
    }
    loadstyle();
    if ($.cookie('img') == '2') {
        parent.$(".version-impairment img").hide();
    } else {
        parent.$(".version-impairment img").show();
    }
    if ($.cookie('inter') == '2') {
        parent.$(".version-impairment *").css("line-height", "2");
    } else {
        parent.$(".version-impairment *").css("line-height", "1");
    }
    $("#font1").click(function() {
        parent.$('.version-impairment *').css("font-family", 'Times new roman');
        $.cookie('font-family', 'Times new roman');
        parent.$('.glyphicon').css("font-family", 'Glyphicons Halflings');
    })
    $("#font2").click(function() {
        parent.$('.version-impairment *').css("font-family", 'Arial');
        $.cookie('font-family', 'Arial');
        parent.$('.glyphicon').css("font-family", 'Glyphicons Halflings');
    })
    $("#a1").click(function() {
        parent.$('.version-impairment *').css("fontSize", "+=2");
        $.cookie('fontSize', parent.$(".version-impairment *").css("fontSize"));
    })
    $("#a2").click(function() {
        parent.$('.version-impairment *').css("fontSize", "-=2");
        $.cookie('fontSize', parent.$(".version-impairment *").css("fontSize"));
    })
    $("#c1").click(function() {
        parent.$(".version-impairment *").css("background-color", "#fff");
        parent.$(".version-impairment *").css("color", "#000");
        parent.$("img").css("-webkit-filter", "grayscale(100%)");
        $.cookie('background', "#ddd");
        $.cookie('color', "#000");
        $.cookie('img-color', "grayscale(100%)");
    })
    $("#c2").click(function() {
        parent.$(".version-impairment *").css("background", "#000");
        parent.$(".version-impairment *").css("color", "#fff");
        parent.$("img").css("-webkit-filter", "grayscale(1)");
        $.cookie('background', "#000");
        $.cookie('color', "#fff");
        $.cookie('img-color', "grayscale(1)");
    })
    $("#c3").click(function() {
        parent.$(".version-impairment *").css("background", "#9dd1ff");
        parent.$(".version-impairment *").css("color", "#0a5073");
        parent.$("img").css("-webkit-filter", "grayscale(100%)");
        $.cookie('background', "#9dd1ff");
        $.cookie('color', "#0a5073");
        $.cookie('img-color', "grayscale(100%)");
    })
    $("#c4").click(function() {
        parent.$(".version-impairment *").css("background", "#f7f3d6");
        parent.$(".version-impairment *").css("color", "#4d4b43");
        parent.$("img").css("-webkit-filter", "sepia(100%)");
        $.cookie('background', "#f7f3d6");
        $.cookie('color', "#4d4b43");
        $.cookie('img-color', "sepia(100%)");
    })
    $("#c5").click(function() {
        parent.$(".version-impairment *").css("background", "#3b2716");
        parent.$(".version-impairment *").css("color", "#a9e44d");
        parent.$("img").css("-webkit-filter", "hue-rotate(240deg)");
        $.cookie('background', "#3b2716");
        $.cookie('color', "#a9e44d");
        $.cookie('img-color', "hue-rotate(240deg)");
    })
    $("input:radio[name=imgvis]").change(function() {
        if ($(this).val() == 1) {
            parent.$(".version-impairment img").show();
            $.cookie('img', '1');
        } else {
            parent.$(".version-impairment img").hide();
            $.cookie('img', '2');
        }
    })
    $("#i1").click(function() {
        parent.$(".version-impairment *").css("letter-spacing", "+=0.1em");
        $.cookie('letter-spacing', parent.$(".version-impairment *").css("letter-spacing"));
    })
    $("#i2").click(function() {
        parent.$(".version-impairment *").css("letter-spacing", "-=0.1em");
        $.cookie('letter-spacing', parent.$(".version-impairment *").css("letter-spacing"));
    })
    $("input:radio[name=inter]").change(function() {
        if ($(this).val() == 1) {
            parent.$(".version-impairment *").css("line-height", "1");
            $.cookie('inter', '1');
        } else {
            parent.$(".version-impairment *").css("line-height", "2");
            $.cookie('inter', '2');
        }
    })
    $("#reset").click(function() {
        $.cookie('inter', '');
        $.cookie('fontSize', '');
        $.cookie('letter-spacing', ''); -
        $.cookie('font-family', '');
        $.cookie('img', '');
        $.cookie('img-color', '');
        $.cookie('color', '');
        $.cookie('background', '');
        $.cookie('font-family', '');
        parent.location.reload();
    })

});
});
