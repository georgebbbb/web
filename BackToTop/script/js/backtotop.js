/*
*	回到头部
*	author:		FuYin
*	homepage:	http://weibo.com/fugardenia
*	E-mail:		fooying#qq.com
*	version:	1.0.0
**/
define('backtotop',['css!../../style/less/backtotop','jquery'],function(require,exports,module){
	$(function(){
		//重新加载 网页在底部时不显示 top按钮
	  var tophtml="<div id=\"backtotop\" class=\"backtotops\">";
	  		tophtml += "<a href=\"tencent://Message/?Uin=251488653&websiteName=fooyin.sinaapp.com=&Menu=yes\" ";
	  		tophtml += "class=\"btn btn-qq\"></a><div class=\"btn btn-wx\">";
	  		tophtml += "<img class=\"pic\" src=\"../../images/weixin.jpg\" ";
	  		tophtml += "onclick=\"window.location.href=\'http://fooyin.sinaapp.com\'\"/>";
	  		tophtml += "</div><div class=\"btn btn-phone\"><div class=\"phone\">";
	  		tophtml += "13589138959</div></div>";
	  		tophtml += "<div class=\"btn btn-top\"></div></div>";
	  $("#backtop").html(tophtml);
	  $("#backtotop").each(function(){
	    $(this).find(".btn-wx").mouseenter(function(){
	      $(this).find(".pic").fadeIn("fast");
	    });
	    $(this).find(".btn-wx").mouseleave(function(){
	      $(this).find(".pic").fadeOut("fast");
	    });
	    $(this).find(".btn-phone").mouseenter(function(){
	      $(this).find(".phone").fadeIn("fast");
	    });
	    $(this).find(".btn-phone").mouseleave(function(){
	      $(this).find(".phone").fadeOut("fast");
	    });
	    $(this).find(".btn-top").click(function(){
	      $("html, body").animate({
	        "scroll-top":0
	      },"fast");
	    });
	  });
	  var lastRmenuStatus=false;
	  $(window).scroll(function(){//bug
	    var _top=$(window).scrollTop();
	    if(_top>200){
	      $("#backtotop").data("expanded",true);
	    }else{
	      $("#backtotop").data("expanded",false);
	    }
	    if($("#backtotop").data("expanded")!=lastRmenuStatus){
	      lastRmenuStatus=$("#backtotop").data("expanded");
	      if(lastRmenuStatus){
	        $("#backtotop .btn-top").slideDown();
	      }else{
	        $("#backtotop .btn-top").slideUp();
	      }
	    }
	  });

  });
});