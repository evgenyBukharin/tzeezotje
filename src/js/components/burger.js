const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const body = document.querySelector(".page__body");

burger.addEventListener("click", () => {
	if (!burger.classList.contains("burger--active")) {
		burger.classList.add("burger--active");
		menu.classList.add("menu_active");
		body.style.overflow = "hidden";
	} else {
		burger.classList.remove("burger--active");
		menu.classList.remove("menu_active");
		body.style.overflow = "visible";
	}
});
