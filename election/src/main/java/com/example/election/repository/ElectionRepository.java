package com.example.election.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.election.entity.Election;

public interface ElectionRepository extends CrudRepository<Election, String> {

}
