package com.example.candidates.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.candidates.entity.Candidate;
import com.example.candidates.repository.CandidateRepository;
import com.example.candidates.services.CandidateService;


@RestController
@CrossOrigin
public class CandidateController {
	@Autowired
	private CandidateService services;
	@Autowired
	CandidateRepository crepo;
    
	
	@GetMapping("/getCandidates")
	public Iterable<Candidate> getCandidates() {
		return services.listAllC();
	}
	
	
	
	@PostMapping(value = "/saveCandidate")
	private String saveCandidate(@RequestBody  Candidate candidate) {
		services.saveOrUpdateC(candidate);
		return candidate.getName();
	}

	
	@RequestMapping("/candidate/{id}")
	private Candidate getCandidate(@PathVariable(name = "id") int id) {
		return services.getCandidateById(id);
	}

	
	
	@PutMapping("/editC/{id}")

	private ResponseEntity<Candidate> updateC(@PathVariable(name="id") int id ,@RequestBody Candidate candidate) {
	   Candidate updatedCan=services.getCandidateById(id);
	  
		updatedCan.setCounts(candidate.getCounts());
		crepo.save(updatedCan);
		return  ResponseEntity.ok(updatedCan);
	}


}
