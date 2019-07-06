define(['jquery'], function($) {
	$.extend({
		lBt:function(style="top",sleep,size,space){
			var albt = $(".lbt");
			var oul = $(".lb_img");
			var aimg = $(".lb_img li");
			var abtnul = $(".lb_btn");
			var abtn = $(".lb_btn li");
			var li = $('.lb_btn')
			var speed = null;
			var direction = null;
			//当前图片下标
			var i = 0;
			//定义定时器
			var timer = null;
			var py = (aimg.width() - $(window).width())/2
			//设置定时器
			clearInterval(timer);
			// 轮播框属性
			// albt.css({
			// 	width:aimg.width(),
			// 	height:aimg.height(),
			// 	// left:-1 *(aimg.width()-$(window).width())/2
			// });
			// 录播图按钮位置
			abtnul.css({
				display:'block',
				left:($(window).width() - abtnul.width())/2
			});
			//图片位置
			oul.css({
				width:aimg.width()*aimg.size(),
				// left:-1 *(aimg.width()-albt.width())/2
			})
			//判断滚动方式
			if(size){
				abtn.css({
					'width':size,
					'height':size,
				});
				li.css({
					bottom:size/2
				});
			}
			if(space){
				abtn.css({
					marginRight:space
				});
			}
			// li.css('left',(albt.width()-li.width())/2)
			if(style == "top"){
				direction = "top";
				speed = parseInt(-1 * albt.height());
			}
			if(style == "left"){
				direction = "left";
				speed = parseInt(-1 * aimg.width());
				oul.css('width',aimg.width() * aimg.size());
			}
			if(style == "right"){
				direction = "right";
				speed = parseInt(1 * albt.width());
				oul.css('width',albt.width() * aimg.size());
				oul.css('left',-(oul.width()-albt.width()));
			}
			if(style == "bottom"){
				direction = "bottom";
				speed = parseInt(1 * albt.height());
				oul.css("top",-aimg.height() * aimg.size() + aimg.height());
			}
			clearInterval(timer);
			timer = setInterval(function(){
				i++;
				lbt();
			},sleep);
			//按钮事件
			abtn.click(function(){
				i = $(this).index();
				lbt();
			});
			//划入轮播图div停止定时器
			albt.mouseenter(function(){
				clearInterval(timer);
			});
			//划出定时器启动
			albt.mouseleave(function(){
				clearInterval(timer);
				timer = setInterval(function(){
					i++;
					lbt();
				},sleep);
			});
			// 划入按钮切换图片
			abtn.mouseenter(function(){
				i = $(this).index();
				lbt();
			});
			//轮播方法
			function lbt(){
				var tar = i * speed;
				//取消其他按钮样式
				abtn.eq(i).attr("class","lbt_active").siblings().attr("class","");
				//按钮到最后一个直接跳转第一个
				if(i==abtn.size()){
					abtn.eq(0).attr("class","lbt_active").siblings().attr("class","");
				}
				//图片运动方式
				if(direction == "top"){
					// 图片ul移动
					oul.animate({
						top:tar
					},500,function(){
						//判断是否结束
						if(i == abtn.size()){
							oul.css("top" ,0);
							i=0;
						}
					})
				}
				if(direction == "bottom"){
					// 图片ul移动
					// alert();
					var height = oul.height();
					oul.animate({
						top:-1 * height + albt.height() + tar
					},500,function(){
						if(i == abtn.size()){
							oul.css("top" ,-1 * height + albt.height());
							i=0;
						}
					})
				}
				if(direction == "left"){
					// 图片ul移动
					// alert();
					oul.animate({
						left:tar-py
					},500,function(){
						if(i == abtn.size()){
							oul.css("left" ,-py);
							i=0;
						}
					})
				}
				if(direction == "right"){
					// 图片ul移动
					// alert();
					var width = oul.width();
					// alert(-1 * width + albt.width())
					oul.animate({
						left: (-1 *width + albt.width())+ tar
					},500,function(){
						if(i == abtn.size()){
							oul.css("left" ,-1 *width + albt.width());
							i=0;
						}
					})
				}
			}
		}
	});
	return{
		lbt:$.lBt
	}
});