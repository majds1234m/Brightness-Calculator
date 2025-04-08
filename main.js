document.getElementById("btn").addEventListener("click", onClicked)

function onClicked() {
let r = +document.getElementById("red").value;
let g = +document.getElementById("green").value;
let b = +document.getElementById("blue").value;
let answer = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);
document.getElementById("text").innerHTML = Math.round(answer);
}