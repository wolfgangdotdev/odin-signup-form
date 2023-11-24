const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorText = document.querySelector(".error-text");

let isValidationActive = false;

confirmPassword.addEventListener("focusout", () => {
	isValidationActive = true;
	console.log("validation activated");
	validatePassword();
});

confirmPassword.addEventListener("input", () => {
	if (!isValidationActive) return;
	console.log("validation triggered");
	validatePassword();
});

password.addEventListener("input", () => {
	if (!isValidationActive) return;
	console.log("validation triggered");
	validatePassword();
});

const validatePassword = function () {
	let passwordValue = password.value;
	let confirmPasswordValue = confirmPassword.value;

	if (passwordValue !== confirmPasswordValue) {
		password.classList.add("error");
		confirmPassword.classList.add("error");
		errorText.classList.remove("hidden");
	} else {
		password.classList.remove("error");
		confirmPassword.classList.remove("error");
		errorText.classList.add("hidden");
	}
};
