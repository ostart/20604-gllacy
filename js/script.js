var login = document.querySelector(".login");
var cart = document.querySelector(".cart");
var loginForm = document.querySelector(".login-form");
var cartOrder = document.querySelector(".cart-order");

login.addEventListener("mouseover", function(event) {
	event.preventDefault();
	loginForm.classList.add("showed");
});

login.addEventListener("mouseout", function(event) {
	event.preventDefault();
	loginForm.classList.remove("showed");
});


cart.addEventListener("mouseover", function(event) {
	event.preventDefault();
	if(cart.classList.contains("cart-full"))
	{
		cartOrder.classList.add("showed");
	}
});

cart.addEventListener("mouseout", function(event) {
	event.preventDefault();
	if(cart.classList.contains("cart-full"))
	{
		cartOrder.classList.remove("showed");
	}
});


var mapButton = document.querySelector(".map-button");
var overlay = document.querySelector(".modal-overlay");
var modalContent = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");

mapButton.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.add("showed");
	modalContent.classList.add("showed");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.remove("showed");
	modalContent.classList.remove("showed");
});
