console.log("ajax.js");

function loadAboutPage() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("aboutContent").innerHTML = this.responseText;
            document.getElementById("content").style.display="none";
        }
    };
    xhttp.open("GET", "about.txt", true);
    xhttp.send();
}