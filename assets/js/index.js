const slideUp = {
	distance: "350%",
	origin: "bottom",
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
