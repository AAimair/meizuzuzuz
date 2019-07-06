<?php
    header('content-type:text/html;charset="utf-8"');
    //设置回传状态
    $success = array("code"=>0,"alert"=>null);
    //创建数据库对象
    $link = mysql_connect("localhost","root","123456");
    //测试是否连接成功
    if(!$link){
        $success["code"] = 1;
        $success["alert"] = "数据库连接失败";
        echo json_encode($success);
    }
    //设置字符集
    mysql_set_chaset("utf8");
    //选择数据库
    mysql_select_db("hgs");
    //
?>