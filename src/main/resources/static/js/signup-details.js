const inputs = document.querySelectorAll("main input");
const signupButton = document.querySelector(".signup-btn");




signupButton.onclick = () => {
	let checkUsernameFlag = false;
	let signupData = {
		email: inputs[0].value,
		password: inputs[1].value,
		username: inputs[3].value,
		userphone: inputs[4].value,
		"checkUsernameFlag": checkUsernameFlag
	}

	$.ajax({
		async: false,
		type: "get",
		url: "/api/v1/auth/signup/validation/username",
		data: {username : inputs[0].value},
		dataType: "json",
		success: (response) => {
			checkUsernameFlag = response.data;
			
			if(checkUsernameFlag) {
				alert("사용 가능한 이메일입니다.");
				$.ajax({
					async: false,
					type: "post",
					url: "/api/v1/auth/signup",
					contentType: "application/json",
					data: JSON.stringify(signupData),
					dataType: "json",
					success: (response) => {
						
						if(response.data){
							console.log(response);
							alert("회원가입 완료.");
							location.replace("/auth/signin");
						}
						
					},
					error: (error) => {
						console.log(error);	
						validationError(error.responseJSON.data);
						// alert(JSON.stringify(error.responseJSON.data));
					}
				})
			}else { 
				alert("이미 사용중인 이메일입니다.");
			}
		},
		error: (error) => {
			if(error.status == 400){
				alert(JSON.stringify(error.responseJSON.data));
			}else{
				console.log("요청 실패");
				console.log(error);				
			}
		}
	});
	
	
	
	// if(signupData.email == "") {
	// 	alert("이메일을 입력해주세요.");
	// }
	
	
}

function validationError(error) {
    // const accountErrors = document.querySelector(".account-errors");
    // const accountErrorList = accountErrors.querySelector("ul");

	const errorList = [];
    const errorValues = Object.values(error);
	// console.log(errorValues);
	
	errorValues.forEach((value) => {
		// console.log(value);
		errorList.push(value);
		
	});
	alert(errorList.join('\n'));

    // accountErrorList.innerHTML = "";

	// alert(errorValues);

    // errorValues.forEach((value) => {
    //     accountErrorList.innerHTML += `
    //         <li>${value}</li>
    //     `;
    // });

    // accountErrors.classList.remove("errors-invisible");
}
	
	/*$.ajax({
		async: false,
		type: "get",
		url: "/api/v1/auth/signup/validation/password",
		data: {password : inputs[2].value},
		dataType: "json",
		success: (response) => {
			checkPasswordFlag = response.data;
			
			if(checkPasswordFlag == response.data) {
				alert("비밀번호 확인이 완료되었습니다.");
			}else{
				alert("비밀번호가 다릅니다");
			}
		},
		error: (error) => {
			if(error.status == 400){
				alert(JSON.stringify(error.responseJSON.data));
			}else{
				console.log("요청 실패");
				console.log(error);				
			}
		}
	});*/















