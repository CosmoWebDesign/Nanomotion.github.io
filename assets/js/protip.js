var x = Math.floor((Math.random() * 10) + 1);
if (x > 6) {
  document.getElementById("pro-tip").innerHTML = "Click on the menu icon by the top-right of the page to view all of the pages on this website.";
} else if (x > 3) {
  document.getElementById("pro-tip").innerHTML = "You can also connect using nanomotion.xyz!";
} else {
  document.getElementById("pro-tip").innerHTML = "Visit help.nanomotion.xyz for help on software and this website!";
}
