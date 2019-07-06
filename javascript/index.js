define(["jquery"],function($){
    var iMy = $("#imy");
    var box = $("#box");
    var boxul = $("#box ul");
    var boxli = $("#box ul li");
    var aside = $("aside");
    //我的菜单弹窗
    $.extend({
        imy:function() {
            //商品标签添加高度改变
            iMy.mouseenter(function(){
                box.css("display","block");
            })
            iMy.mouseleave(function () {
                box.css("display","none");
            })
            boxul.on("mouseenter","li",function () {
                $(this).css("color","skyblue").siblings().css("color","black");
            })
            boxul.on("mouseleave",function () {
                boxli.css("color","black");
            })
            boxli.eq(0).click(function(){
                window.open("http://localhost:8888/login.html");
            });
            boxli.eq(1).click(function(){
                window.open("http://localhost:8888/register.html");
            });
        }
    })
    return {
        imy:$.imy,
        Nav:$.Nav
    }
})