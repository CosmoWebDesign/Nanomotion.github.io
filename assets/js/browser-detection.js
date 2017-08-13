function getBrowser() {
  if( navigator.userAgent.indexOf("Chrome") != -1 ) {
    return "Chrome";
  } else if( navigator.userAgent.indexOf("Opera") != -1 ) {
    return "Opera";
  } else if( navigator.userAgent.indexOf("MSIE") != -1 ) {
    return "IE";
  } else if( navigator.userAgent.indexOf("Firefox") != -1 ) {
    return "Firefox";
  } else if( navigator.userAgent.indexOf("Safari") != -1 ) {
    return "Safari";
  } else {
    return "unknown";
  }
}

if (window.console) {
  console.log(getBrowser() + " " + navigator.userAgent);
}

if (!((getBrowser() == "unknown") || (getBrowser() == "IE"))) {
  var x = document.getElementById("unsupported-browser-notif");
  /*x.style.display = "none";*/
}
