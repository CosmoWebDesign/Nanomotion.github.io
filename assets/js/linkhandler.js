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

function convertFromHex(hex) {
    var hex = hex.toString(); //force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

var fwlink = getParameterByName("a");

window.onload = setTimeout(function() {
    if (fwlink == "") {
        document.title = "Nanomotion URL Shortener";
    } else {
        var fw = atob(String(fwlink));
        if (fw.indexOf("//") == 0) {
            document.location = fw;
        } else {
            document.title = "Invalid URL";
            document.getElementById("body").innerHTML = "<h1>Invalid URL</h1><p>The requested URL is corrupted. <a href='http://url.nanomotion.xyz'>Click here</a> to encode a new URL.";
        }
    }
}, 500);
