
var modal = document.getElementsByClassName("modal")[0];
var btn = document.getElementsByClassName("modal-btn")[0];
var span = document.getElementsByClassName("modal-close")[0];
var body = document.querySelector("body");

btn.onclick = function() {
    modal.style.display = "block";
    body.classList.add("no-scrolling");
}
span.onclick = function() {
    modal.style.display = "none";
    body.classList.remove("no-scrolling");
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    	body.classList.remove("no-scrolling");
    }
}
