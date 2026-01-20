var redValue = document.getElementById("R");
var greenValue = document.getElementById("G");
var blueValue = document.getElementById("B");

redValue.addEventListener("input", updateBackgroundColor);
greenValue.addEventListener("input", updateBackgroundColor);
blueValue.addEventListener("input", updateBackgroundColor);
function updateBackgroundColor() {
    var r = redValue.value;
    var g = greenValue.value;
    var b = blueValue.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
updateBackgroundColor();