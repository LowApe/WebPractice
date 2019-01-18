$('#menu').click(function (e) {
    $('#side').addClass('open_side');
    $('#side').removeClass('close_side');

});
$(document).mouseup(function (e) {
    let pop = $('#popDialog');
    if (!pop.is(e.target) && pop.has(e.target).length === 0) {
        // 可以在这里关闭弹窗
        $('#side').addClass('close_side');
        $('#side').removeClass('open_side');
    }
});