define([
    'jquery',
], function($) {
    function tab(){
        var leftul = $(".left ul");
        var icon = $(".right .iconfont");
        var leftusp = $(".left span");
        var leftli = $(".left ul li");
        var head = $("#head");
        var headdiv = $("#head div");
        var headul = $("#head div ul");
        var i =null;
        //导航栏动态数据
        $.ajax({
            type:"get",
            url:"data/tab.json",
            success:function(arr){
                for (let i = 0; i < arr.length; i++) {
                    $(`<li class=${arr[i].data.length}>${arr[i].title}</li>`).appendTo(leftul);
                    var newul = $(` <ul></ul>`).appendTo(headdiv);
                    var data = arr[i].data;
                    for (let j = 0; j < data.length; j++) {
                        if(i==8){
                            $(`<li id ="img" style="width:1000px,height:700px,border:0">
                                <img src="${data[j].img}" alt="">
                             </li>`).appendTo(newul);
                        }else{
                            $(`<li>
                                <img src="${data[j].img}" alt="">
                                <span>${data[j].name}</span>
                                <i>￥${data[j].price}</i>
                             </li>`).appendTo(newul);
                        }

                    }

                }
                
            },
            error:function(msg){
                alert(msg);
            }
        });
        //下拉导航
        leftul.on("mouseenter","li",function () {
            var headimg = $("#head #img img");
            headul = $("#head div ul");
            headli = $("#head ul li");
            i = $(this).index();
            //判断是否为最后一个导航栏li
            if(i == 8){
                $(this).css("color","skyblue").siblings().css("color","black");
                headimg.css({
                    "width":parseInt($(window).width()*0.90),
                    "height":300,
                    "float":"left"
                })
                head.stop().animate({
                    height:420
                },300);
                headul.eq(i).css({
                    "display":"block",
                }).siblings().css("display","none")
                 //改变log颜色
                 leftusp.css("color","skyblue");
                 //改变icon颜色
                 icon.css("color","black");
            }else{
                // 判断导航栏li是否有内容
                if(!($(this).attr("class") == 0)){
                    $(this).css("color","skyblue").siblings().css("color","black");
                    head.stop().animate({
                        height:274
                    },300);
                    headul.eq(i).css({
                        "display":"block",
                    }).siblings().css("display","none")
                    //改变log颜色
                    leftusp.css("color","skyblue");
                    //改变icon颜色
                    icon.css("color","black");
                }else{
                    $(this).css("color","skyblue").siblings().css("color","white");
                    head.css("display","none");
                    icon.css("color","white");
                    icon.eq(0).css("color","#ccc");
                    leftusp.css("color","white");
                }   
            }
        })
        //离开导航栏隐藏
        leftul.on("mouseleave","li",function () {
            var headli = $("#head div ul li");
            leftli = $(".left ul li");
            if(!($(this).attr("class") == 0)){
                head.stop().animate({
                    height:0
                },100,function () {
                    leftli.css("color","white");
                    icon.css("color","white");
                    icon.eq(0).css("color","#ccc");
                    leftusp.css("color","white");
                });
            }
            else{
                head.css("display","block");
            }
            headli.css("opacity",1);
        });
        //进入下拉导航后显示
        head.mouseenter(function () {
            head.stop().animate({
                height:head.css("height")
            },100);
        });
        
        headul.on("mouseenter","li",function () {
            $(this).css("opacity","1").siblings().css("opacity","0.5");
        });
        //离开下拉导航隐藏
        head.mouseleave(function () {
            var headli = $("#head div ul li");
            leftli = $(".left ul li");
            head.stop().animate({
                height:0
            },100,function () {
                leftli.css("color","white");
                icon.css("color","white");
                leftusp.css("color","white");
                icon.eq(0).css("color","#ccc");
            });
            headli.css("opacity",1);
        });
        //导航列表透明
        head.on("mouseenter","li",function () {
            $(this).css("opacity",1).siblings().css("opacity",0.5);
        });
    }    
    return {
        tab:tab
    }
});