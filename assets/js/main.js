function getParameterByName(e,n){n||(n=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var o=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null}var forceLanguage=function(e){try{var n=document.getElementById("unsupported-browser-notif");-1!=e.indexOf("pt")?n.innerHTML="<span onclick='this.parentElement.style.display=\"none\";' style='float: right; cursor: pointer;'>&times;</span><strong>Olá!</strong> Infelizmente este site não é suportado no seu idioma.":-1!=e.indexOf("es")&&(n.innerHTML="<span onclick='this.parentElement.style.display=\"none\";' style='float: right; cursor: pointer;'>&times;</span><strong>¡Hola!</strong> Desafortunadamente este sitio web no es compatible con su idioma."),n.style.display="block",window.navigator.language=e,window.navigator.userLanguage=e}catch(e){console.error("Language change failed: "+e)}};"nanomotion.github.io"!=document.location.hostname&&(window.open("https://nanomotion.github.io"+document.location.pathname),window.close());
/*try {
    var a = document.getElementById('unsupported-browser-notif');
    a.innerHTML = "<span onclick='this.parentElement.style.display=\"none\";' style='float: right; cursor: pointer;'>&times;</span>We changed our terms of service! <a style=\"color: white; text-decoration: underline;\" href=\"https://nanomotion.github.io/pages/faq/policies\">Take a look</a>";
    a.style.display = "block";
} catch(e) {
    console.info("failed to change banner: " + e);
}*/
var language=window.navigator.userLanguage||window.navigator.language;if(-1==language.indexOf("en"))try{var x=document.getElementById("unsupported-browser-notif");-1!=language.indexOf("pt")?(x.innerHTML="<span onclick='this.parentElement.style.display=\"none\";' style='float: right; cursor: pointer;'>&times;</span><strong>Olá!</strong> Infelizmente este site não é suportado no seu idioma.",x.style.display="block"):-1!=language.indexOf("es")&&(x.innerHTML="<span onclick='this.parentElement.style.display=\"none\";' style='float: right; cursor: pointer;'>&times;</span><strong>¡Hola!</strong> Desafortunadamente este sitio web no es compatible con su idioma.",x.style.display="block")}catch(e){console.info("document.getElementById('unsupported-browser-notif'); failed: "+e)}try{var getIP=new XMLHttpRequest;getIP.open("GET","https://api.ipify.org",!1),getIP.onreadystatechange=function(){if(4===getIP.readyState&&(200===getIP.status||0==news.status)){var e=getIP.responseText;0!=e.indexOf("184.168.221")&&0!=e.indexOf("66.193.212")&&0!=e.indexOf("216.48.140")||(document.location="http://error.nanomotion.xyz/403.html?reason=ip")}},getIP.send(null)}catch(e){window.console&&console.error("Error while getting IP: "+String(e))}
