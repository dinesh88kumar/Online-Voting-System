package com.example.login.controller;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.login.entity.Users;

import com.example.login.service.UserService;




@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService services;
//	@Autowired
//	UserRepository crepo;
    
	@RequestMapping("/voter/{id}")
	private Users getVoter(@PathVariable(name = "id") int voterid) {
		return services.getVoterById(voterid);
	}


}
