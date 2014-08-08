include('request_url.js');
//----jquery-plagins----
include('jquery-1.8.3.min.js');
include('jquery.ba-resize.min.js');
//----bootstrap----
include('panel_bootstrap.js');
include('jquery.cookie.js');
//----All-Scripts----
include('jquery.mobilemenu.js');
include('scroll_to_top.js');
include('ajax.js.switch.js');
include('mathUtils.js');
include('sForm.js');
include('jquery.fancybox.pack.js');
//----------------------------
include('jquery.easing.1.3.js');
include('hoverSprite.js');
include('jquery.animate-colors-min.js');
include('spin.js');
include('jquery.mousewheel.js');
include('uScroll.js');
include('sImg.js');
include('slider_simple.js');
include('TMForm.js');
 

include('script.js');
//----Include-Function----
function include(url){ 
  document.write('<script type="text/javascript" src="js/'+ url + '"></script>'); 
  return false;
}