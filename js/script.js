
var website_spinner,
    page_spinner;
var isSplash = true;

$(document).ready(function(){
    var MSIE8 = ($.browser.msie) && ($.browser.version == 8);
	$.fn.ajaxJSSwitch({
		topMargin:300,//mandatory property for decktop
		bottomMargin:50,//mandatory property for decktop
		topMarginMobileDevices:300,//mandatory property for mobile devices
		bottomMarginMobileDevices:50,//mandatory property for mobile devices
		bodyMinHeight:1100,
        delaySubMenuHide:500,
        fullHeight:false,
	
        menuInit:function (classMenu, classSubMenu){
            classMenu.find(">li").each(function(){
                var conText = $("> a", this).find('.base_text').text();
                $("> a", this).append("<div class='_over'></div>"); 
                $("> a", this).append("<div class='_area'></div>"); 
			})
		},
		buttonOver:function (item){
                $(".base_text", item).stop(true).animate({color:'#fff'}, 400, 'easeOutCubic');
                $("._over", item).stop(true).animate({bottom:'0px'}, 400, 'easeOutCubic');
        },
		buttonOut:function (item){
                $(".base_text", item).stop(true).animate({color:'#5d596a'}, 400, 'easeOutCubic');
                $("._over", item).stop(true).animate({bottom:'-10px'}, 400, 'easeOutCubic');
        },
		subMenuButtonOver:function (item){ 
		      //item.stop().animate({"color":"#00d4e6"}, 300, "easeOutCubic");
        },
		subMenuButtonOut:function (item){
		      //item.stop().animate({"color":"#374043"}, 300, "easeOutCubic");
        },
		subMenuShow:function(subMenu){
            if(MSIE8){
				subMenu.css({"display":"block"});
			}else{
				subMenu.stop(true).css({"display":"block"}).animate({"opacity":"1"}, 400, "easeOutCubic");
			}
        },
		subMenuHide:function(subMenu){
            if(MSIE8){
				subMenu.css({"display":"none"});
			}else{
				subMenu.stop(true).delay(300).animate({"opacity":"0"}, 400, "easeOutCubic", function(){
					$(this).css({"display":"none"})
				});
			}
        },
///////////////////// PAGE  ///////////////////////////
        pageInit:function (pages){
        },
		currPageAnimate:function (page){
		     page.css({"top":$(window).height()}).stop(true).delay(300).animate({"top":0}, 1000, "easeOutCubic");
              isSplash = false;  
               $('body').stop().delay(0).removeClass('body_small'); 
              $('.left_panel').stop(true).animate({"top":"50"}, 600, "easeOutCubic");
              $('#wrapper .containerHolder').stop(true).animate({"top":"50"}, 600, "easeOutCubic");
              
             
              $('.map').stop(true).animate({"top":"400px"}, 800, "easeOutCubic");
             // $('footer').stop(true).animate({"color":"#868686"}, 600, "easeOutCubic");   
             // $('.sliderHolder').stop(true).animate({"display":"block", "bottom":-212}, 600, "easeInOutCubic");
              
        },
		prevPageAnimate:function (page){
		      page.stop(true).animate({"display":"block", "top":$(window).outerHeight()*2}, 600, "easeInOutCubic");
        },
		backToSplash:function (){
		      $('#bgNav a').eq(0).click();
          isSplash = true; 
             $('body').stop().delay(0).addClass('body_small');
             $('.left_panel').stop(true).animate({"top":"240"}, 600, "easeOutCubic");
              $('#wrapper .containerHolder').stop(true).animate({"top":"300"}, 600, "easeOutCubic");
               $('.map').stop(true).animate({"top":"900px"}, 800, "easeOutCubic");
             
              //$('.locations').stop(true).animate({"margin-left":"-76px"}, 800, "easeOutCubic");
             // $('footer .privacy_text a').stop(true).animate({"color":"#181a1d"}, 600, "easeOutCubic");
             // $('.sliderHolder').stop(true).animate({"display":"block", "bottom":0}, 600, "easeOutCubic");
        },
		pageLoadComplete:function (){

$('.pic').fancybox({'titlePosition': 'inside', 'overlayColor':'#e7231f'}); 


               setTimeout(function () { 
          $('.scroll_1,.scroll_2,.scroll_3,.scroll_4')
            .uScroll({
              axis:'y'
              ,lay:'outside'
              ,duration:600
              ,easing:'easeInOutSine'
              ,step:120
              ,mousewheel:true
        })
          },500);
		    
		}
	});
//////////////////////  END ajaxJSSwitch  //////////////////////////////
loadersInit();
function loadersInit(){
        var opts = {
              lines: 9,
              length: 0, 
              width: 15, 
              radius: 20, 
              rotate: 0, 
              color: '#61a1db', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target = $("#webSiteLoader > span");
        website_spinner = new Spinner(opts).spin();
        target.append(website_spinner.el)   
///////////////////////////////////////////////////////////////////
        var opts2 = {
              lines: 9,
              length: 0, 
              width: 14, 
              radius: 20, 
              rotate: 0, 
              color: '#61a1db', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target2 = $("#pageLoader > span");
        page_spinner = new Spinner(opts2).spin();
        target2.append(page_spinner.el) 
}
 ////////////////////////////////////////////////////////////   
})

$(window).load(function()	{

    $("#webSiteLoader").delay(500).animate({opacity:0}, 600, "easeInCubic", function(){
        website_spinner.stop();
        $("#webSiteLoader").remove();
    });    
    $('.social_list a').hoverSprite({onLoadWebSite:true})

   
    

    
//////////////////// Window resize ////////////////////////////
	$(window).resize(
        function(){
            resize_function();
        }
    ).trigger('resize');
    
    function resize_function(){
	   var wh = $(window).height();
        if(isSplash){}else{}          
    }
    $(document).resize(
        function(){}
    ).trigger('resize');
     
});