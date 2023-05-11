package com.project.noonee.web.dto.auth;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.project.noonee.domain.user.User;

import lombok.Data;

@Data
public class SignupReqDto {
	
	@NotBlank(message= "이메일을 입력해 주세요")
	@Email
	private String email;

	@NotBlank(message = "비밀번호를 입력해주세요.")
	@Size(min=8, max=16, message = "비밀번호 8~16자를 입력해 주세요.")
	@Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~!@#$%^&*_])[a-zA-Z\\d-~!@#$%^&*_]*$",
			message = "비밀번호는 숫자, 영문, 특수기호를 하나 이상 포함하여 작성해야합니다") 
	private String password;
	
	@NotBlank(message = "이름을 입력해주세요.")
	@Pattern(regexp = "^[가-힇]*$", message = "한글만 입력 가능합니다.")
	private String username;
	
	@NotBlank(message = "휴대폰 번호를 입력해 주세요.")
	@Pattern(regexp = "^(?=.*\\d)[\\d]{11}$", message = "휴대폰 번호 11자리를 입력해 주세요.")
	private String userphone;

	
	public User toEntity() {
		return User.builder()
				.user_email(email)
				.user_password(new BCryptPasswordEncoder().encode(password))
				.user_name(username)
				.user_phone(userphone)
				.user_roles("ROLE_USER")
				.build();
	}
}







