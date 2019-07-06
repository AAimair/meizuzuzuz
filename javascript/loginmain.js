console.log("login配置成功")
// 配置模块路径
require.config({
    paths:{
        "require":'require',
        "jquery":"jquery-1.10.1.min",
        "cookie":"jquery.cookie",
        "login":"login"
    },
    shim:{
        "cookie":["jquery"]
    }
})

require(["login"],function (login) {
    // 注册验证模块
    login.login();
    login.tab();
})