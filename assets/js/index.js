const body = document.querySelector("body");

const hambuger = document.querySelector(".hambuger__menu");

const nav = document.querySelector(".header-list");

hambuger.addEventListener("click", () => {
	hambuger.classList.toggle("change");
	body.classList.toggle("change");
	nav.classList.toggle("change");
});

window.addEventListener("scroll", () => {
	let scrollPos = window.scrollY;

	if (scrollPos > 90) {
		nav.classList.add("handle-scroll");
	} else {
		nav.classList.remove("handle-scroll");
	}
});

const slideUp = {
	distance: "350%",
	origin: "right",
	opacity: null,
	delay: 250,
	reset: false,
};
const slideRight = {
	distance: "350%",
	origin: "right",
	opacity: null,
	delay: 200,
	reset: false,
};

const slideLeft = {
	distance: "350%",
	origin: "left",
	opacity: null,
	delay: 150,
	reset: false,
};

ScrollReveal().reveal(".card", slideRight);
ScrollReveal().clean(".card");
ScrollReveal().reveal(".services", slideUp);
ScrollReveal().reveal(".testimonials-box", slideRight);
ScrollReveal().reveal(".testimonials-img", slideLeft);
ScrollReveal().reveal(".footer-main", slideLeft);
