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

if (!(fwlink == "" || fwlink == null)) {
    document.title = "Redirecting...";
    document.getElementsByTagName("BODY")[0].innerHTML = "<h1>Please wait...</h1><p>You are being redirected.</p>";
}

window.onload = setTimeout(function() {
    if (fwlink == "" || fwlink == null) {
        document.title = "Nanomotion URL Shortener";
    } else {
        try {
            var fw = atob(String(fwlink));
        } catch (e) {
            var fw = "InvalidUrlError";
            console.error("Failed to encode URL: " + String(e))
        }
        if (fw.indexOf("//") == 0) {
            document.location = fw;
        } else if (fw == "InvalidUrlError") {
            document.title = "Invalid URL";
            document.getElementById("body").innerHTML = "<h1>Invalid URL</h1><p>The requested URL is corrupted. <a href='http://url.nanomotion.xyz'>Click here</a> to encode a new URL.";
        }
    }
}, 500);
