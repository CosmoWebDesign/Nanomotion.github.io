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

if (fwlink == "1") {
  document.location = "http://error.nanomotion.xyz/410.html";
} else if (fwlink == "2") {
  document.location = "http://error.nanomotion.xyz/410.html";
} else {
  document.location = "https://nanomotion.github.io/assets/urls/invalid-url.html";
}
