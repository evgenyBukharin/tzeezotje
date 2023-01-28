// Подключение свайпера
import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);
const swiper = new Swiper(document.querySelector(".swiper"), {
	slidesPerView: 1,
	speed: 500,
	navigation: {
		prevEl: ".btn-prev",
		nextEl: ".btn-next",
	},
});
