(function(){


//初始定义
var NAME='BAIDU_WENKU';
if(!CHIP_DATA[NAME]){
    CHIP_DATA[NAME]={
        name:"百度-下载券",
        remark:"下载券用来下载百度文库中的财富值文档",
        remarkUrl:"http://wenku.baidu.com/portal/browse/help#help/3",
        id:"",
        idUrl:"http://wenku.baidu.com/user/mydocs",
        auth:-1,//是否登录
        today:0,//今天是否抢
        num:-1,//当前筹码数量
        numUrl:"http://wenku.baidu.com/user/mydocs",
        total:0,//领取的累积数量
        status:1,
        visable:1,
        step:0,//状态：0初始值  1准备 2任务进行中 3完成
        task:{}
    }
}



var IFRAME = $("#iframe")[0];    



function task(fun){
    console.log("[task start]****** name:"+NAME)
    task.end_cb = fun;
    task.start();
}

//任务开始
task.start=function(){
    console.log("[task.start]***")
    if(CHIP_DATA[NAME].status == 0){
        task.finish();
    }
    else{
        CHIP_DATA[NAME].step = 2;
        task.open_index();
    }
}

//任务超时
task.timeout=function(){
    CHIP_DATA[NAME].step = 3;
}
//任务结束
task.finish=function(){
    console.log("[task.finish]***")
    IFRAME.src = "";
    CHIP_DATA[NAME].step = 3;
    task.end_cb();
}

//打开文库首页
task.open_index=function(){
    console.log("[task.open_index")
    IFRAME.src="http://wenku.baidu.com/";
}





CHIP_DATA[NAME].task = task;


})();