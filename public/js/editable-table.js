$(function () {
    function generateRowHTML(editableRow, length) {
        var inputs = $(editableRow).find("input");
        var list = "";
        for (var i = 0; i < inputs.length; i++) {
            var name = inputs[i].name.replace("0", length);
            var input = "<input name=\"" + name + "\" type=\"text\" class=\"form-control lockable\" value=\"" + inputs[i].value + "\" />";
            list += "<td>" + input + "</td>";
        }
        list += "<td style=\"width: 135px;\">\
            <a href=\"#\" class=\"delete-button btn btn-danger\">刪除</a>\
        </td>";
        var row = document.createElement('tr');
        row.innerHTML = list;
        return row;
    }

    function bindButtons(row) {
        var deleteButton = $(row.querySelector(".delete-button"));
        deleteButton.on("click", function (event) {
            event.preventDefault();
            $(row).remove();
        });
    }

    function cleanEditableRow(row) {
        row.querySelectorAll("input").forEach(function (input) {
            input.value = "";
        });
    }

    var tables = $(".editable-table-wrapper table");
    for (var i = 0; i < tables.length; i++) {
        (function (table) {
            var jTable = $(table);
            var tbody = jTable.find("tbody")[0];
            var addButton = jTable.find(".add-button")[0];
            var editableRow = jTable.find(".editable-row")[0];
            var rows = tbody.querySelectorAll(".info-row");
            var length = rows.length;

            addButton.addEventListener("click", function (event) {
                event.preventDefault();
                var row = generateRowHTML(editableRow, length);
                length ++;

                bindButtons(row);
                tbody.insertBefore(row, editableRow);
                cleanEditableRow(editableRow);
            });

            rows.forEach(function (row) {
                bindButtons(row);
            });
        })(tables[i]);
    }
});
