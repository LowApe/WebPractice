let index = 1;
let task;
function loadImg() {
    if (index === 4) index = 1;
    $("#img").css("background-image", "url(img/v" + index + ".jpg)");
    index++;
}
$(function () { //当页面加载时

    task = setInterval("loadImg()", 1500); //启动定时器
    $("#img").mouseover(function () { //鼠标经过
        window.clearInterval(task);
    });
    $("#img").mouseout(function () { //鼠标移出
        task = setInterval("loadImg()", 1500);
    })
})