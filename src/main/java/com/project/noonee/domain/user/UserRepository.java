package com.project.noonee.domain.user;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
	public int save(User user) throws Exception;
	public User findUserByUsername(String username) throws Exception;
	public User findOAuth2UserByUsername(String oauth2_id) throws Exception;
	public List<User> getUSerList(String searchFlag) throws Exception;
	
	
}
