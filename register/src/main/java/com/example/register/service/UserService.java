package com.example.register.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.register.entity.Users;
import com.example.register.repo.UserRepository;


@Service
public class UserService {
	@Autowired
	private UserRepository repo;
	

	public Iterable<Users> listAll() {
		return this.repo.findAll();
	}

//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdate(Users users) {
		repo.save(users);
	}
	
	public Users getVoterById(int id) {
		return repo.findById(id).get();
	}
}
