$(function(){ //当页面加载时
    task = setInterval("loadImg()" , 2000); //启动定时器
    $("#img").mouseover(function(){ //鼠标经过
        window.clearInterval(task);
    });
    $("#img").mouseout(function(){ //鼠标移出
        task = setInterval("loadImg()", 2000);
    })
})