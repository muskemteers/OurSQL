$(document).ready(function() {
    $('#accordion').accordion({
        collapsible: true,
        animate: 500,
        active: false,
        heightStyle: "content",
        icons: { header: "ui-icon-plus", activeHeader: "ui-icon-minus" }
    });
    $('.tables').click(function() {
        console.log($(this)[0].innerHTML);
    });
    $('.databases').click(function() {
        console.log($(this)[0].innerText);
    });
});