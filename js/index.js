$(document).ready(function() {
    $('#accordion').accordion({
        collapsible: true,
        animate: 500,
        active: false,
        heightStyle: "content",
        icons: { header: "ui-icon-plus", activeHeader: "ui-icon-minus" }
    });
    $('.tables').click(function() {
        console.log($(this)[0].innerText);
    });
    $('.databases').click(function() {
        console.log($(this)[0].innerText);
    });

    function checkQueryText() {
        const inpQuery = document.getElementById("query-text");
        console.log(inpQuery.value);
        reg = /SELECT/i;
        if (reg.test(inpQuery.value)) {
            inpQuery.style.color = "lightgreen";
            document.getElementById("query-error").innerText = "Response: Looks Good";
            document.getElementById("query-error").style.color = "green";
        } else {
            inpQuery.style.color = "red";
            document.getElementById("query-error").innerText = "Response: You are writing a shitty query";
            document.getElementById("query-error").style.color = "red";
        }
    }
    $('#query-text').on('input', checkQueryText);

    $("#execute-button").click(history);

    function history() {
        if ($("#query-text").val() != "") {
            var text = $("#query-text").val();
            // if (length < 10) {
            $("#history-ol").prepend(`<li>${text}</li>`);
            // }
            var length = $("#history-ol").children().length;
            if (length > 10) {
                $('#history-ol li:last-child').remove();
            }
        }
    }

    $("#auto-clear").click(function() {
        $("#query-text").val("");
    });

});