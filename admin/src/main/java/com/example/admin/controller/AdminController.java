package com.example.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.admin.entity.Admin;
import com.example.admin.repository.AdminRepository;
import com.example.admin.service.AdminService;

@RestController
@CrossOrigin
public class AdminController {
	@Autowired
	private AdminService services;
	@Autowired
	AdminRepository repo;    
	
	
	
	@RequestMapping("/admin/{id}")
	private Admin getAdmin(@PathVariable(name = "id") int adminid) {
		return services.getAdminById(adminid);
	}
	

}