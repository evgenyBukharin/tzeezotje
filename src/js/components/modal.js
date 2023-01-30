const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal__container");
const modalForm = document.querySelector(".modal__form");
const submitBtn = document.getElementById("submitBtn");
const openModalBtn = document.getElementById("openModalBtn");
const body = document.querySelector(".page__body");

openModalBtn.addEventListener("click", () => {
	modal.classList.add("modal-visible");
	body.style.overflow = "hidden";
});

modal.addEventListener("click", (event) => {
	modal.classList.remove("modal-visible");
	body.style.overflow = "visible";
	event.stopPropagation();
});

modalContainer.addEventListener("click", (event) => {
	event.stopPropagation();
});

modalForm.addEventListener("submit", (event) => {
	event.preventDefault();
	formData = new FormData(modalForm);
	fetch(
		"https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR",
		{
			method: "post",
			body: formData,
		}
	).then((response) => {
		response.json();
		console.log(response);
	});
});
