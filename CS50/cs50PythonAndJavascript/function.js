function empty() {
    var x;
    x = document.getElementById("emptySearch").value;
    if (x == "") {
        return false;
    }
}

function empty4() {
    var a, b, c, d;
    a = document.getElementById("one").value;
    b = document.getElementById("two").value;
    c = document.getElementById("three").value;
    d = document.getElementById("four").value;

    if (a == "" & b == "" & c == "" & d == "") {
        return false;
    }
}