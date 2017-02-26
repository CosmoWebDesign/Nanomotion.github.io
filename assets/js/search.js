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

var query = getParameterByName("q");

document.getElementById("query").innerHTML = query;

if (query == "") {
  document.getElementById("search-status").innerHTML = "Enter a query first!";
} else {
  document.getElementById("search-status").innerHTML = "Found " + "{n}" + "results";
}
