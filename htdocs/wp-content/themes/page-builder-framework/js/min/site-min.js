!function(n){n(".scrolltop").length&&(n(window).scroll(function(){n(this).scrollTop()>400?n(".scrolltop").fadeIn():n(".scrolltop").fadeOut()}),n(".scrolltop").click(function(){n("body,html").animate({scrollTop:0},500)})),n(".wpbf-menu-item-search a").click(function(i){i.preventDefault(),i.stopPropagation(),n(".wpbf-menu-item-search a").addClass("active"),n(".wpbf-navigation .wpbf-menu > li").slice(-3).addClass("wpbf-menu-item");var t=0;n(".wpbf-menu-item").each(function(){t+=n(this).outerWidth()}),n(".wpbf-menu-search").stop().css({display:"block"}).animate({width:t,opacity:"1"},200),n(".wpbf-menu-search #s").focus()}),n(window).click(function(){n(".wpbf-menu-item-search a").hasClass("active")&&(n(".wpbf-menu-search").stop().animate({opacity:"0",width:"0px"},250,function(){n(this).css({display:"none"})}),setTimeout(function(){n(".wpbf-menu-item-search a").removeClass("active")},400))}),n(".wpcf7-form-control-wrap").hover(function(){n(".wpcf7-not-valid-tip",this).fadeOut()});var i=n(".wpbf-navigation").data("sub-menu-animation-duration");n(".wpbf-sub-menu-animation-fade > .menu-item-has-children").hover(function(){n(".sub-menu",this).first().stop().fadeIn(i)},function(){n(".sub-menu",this).first().stop().fadeOut(i)}),n(".wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) > .sub-menu > .menu-item-has-children").hover(function(){n(".sub-menu",this).first().stop().css({display:"block"}).animate({opacity:"1"},i)},function(){n(".sub-menu",this).first().stop().animate({opacity:"0"},i,function(){n(this).css({display:"none"})})}),n(window).load(function(){n(".opacity").delay(250).animate({opacity:"1"},250),n(".display-none").show(),n(window).trigger("resize"),n(window).trigger("scroll")});var t=n(".wpbf-page").css("margin-top");if(n(window).resize(function(){n(".wpbf-page").width()>=n(window).width()?n(".wpbf-page").css({"margin-top":"0","margin-bottom":"0"}):n(".wpbf-page").css({"margin-top":t,"margin-bottom":t})}),n(".wpbf-menu-centered").length){var e=n(".wpbf-navigation .wpbf-menu > li > a").length,a=e/2,a=Math.floor(a),a=a-1;n(".wpbf-menu-centered .logo-container").insertAfter(".wpbf-navigation .wpbf-menu >li:eq("+a+")").css({display:"block"})}}(jQuery);