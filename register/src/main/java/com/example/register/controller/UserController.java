package com.example.register.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.register.entity.Users;
import com.example.register.repo.UserRepository;
import com.example.register.service.UserService;



@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService services;
	@Autowired
	UserRepository crepo;
    
	@GetMapping("/getall")
	public Iterable<Users> getUsers() {
		return services.listAll();
	}
	

	@PostMapping(value = "/save")
	private long saveUsers(@RequestBody Users u) {
		services.saveOrUpdate(u);
		return u.getId();
	}
	
	
	@RequestMapping("/voter/{id}")
	private Users getVoter(@PathVariable(name = "id") int voterid) {
		return services.getVoterById(voterid);
	}

}
