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
function moon_phase(date) { // ported from http://www.voidware.com/moon_phase.htm
    var year = date.getYear(),
        month = date.getMonth(),
        day = date.getDay();

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;

    jd = 365.25 * year + 30.6 * month + day - 694039.09; // jd is total days elapsed
    jd /= 29.53; // divide by the moon cycle (29.53 days)
    phase = parseInt(jd, 10); // int(jd) -> phase, take integer part of jd
    jd -= phase; // subtract integer part to leave fractional part of original jd
    phase = Math.ceil(jd * 8); // scale fraction from 0-8 and round by adding 0.5
    phase = phase & 7; // 0 and 8 are the same so turn 8 into 0

    switch (phase) {
        case 0: phase = "🌑"; break;
        case 1: phase = "🌒"; break;
        case 2: phase = "🌓"; break;
        case 3: phase = "🌔"; break;
        case 4: phase = "🌕"; break;
        case 5: phase = "🌖"; break;
        case 6: phase = "🌗"; break;
        case 7: phase = "🌘"; break;
    }
    return phase;
}
//document.write(moon_phase(new Date(Date.now())))
$(document).ready(setupItem);
$(document).ready(setupMagic);