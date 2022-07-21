package com.example.election.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.election.entity.Election;
import com.example.election.repository.ElectionRepository;
import com.example.election.service.ElectionService;


@RestController
@CrossOrigin
public class ElectionController {
	@Autowired
	private ElectionService services;
	@Autowired
	ElectionRepository repo;
    

	@GetMapping("/getElections")
	public Iterable<Election> getElections() {
		return services.listAllE();
	}

	
	
	@PostMapping(value = "/saveElection")
	private String saveElection(@RequestBody  Election election) {
		services.saveOrUpdateE(election);
		return election.getTitle();
	}
	

}
