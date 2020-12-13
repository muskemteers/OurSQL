let currDB = "",
    currTable = "";

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
        currTable = $(this)[0].innerText;
    });
    $('.databases').click(function() {
        console.log($(this)[0].innerText);
        currTable = "";
        if ($("#accordion").accordion('option', 'active') !== false)
            currDB = $(this)[0].innerText;
        else
            currDB = "";
    });

    function checkQueryText() {
        //Do validation and print answer in result tab
        const inpQuery = document.getElementById("query-text");
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

    $("#execute-button").click(executeQuery);

    function executeQuery() {
        if ($("#query-text").val().trim() !== "") {
            addToHistory();
            checkQueryText();
        } else {
            alert("Empty SQL Query!");
        }
    }

    function addToHistory() {
        const text = $("#query-text").val().trim();
        $("#history-ol").prepend(`<li>${text}</li>`);
        const lengthOL = $("#history-ol").children().length;
        if (lengthOL > 10) {
            $('#history-ol li:last-child').remove();
        }
    }
    $("#auto-save").click(save_query);

    function save_query() {
        const queryText = $("#query-text").val().trim();
        if (queryText == "") {
            alert("Empty SQL Query!");
        } else {
            $("#save-ol").prepend(`<li>${queryText}</li>`);
        }
    }

    $("#auto-clear").click(function() {
        $("#query-text").val("");
    });

    $(".sub-auto-queries").click(validate_selection);

    function validate_selection() {
        const queryError = $("#query-error");
        if (currDB == "" && currTable == "") {
            queryError.text("Response: PLEASE SELECT A DATABASE AND A TABLE");
            queryError.css('color', 'red');
        } else if (currTable == "") {
            queryError.text("Response: PLEASE SELECT A TABLE");
            queryError.css('color', 'red');
        } else {
            queryError.text("Response: All good till now");
            queryError.css('color', 'green');
        }
    }

});