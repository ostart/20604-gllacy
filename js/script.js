// var login = document.querySelector(".login");
// var cart = document.querySelector(".cart");
// var loginForm = document.querySelector(".login-form");
// var cartOrder = document.querySelector(".cart-order");

// login.addEventListener("mouseover", function(event) {
//     event.preventDefault();
//     loginForm.classList.add("showed");
// });

// login.addEventListener("mouseout", function(event) {
//     event.preventDefault();
//     loginForm.classList.remove("showed");
// });


// cart.addEventListener("mouseover", function(event) {
//     event.preventDefault();
//     if (cart.classList.contains("cart-full")) {
//         cartOrder.classList.add("showed");
//     }
// });

// cart.addEventListener("mouseout", function(event) {
//     event.preventDefault();
//     if (cart.classList.contains("cart-full")) {
//         cartOrder.classList.remove("showed");
//     }
// });


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