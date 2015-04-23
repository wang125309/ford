require("../../bower_components/zepto/zepto.js");
require("../../bower_components/zeptojs/src/touch.js");
require("../../bower_components/velocity/velocity.min.js");

window.onload = function() {
    $("#loading").velocity("fadeOut");
    h = $(window).height();
    w = $(window).width();
    $(".background").css({
        "background-position":1608+w/2+"px "+(2*h)+"px"
    });
    lx = 0;
    ly = 0;
    lz = 0;
    count = 0;
    var deviceMotionHandler = function(eventData) {
        console.log(eventData);
        xm = Math.round(eventData.alpha*10)/10;
        x = Math.round(6*h/360*xm+(1608+w/2));
        if(lx > 358&& xm<2) {
            count ++;
        }
        else if(lx < 2&& xm>358) {
            count --;
        }
        lx = xm;
        z = Math.round(3*h/180*Math.round(eventData.beta*10)/10+h);
        y = Math.round(6*h/180*Math.round(eventData.gamma*10)/10);
        x = count*3216+x;
        if(z>643&&z<=1608) {
            $(".background").css({
                "background-position":x+y+"px "+z+"px"
            });
        }
        else if(z<643){
            $(".background").css({
                "background-position":x+y+"px "+643+"px"
            });
        
        }
        else if(z>1608){
            $(".background").css({
                "background-position":x+y+"px "+1608+"px"
            });
        
        }
    };
    var u = navigator.userAgent;
    if (u.indexOf('iPhone') > -1) {
        window.addEventListener('deviceorientation',deviceMotionHandler,false);
        $(".move").addClass("move-iphone");
        $(".move-text").html("横向移动");
        setTimeout(function(){
            $(".move").velocity("fadeOut");
            $(".move-text").velocity("fadeOut");
        },3000);
    }
    else {
    x = 0;
    y = 0;
    mx = 1608+w/2;
    my = 2*h;
        $(".move").addClass("move-android");
        $(".move-text").html("清扫观赏全景");
        setTimeout(function(){
            $(".move").velocity("fadeOut");
            $(".move-text").velocity("fadeOut");
        },3000);
    $(".background").on("touchstart",function(e){
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
        
    });
    $(".background").on("touchend",function(e){
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
        
    });
    $(".background").on("touchmove",function(e){
        console.log(e.touches[0]);
        e.preventDefault();
        setTimeout(function(){
            mx += e.touches[0].clientX - x-2;
            x = e.touches[0].clientX;
            my += e.touches[0].clientY-y-2;
            y = e.touches[0].clientY;
            if(my>643&&my<1608) {
                $(".background").css({
                "background-position":mx+"px "+my+"px"
                });
            }
            else if(my<643){
            
                $(".background").css({
                "background-position":mx+"px "+643+"px"
                });
            }
            else if(my>1608) {
                $(".background").css({
                "background-position":mx+"px "+1608+"px"
                });
                
            }
        },5);
    });
    }
};
