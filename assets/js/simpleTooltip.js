/*!
 Follow us on Twitter: https://twitter.com/firstvector
 Visit our website: http://firstvector.org/
 See information about our team: http://firstvector.org/humans.txt
 */
(function(){$.simpleTooltip=function(d){if(!/msie 8/.test(navigator.userAgent.toLowerCase())){var c=d?d:300,b=$("body");$("[data-tooltip]").each(function(){var a=$(this);a.attr("data-title",this.title).removeAttr("title");if(a.css("position")=="static"){a.css("position","relative");}}).on("mouseenter mouseleave",function(g){if(g.type=="mouseenter"){var h=$(this);b.append('<div id="tooltip_width">'+h.data("title")+"</div>");var a=$("#tooltip_width").width(),f="";if(a>c){a=c,f="[data-tooltip]:before{width:"+a+"px;text-align:left;line-height:17px;padding:2px 5px;white-space:normal}";}if(h.data("tooltip").slice(-2)=="th"){f+="[data-tooltip$=th]:before{margin-left:-"+((a+10)/2)+"px}";}if(f){b.append('<style id="tooltip_style">'+f+"</style>");}}else{$("#tooltip_style, #tooltip_width").remove();}});}else{return !1;}};})(jQuery);$(document).ready(function(){$.simpleTooltip();});