//配置模块路径
require.config({
    paths:{
        "require":'require',
        "jquery":"jquery-1.10.1.min",
        "lbt":"lbt",
        "index":"index",
        "tab":"tab"
    }
})
require(["lbt","index","tab"], function(lbt,index,tab){
    //首页
    index
	//轮播图
    lbt.lbt("left",3000,5,20);
    index.imy();
    tab.tab();
})
