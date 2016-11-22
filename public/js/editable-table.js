$(function () {
    function generateRowHTML(editableRow) {
        var inputs = $(editableRow).find("input");
        var list = "";
        for (var i = 0; i < inputs.length; i++) {
            var input = "<input type=\"text\" class=\"form-control lockable\" value=\"" + inputs[i].value + "\" disabled/>";
            list += "<td>" + input + "</td>";
        }
        list += "<td style=\"width: 135px;\">\
            <a href=\"#\" class=\"completed-button btn btn-success hidden\">完成</a>\
            <a href=\"#\" class=\"edit-button btn btn-warning\">修改</a>\
            <a href=\"#\" class=\"delete-button btn btn-danger\">刪除</a>\
        </td>";
        var row = document.createElement('tr');
        row.innerHTML = list;
        return row;
    }

    function bindButtons(row) {
        var editButton = $(row.querySelector(".edit-button"));
        var deleteButton = $(row.querySelector(".delete-button"));
        var completedButton = $(row.querySelector(".completed-button"));
        var inputs = row.querySelectorAll("input");
        deleteButton.on("click", function (event) {
            event.preventDefault();
            $(row).remove();
        });
        editButton.on("click", function (event) {
            event.preventDefault();
            inputs.forEach(function (input) {
                input.disabled = false;
            });
            editButton.addClass("hidden");
            completedButton.removeClass("hidden");
        });
        completedButton.on("click", function (event) {
            event.preventDefault();
            inputs.forEach(function (input) {
                input.disabled = true;
            });
            editButton.removeClass("hidden");
            completedButton.addClass("hidden");
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

            addButton.addEventListener("click", function (event) {
                event.preventDefault();
                var row = generateRowHTML(editableRow);
                bindButtons(row);
                tbody.insertBefore(row, editableRow);
                cleanEditableRow(editableRow);
            });

            var rows = tbody.querySelectorAll(".info-row");
            rows.forEach(function (row) {
                bindButtons(row);
            });
        })(tables[i]);
    }
});
