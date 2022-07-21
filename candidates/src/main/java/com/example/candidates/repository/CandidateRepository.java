package com.example.candidates.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.candidates.entity.Candidate;

public interface CandidateRepository extends CrudRepository<Candidate, Integer>{

	

}