$(function () {
    var radioGroups = document.querySelectorAll(".radio-buttons .radio");
    radioGroups.forEach(function (radioGroup) {
        var radioButton = radioGroup.querySelector("input[type='radio']");
        radioButton.addEventListener("change", function (event) {
            var textInput = event.target.parentNode.nextElementSibling;
            var name = event.target.name;
            var sameNameRadioButtons = document.querySelectorAll("input[type='radio'][name='" + name + "']");
            sameNameRadioButtons.forEach(function (sameNameRadioButton) {
                var textInput = sameNameRadioButton.parentNode.nextElementSibling;
                if (textInput) {
                    textInput.disabled = true;
                }
            });
            if (textInput) {
                textInput.disabled = false;
            }
        });
    });

});
