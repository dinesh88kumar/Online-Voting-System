package com.example.admin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.admin.entity.Admin;
import com.example.admin.repository.AdminRepository;


@Service
public class AdminService {
	@Autowired
	private AdminRepository arepo;
	
	


	
	public Admin getAdminById(int id) {
		return arepo.findById(id).get();
	}
	
}
