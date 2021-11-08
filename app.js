fetch("genetic_analysis.html")
.then(response => response.text())
.then(data => {
  document.getElementsByClassName("section")[0].innerHTML=data;
})

document.getElementsByClassName("menu_items")[0].addEventListener("click", function geneticanalysis() {
  fetch("genetic_analysis.html")
.then(response => response.text())
.then(data => {
  document.getElementsByClassName("section")[0].innerHTML=data;
})
})
document.getElementsByClassName("menu_items")[1].addEventListener("click", function ttps() {
  fetch("ttps.html")
.then(response => response.text())
.then(data => {
  document.getElementsByClassName("section")[0].innerHTML=data;
})
})
document.getElementsByClassName("menu_items")[2].addEventListener("click", function iocs() {
  fetch("iocs.html")
.then(response => response.text())
.then(data => {
  document.getElementsByClassName("section")[0].innerHTML=data;
})
})


// fectch api is not added because i am facing issue with cors policy error


