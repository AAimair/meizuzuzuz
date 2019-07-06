define([
    'jquery',
    "cookie"
], function($) {
    var tabul = $("#tab ul");
    var fAside = $("#form aside");
    var zcbtn = $(".btn a");
    function tab(){
        var i = null;
        tabul.on("click","li",function () {
            i = $(this).index()
            $(this).css("color","black").siblings().css("color","#ccc");
            fAside.eq(i).css("display","block").siblings().css("display","none");
        })
    }
    function login() {
        zcbtn.eq(0).click(function () {
            window.open("http://localhost:8888/register.html");
        });
    }
    return {
        login:login,
        tab:tab
    }
});