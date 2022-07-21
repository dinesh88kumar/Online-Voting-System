package com.example.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.login.entity.Users;




@Service
public class UserService {
//	@Autowired
//	private UserRepository repo;
	@Autowired
	private RestTemplate rest;
	

	public Users getVoterById(int id) {
		Users u=rest.getForObject("http://localhost:8000/voter/"+id, Users.class);
		return u;
	}
	

}
