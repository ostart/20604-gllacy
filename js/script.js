var mapButton = document.querySelector(".map-button");
var overlay = document.querySelector(".modal-overlay");
var modalContent = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");

var storage = localStorage.getItem("name");

var form = modalContent.querySelector("form");
var userName = modalContent.querySelector("[name=name]");
var mail = modalContent.querySelector("[name=e-mail]");

mapButton.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("showed");
    modalContent.classList.add("modal-content-show");

    if (storage) {
        userName.value = storage;
        mail.focus();
    } else {
        userName.focus();
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.remove("showed");
    modalContent.classList.remove("modal-content-show");
    modalContent.classList.remove("modal-error");
});

modalContent.addEventListener("submit", function(event) {
    if (!userName.value || !mail.value) {
        event.preventDefault();
        modalContent.classList.remove("modal-error");
        modalContent.offsetWidth = modalContent.offsetWidth;
        modalContent.classList.add("modal-error");
    } else {
        localStorage.setItem("name", userName.value);
    }
});