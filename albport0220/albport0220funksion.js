function showMenuL() {
    document.getElementById("lpanel").style.visibility = "visible";
    document.getElementById("lpanel").style.opacity = "1";
    document.getElementById("rpanel").style.visibility = "hidden";
    document.getElementById("rpanel").style.opacity = "0";
}

function showMenuR() {
    document.getElementById("rpanel").style.visibility = "visible";
    document.getElementById("rpanel").style.opacity = "1";
    document.getElementById("lpanel").style.visibility = "hidden";
    document.getElementById("lpanel").style.opacity = "0";

}

function hideMenuL() {
    document.getElementById("lpanel").style.visibility = "hidden";
    document.getElementById("lpanel").style.opacity = "0";
}

function hideMenuR() {
    document.getElementById("rpanel").style.visibility = "hidden";
    document.getElementById("rpanel").style.opacity = "0";
}