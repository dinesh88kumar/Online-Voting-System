package com.example.election.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.election.entity.Election;
import com.example.election.repository.ElectionRepository;


@Service
public class ElectionService {
	
	@Autowired
	private ElectionRepository repo;
	


	
	public Iterable<Election> listAllE() {
		return this.repo.findAll();
	}

//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdateE(Election election) {
		repo.save(election);
	}


	
   

}
