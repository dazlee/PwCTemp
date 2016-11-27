$(function () {
    var formModals = document.querySelectorAll(".form-modal");
    formModals.forEach(function (formModal) {
        var result = {};
        var mainInput = formModal.querySelector(".main-input");
        var modal = formModal.querySelector(".modal");
        var saveButton = modal.querySelector(".save-button");
        saveButton.addEventListener("click", function (event) {
            if (result.value) {
                mainInput.value = result.value;
            }
            $(modal).modal("hide");
        });

        var inputs = modal.querySelectorAll("input");
        inputs.forEach(function (input) {
            input.addEventListener("change", function (event) {
                var target = event.target;
                if (target.type == "radio") {
                    result.type = "radio";
                    result.key = target.name;
                    result.name = target.dataset.name;
                    result.value = target.value;
                }
            });
        });

    });
});
