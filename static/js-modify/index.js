require("../../bower_components/zepto/zepto.js");
require("../../bower_components/velocity/velocity.min.js");
require("../../bower_components/swiper/dist/js/swiper.min.js");
window.onload = function(){
    $("#loading").velocity("fadeOut");
    w = window.screen.width;
    h = window.screen.height;
    $(".page1 .light").css({
        "height":w/320*152+"px",
        "margin-bottom":w/480*337.5+"px",
    });

    $("#p4-first-point").css({
        "left":w/320*30,
        "bottom":w/320*110
    });
    $("#p4-second-point").css({
        "left":w/320*122,
        "bottom":w/320*122
    });
    $("#p4-third-point").css({
        "right":w/320*28,
        "bottom":w/320*73
    });
    $("#p6-first-point").css({
        "left":w/320*230,
        "bottom":w/320*230
    });
    $("#p6-second-point").css({
        "left":w/320*262,
        "bottom":w/320*180
    });
    $("#p8-first-point").css({
        "left":w/320*227,
        "bottom":w/320*185
    });
    $("#p8-second-point").css({
        "left":w/320*290,
        "bottom":w/320*140
    });
    $(".p8-car").css({
        "height":w/320*228
    });
    $(".p8-car-outer").css({
        "height":w/320*228
    });
    $("#p10-first-point").css({
        "right":w/320*54,
        "bottom":w/320*228
    });
    $(".point").addClass("scole");
    $(".page .up").addClass("base-infinite");
    $(".page .up").addClass("up-animation");
    var swiper = new Swiper('.swiper-container', {
        direction:'vertical',
        lazyLoading:true,
        onInit: function() {
            $(".p1-text").removeClass("textup-p1");
            $(".p1-text").addClass("textup-p1");
            setTimeout(function(){
                $(".p1-text").removeClass("base");
                $(".p1-text").addClass("base-infinite-fly");
                $(".p1-text").addClass("fly");
                $(".light").velocity("fadeIn");
            },1500);
        },
        onSlideChangeEnd: function(swiper){
            console.log(swiper.activeIndex);
            if(swiper.activeIndex == 0) {
                $(".p1-text").removeClass("textup-p1");
                $(".p1-text").addClass("textup-p1");
                setTimeout(function(){
                    $(".p1-text").removeClass("base");
                    $(".p1-text").addClass("base-infinite-fly");
                    $(".p1-text").addClass("fly");
                },1500);
            }
            else if(swiper.activeIndex == 1) {
                $(".p2-text").removeClass("textup-p2");
                $(".p2-text").addClass("textup-p2");
                setTimeout(function(){
                    $(".p2-text").removeClass("base");
                    $(".p2-text").addClass("base-infinite-fly");
                    $(".p2-text").addClass("fly");
                },1500);
            }
            else if(swiper.activeIndex == 2) {
                $(".p3-text").removeClass("textup-p3");
                $(".p3-text").addClass("textup-p3");
                setTimeout(function(){
                    $(".p3-text").removeClass("base");
                    $(".p3-text").addClass("base-infinite-fly");
                    $(".p3-text").addClass("fly");
                },1500);
                first_b = w/320*64;
                second_b = w/320*90;
                third_b = w/320*220;
                first_l = w/320*74;
                second_l = w/320*192;
                third_l = w/320*5;
                $("#p3-first-point").css({
                    "bottom":first_b+"px",
                    "left":first_l+"px"
                });
                $("#p3-second-point").css({
                    "bottom":second_b+"px",
                    "left":second_l+"px"
                });
                $("#p3-third-point").css({
                    "bottom":third_b+"px",
                    "right":third_l+"px"
                });
            }
            else if(swiper.activeIndex == 3) {
                $(".p4-text").removeClass("textup-p4");
                $(".p4-text").addClass("textup-p4");
                setTimeout(function(){
                    $(".p4-text").removeClass("base");
                    $(".p4-text").addClass("base-infinite-fly");
                    $(".p4-text").addClass("fly");
                },1500);
            }
            else if(swiper.activeIndex == 4) {
                $(".p5-text").removeClass("textup-p5");
                $(".p5-text").addClass("textup-p5");
                setTimeout(function(){
                    $(".p5-text").removeClass("base");
                    $(".p5-text").addClass("base-infinite-fly");
                    $(".p5-text").addClass("fly");
                },1500);
            }
            else if(swiper.activeIndex == 5) {
                $(".p6-text").removeClass("textup-p6");
                $(".p6-text").addClass("textup-p6");
                setTimeout(function(){
                    $(".p6-text").removeClass("base");
                    $(".p6-text").addClass("base-infinite-fly");
                    $(".p6-text").addClass("fly");
                },1500);
            }
            else if(swiper.activeIndex == 6) {
                $(".p7-text").removeClass("textup-p7");
                $(".p7-text").addClass("textup-p7");
                setTimeout(function(){
                    $(".p7-text").removeClass("base");
                    $(".p7-text").addClass("base-infinite-fly");
                    $(".p7-text").addClass("fly");
                },1500);
            }
            else if(swiper.activeIndex == 7) {
                $(".p8-text").removeClass("textup-p8");
                $(".p8-text").addClass("textup-p8");
                setTimeout(function(){
                    $(".p8-text").removeClass("base");
                    $(".p8-text").addClass("base-infinite-fly");
                    $(".p8-text").addClass("fly");
                },1500);
                $(".p8-car-outer").addClass("car-left");
                setTimeout(function(){
                    $(".p8-car").addClass("car-fade-in");
                },1500);
            }
            else if(swiper.activeIndex == 8) {
                $(".p9-text").removeClass("textup-p9");
                $(".p9-text").addClass("textup-p9");
                setTimeout(function(){
                    $(".p9-text").removeClass("base");
                    $(".p9-text").addClass("base-infinite-fly");
                    $(".p9-text").addClass("fly");
                },1500);
            }
            else if(swiper.activeIndex == 9) {
                $(".p10-text").removeClass("textup-p10");
                $(".p10-text").addClass("textup-p10");
                $(".p10-text-bottom").removeClass("textup-p10-2");
                $(".p10-text-bottom").addClass("textup-p10-2");
                setTimeout(function(){
                    $(".p10-text").removeClass("base");
                    $(".p10-text").addClass("base-infinite-fly");
                    $(".p10-text").addClass("fly");
                    $(".p10-text-bottom").removeClass("base");
                    $(".p10-text-bottom").addClass("base-infinite-fly");
                    $(".p10-text-bottom").addClass("fly");
                },1500);
            }
        }
    });
    $(".up").bind("click",function(){
        swiper.slideNext(); 
    });
    $(".close").bind("click",function(){
        $(".menu").velocity("fadeOut");
    });
    var popMenu = function(text,url) {
        $(".menu > .title > .text").text(text);
        $(".menu > .background").css({
            "background":"url('/ford/public/image/ajax-loader.gif') no-repeat #fff",
            "background-position":"center",
            "background-size":"auto"
        });
        $.get(url,function(data){
            $(".menu > .background").css({
                "background":"url('"+url+"')",
                "background-size":"cover"
            });
        });

        $(".menu").velocity("fadeIn");
    }
    $("#p3-first-point").on("click",function(){
        popMenu("第三排电动折叠座椅","/ford/public/image/p3-first.png"); 
    });
    $("#p3-second-point").on("click",function(){
        popMenu("带有HFL的后排三区空调系统","/ford/public/image/p3-third.png");
    });
    $("#p3-third-point").on("click",function(){
        popMenu("智能前转系统提供更好的机动性","/ford/public/image/p3-second.png");
    });
    $("#p4-first-point").on("click",function(){
        popMenu("带“放闪烁”功能的自动高亮LED灯","/ford/public/image/p4-first.png");
    });
    $("#p4-second-point").on("click",function(){
        popMenu("360度全景影像可视系统","/ford/public/image/p4-second.png");
    });
    $("#p4-third-point").on("click",function(){
        popMenu("自动泊车系统让您泊车毫无压力","/ford/public/image/p4-third.png");
    });
    $("#p6-first-point").on("click",function(){
        popMenu("高质量的收工，奢华的用料和成品制作,柔软的手感接触，双色调设计形成了精致，高端的内饰设计","/ford/public/image/p6-first.png");
    });
    $("#p6-second-point").on("click",function(){
        popMenu("完美亲近大自然的全新超大尺寸全景天窗","/ford/public/image/p6-second.png");
    });
    $("#p8-first-point").on("click",function(){
        popMenu("盲区监视系统","/ford/public/image/p8-first.png");
    });
    $("#p8-second-point").on("click",function(){
        popMenu("车道保持功能、自适应巡航功能和低速行车安全系统","/ford/public/image/p8-second.png");
    });
    $("#p10-first-point").on("click",function(){
        popMenu("同级领先的动力表现全新EcoBoost 2.7升 GTDi双涡轮发动机带给您无与伦比的驾驶快感","/ford/public/image/p10-first.png");
    });
}
