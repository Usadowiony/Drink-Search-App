const input = document.querySelector(".header__search");
const liItems = document.querySelectorAll(".drink-list__li-item");
const h1 = document.querySelector(".drink-list__h1");

input.addEventListener("keyup", () => {
	const inputValue = input.value;

	liItems.forEach(element => {
		if (
			element.innerHTML.toLowerCase().includes(`${inputValue.toLowerCase()}`)
		) {
			element.classList.remove("drink-list__li-item--hide");
		} else {
			element.classList.add("drink-list__li-item--hide");
		}
	});
});
