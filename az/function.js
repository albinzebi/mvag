document.addEventListener("DOMContentLoaded", function() {

    var x = document.getElementsByClassName("myProjects");

    for (var i = 0; i < x.length; i++) {
        x[i].setAttribute('title', 'Click here to open the project in a new tab');
    }

});