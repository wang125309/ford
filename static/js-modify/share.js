$(function(){
    $.post("/nabob/wxconfig/",{
		"url":location.href
	},function(data){
		wx.config(data);
		wx.ready(function(){
            wx.hideOptionMenu();
			wx.onMenuShareTimeline({
                link:"http://www.360youtu.com/ford/template/index.html",
                imgUrl:"http://www.360youtu.com/nabob/static/image/share.jpg",
                title:"锐界人生 不止于超越",
			});
			wx.onMenuShareAppMessage({
                link:"http://www.360youtu.com/ford/template/index.html",
                imgUrl:"http://www.360youtu.com/nabob/static/image/share.jpg",
                title:"锐界人生 不止于超越",
			});
        });
		wx.error(function(res){
			$.get("/nabob/update_access_token/",function(data){
				$.post("/wxconfig/",{
					"url":location.href
				},function(data){
					wx.config(data);
					wx.ready(function(){
		            	wx.onMenuShareTimeline({
                            link:"http://www.360youtu.com/ford/template/index.html",
                            imgUrl:"http://www.360youtu.com/nabob/static/image/share.jpg",
                            title:"锐界人生 不止于超越",
			            });
			            wx.onMenuShareAppMessage({
                            link:"http://www.360youtu.com/ford/template/index.html",
                            imgUrl:"http://www.360youtu.com/nabob/static/image/share.jpg",
                            title:"锐界人生 不止于超越",
			            });
                    });
                });
		    });
        });
    });
});
