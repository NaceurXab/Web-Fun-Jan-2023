var element = document.querySelector(".cookies");
function hide(){
    element.remove();
}
function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    for (var i = 1; i <= 4; i++) {

        var id = "case" + i;
        var high = parseFloat(document.querySelector("." + id + " .high").innerHTML);
        var low = parseFloat(document.querySelector("." + id + " .low").innerHTML);                
        if (element.value == "C") {
            newhigh = c2f(high);
            newlow = c2f(low);
        }
        else {
            newhigh = f2c(high);
            newlow = f2c(low);
        }
        document.querySelector("." + id + " .high").innerHTML = newhigh;
        document.querySelector("." + id + " .low").innerHTML = newlow;
    }
}
