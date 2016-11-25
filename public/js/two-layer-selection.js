$(function() {
    var wrappers = document.querySelectorAll(".two-layer-selection-wrapper");
    wrappers.forEach(function (wrapper) {
        var firstLayer = wrapper.querySelector(".first-layer");
        var secondLayer = wrapper.querySelector(".second-layer");
        var secondOptions = secondLayer.querySelectorAll("option");

        selectFirstLayer(firstLayer.value);
        firstLayer.addEventListener("change", function (event) {
            secondLayer.value = "";
            selectFirstLayer(event.target.value);
        });

        function selectFirstLayer (nextValue) {
            secondOptions.forEach(function (option) {
                if (option.dataset.parent === nextValue) {
                    $(option).removeClass("hidden");
                } else {
                    $(option).addClass("hidden");
                }
            });
        }
    });
});
