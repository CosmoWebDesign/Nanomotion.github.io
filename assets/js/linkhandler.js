function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var fwlink = getParameterByName("a");

window.onload = setTimeout(function() {
    if (fwlink == "0") {
        document.getElementById("body").innerHTML = "<h1>Test URL</h1><p>This is a test URL.</p>";
    } else {
        document.title = "Invalid URL"
        document.getElementById("body").innerHTML = "<h1>Invalid url</h1><p>The shortened URL ID is not valid. It may have been removed.</p><center><p style=\"color: gray;\">Copyright &copy; Nanomotion 2017</p></center>";
    }
}, 500);
