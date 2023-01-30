const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal__container");
const modalForm = document.querySelector(".modal__form");
const submitBtn = document.getElementById("submitBtn");
const openModalBtn = document.getElementById("openModalBtn");

openModalBtn.addEventListener("click", () => {
	modal.classList.add("modal-visible");
});

modal.addEventListener("click", () => {
	modal.classList.remove("modal-visible");
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
