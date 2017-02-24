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

if (!(document.location.hostname == "nanomotion.github.io")) {
  window.open("https://nanomotion.github.io" + document.location.pathname);
  window.close();
}

/*
var x = getParameterByName("a");

if (!(x == "1")) {
  document.location = "https://nanomotion.github.io/assets/html/errors/coming-soon.html";
} else {
  if (window.console) {
    console.info("Dev mode active");
  }
}
*/
