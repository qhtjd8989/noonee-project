const username = document.querySelector(".user-name");
const updateUser = document.querySelector(".update-user");
const updateModal = document.querySelector(".update-modal");
const deleteUser = document.querySelector(".delete-user");
const deleteModal = document.querySelector(".delete-modal");
const cancel = document.querySelector(".cancel");
const modifyModal = document.querySelector(".modify-modal");
const email = document.querySelector(".email");
let nameInput = document.querySelector(".name-input");
let phoneInput = document.querySelector(".phone-input");
const checkBtn = document.querySelector(".check-btn");

username.innerHTML = "";

username.innerHTML = `${user.user_name}님 안녕하세요.`;

updateUser.onclick = () => {
	updateModal.classList.toggle("update-visible");
	
}
	
deleteUser.onclick = () => {
	deleteModal.classList.toggle("visible");
	
}

cancel.onclick = () => {
	deleteModal.classList.toggle("visible");
}

updateModal.onclick = (e) => {
	if(e.target == updateModal) {
		updateModal.classList.toggle("update-visible");
	}
}
email.innerHTML = `${user.user_email}`;
nameInput.value = `${user.user_name}`;
phoneInput.value = `${user.user_phone}`;

checkBtn.onclick = () => {
	console.log(nameInput.value);
}




	
