// Copyright (C) Nanomotion 2017

console.log("%c Welcome to Nanomotion.github.io!", "color: blue; font-family: 'Segoe UI'; font-size: 22px;");
console.log("Loading functions...");

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

var forceLanguage = function(lang) {
    try {
        var x = document.getElementById('unsupported-browser-notif');
        if (lang.indexOf("pt") != -1) {
            x.innerHTML = "<span onclick='this.parentElement.style.display=\"none\";' style='float: right; cursor: pointer;'>&times;</span><strong>Olá!</strong> Infelizmente este site não é suportado no seu idioma.";
        } else if (lang.indexOf("es") != -1) {
            x.innerHTML = "<span onclick='this.parentElement.style.display=\"none\";' style='float: right; cursor: pointer;'>&times;</span><strong>¡Hola!</strong> Desafortunadamente este sitio web no es compatible con su idioma.";
        }
        x.style.display = "block";
        window.navigator.language = lang
        window.navigator.userLanguage = lang
        var language = lang
    }
    catch(e) {
        console.error("Language change failed: " + e);
    }
}

console.log("Loaded functions");

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

var language = window.navigator.userLanguage || window.navigator.language;

if (!(language.indexOf("en") != -1)) {
    try {
        var x = document.getElementById('unsupported-browser-notif');
        if (language.indexOf("pt") != -1) {
            x.innerHTML = "<span onclick='this.parentElement.style.display=\"none\";' style='float: right; cursor: pointer;'>&times;</span><strong>Olá!</strong> Infelizmente este site não é suportado no seu idioma.";
            x.style.display = "block";
        } else if (language.indexOf("es") != -1) {
            x.innerHTML = "<span onclick='this.parentElement.style.display=\"none\";' style='float: right; cursor: pointer;'>&times;</span><strong>¡Hola!</strong> Desafortunadamente este sitio web no es compatible con su idioma.";
            x.style.display = "block";
        }
    }
    catch(e) {
        console.info("document.getElementById('unsupported-browser-notif'); failed: " + e);
    }
}

try {
    var getIP = new XMLHttpRequest()
    getIP.open("GET", "https://api.ipify.org", false);
    getIP.onreadystatechange = function ()
    {
        if(getIP.readyState === 4)
        {
            if(getIP.status === 200 || news.status == 0)
            {
                var userIP = getIP.responseText;
                if (userIP.indexOf("184.168.221") == 0 || userIP.indexOf("66.193.212") == 0) {
                    document.location = "http://error.nanomotion.xyz/403.html?reason=ip";
            }
        }
    }
    getIP.send(null);
} catch(e) {
    if (window.console) {
      console.error("Error while getting IP: " + String(e));
    }
}
