var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1800);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
