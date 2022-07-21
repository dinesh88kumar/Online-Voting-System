package com.example.candidates.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.candidates.entity.Candidate;
import com.example.candidates.repository.CandidateRepository;


@Service
public class CandidateService {

	@Autowired
	private CandidateRepository crepo;

	


	

//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdateC(Candidate e) {
		crepo.save(e);
	}
	public Iterable<Candidate> listAllC() {
		return this.crepo.findAll();
	}


	public Candidate getCandidateById(int id) {
		return crepo.findById(id).get();
	}
	
	public void updateC(Candidate c, int id) {
		crepo.save(c);
	}
	
   

}
