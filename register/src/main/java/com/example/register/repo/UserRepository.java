package com.example.register.repo;

import org.springframework.data.repository.CrudRepository;

import com.example.register.entity.Users;


public interface UserRepository extends CrudRepository<Users, Integer>{

}
