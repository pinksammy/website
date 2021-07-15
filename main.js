function setupItem() {
    var itemElement = $("#item");

    itemElement.click(function () {
        hideAllWidgets();
        $("#itemWidget").show();
    })
}
function setupMagic() {
    var magicElement = $("#magic");

    magicElement.click(function () {
        hideAllWidgets();
        $("#magicWidget").show();
    })
}
function hideAllWidgets() {
    $("#mainWidget").hide();
    $("#itemWidget").hide();
    $("#magicWidget").hide();
}
$(document).ready(setupItem);
$(document).ready(setupMagic);