// Copyright (C) Nanomotion 2017

console.info("     __                                  _   _             ");
console.info("  /\ \ \__ _ _ __   ___  _ __ ___   ___ | |_(_) ___  _ __  ");
console.info(" /  \/ / _` | '_ \ / _ \| '_ ` _ \ / _ \| __| |/ _ \| '_ \ ");
console.info("/ /\  / (_| | | | | (_) | | | | | | (_) | |_| | (_) | | | |");
console.info("\_\ \/ \__,_|_| |_|\___/|_| |_| |_|\___/ \__|_|\___/|_| |_|");

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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
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
