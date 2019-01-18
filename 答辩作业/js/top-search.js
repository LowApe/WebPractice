$('#search-click').focus(function () {
    /*当点击出现图层,并添加搜索历史*/
    let item = $("<div id=\"top-bar-onfocus\" >\n" +
        "            <div class=\"top-bar-onfocus top-bar-onfocus\" >\n" +
        "            </div>\n" +
        "            <!--显示历史记录-->\n" +
        "            <div id=\"\" class=\"input-onfocus \">\n" +
        "                <div class=\"input-onfocus-record \">\n" +
        "                    <img src=\"img/历史记录.svg\" alt=\"\">\n" +
        "                    <div>历史记录</div>\n" +
        "                </div>\n" +
        "                <div class=\"input-onfocus-record \">\n" +
        "                    <img src=\"img/历史记录.svg\" alt=\"\">\n" +
        "                    <div>历史记录</div>\n" +
        "                </div>\n" +
        "\n" +
        "            </div>\n" +
        "        </div>");
    $('.container-scroll').append(item)
    // $('#top-bar-onfocus').addClass('top-bar-onfocus');
    $(document).mouseup(function (e) {
        let pop = $('#search-click');
        if (!pop.is(e.target) && pop.has(e.target).length === 0) {
            // 可以在这里关闭弹窗
            $('#top-bar-onfocus').remove()
            // $('#top-bar-onfocus').removeClass('top-bar-onfocus');
        }
    });

})