$('.menu').click(function () {
    // $("#dynamic1").hide()
    $("#dynamic1").load($(this).data("url"))
    // $("#dynamic1").show(200)
    // console.log($(this).data("url"))

    //    todo: 4. 切换头部的背景颜色

    switch ($(this).data("number")) {
        case 1:
            $(".top-bar").css('background-color', '#009688');
            $(".top-bar-tab").css('background-color', '#009688');
            $("#status-bg").css('background-color', '#009688');
            break;
        //    todo: 5. 给子 tab 键也添加颜色变换效果 (filters使用)
        case 2:
            $(".top-bar").css('background-color', '#EC407A');
            $(".top-bar-tab").css('background-color', '#EC407A');
            $("#status-bg").css('background-color', '#EC407A');
            break;
        case 3:
            $(".top-bar").css('background-color', '#2196F3');
            $(".top-bar-tab").css('background-color', '#2196F3');
            $("#status-bg").css('background-color', '#2196F3');
            break;
        case 4:

            $(".top-bar").css('background-color', '#f44336');
            $(".top-bar-tab").css('background-color', '#f44336');
            $("#status-bg").css('background-color', '#f44336');
            break;
        case 5:
            $(".top-bar").css('background-color', '#009688');
            $(".top-bar-tab").css('background-color', '#009688');
            $("#status-bg").css('background-color', '#009688');
            break;
    }
})

// /*主tab事件*/
// $('#tab-1').click(function () {
//     $('#dynamic1').load("page/main/main-tab.html")
//     $('#dynamic2').load("page/main/main-content-recommend.html")
// });
//
// $('#tab-2').click(function () {
//     $('#dynamic1').load("page/game/game-tab.html")
//     $('#dynamic2').load("page/main.html")
// });
//
// $('#tab-3').click(function () {
//     $('#dynamic1').load("page/video/video-tab.html")
//     $('#dynamic2').load("page/main.html")
// });
//
// $('#tab-4').click(function () {
//     $('#dynamic1').load("page/book/book-tab.html")
//     $('#dynamic2').load("page/main.html")
// });
//
// $('#tab-5').click(function () {
//     $('#dynamic1').load("page/music/music-tab.html")
//     // $('#dynamic2').load("page/main-tab.html")
// });
//
/*子tab 事件*/

// $('.tab-one').click(function () {
//     $('#dynamic2').load("page/main-tab.html")
// })
//
// $('.tab-two').click(function () {
//     $('#dynamic2').load("page/main/main-tab.html")
// })
// $('.tab-three').click(function () {
//     $('#dynamic2').load("page/main-tab.html")
// })
// $('.tab-four').click(function () {
//     $('#dynamic2').load("page/main-tab.html")
// })
// $('.tab-five').click(function () {
//     $('#dynamic2').load("page/main-tab.html")
// })
// $('.tab-six').click(function () {
//     $('#dynamic2').load("page/main-tab.html")
// })