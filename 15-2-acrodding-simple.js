;(function(){
	$.fn.extend({
		"accroding":function(opt){
			var Default={"start":0};
			var option=$.extend({},Default,opt);
			this.each(function(){
				var obj=$(this);
				init();
				function init(){
					obj.children(".content").hide();
					obj.children(".content").eq(option.start).show();
					obj.children(":header").eq(option.start).addClass("active");
			}
				obj.children(":header").each(function(){
					$(this).bind("click",setActive);
				})
				function setActive(){
					var ind=obj.children(":header").index($(this));
					obj.children(":header.active").removeClass("active");
					obj.children(".content:visible").slideUp();
					obj.children(".content").eq(ind).slideDown();
					$(this).addClass("active");
				}
			})
			
		}
	})
})(jQuery)
