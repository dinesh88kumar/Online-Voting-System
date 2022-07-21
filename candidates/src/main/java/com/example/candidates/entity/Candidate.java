package com.example.candidates.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Candidates")
public class Candidate 
{	
   

	@Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	
    @Column(name="name")
    private String name;

    
   
    
    @Column(name="email")
    private String email;
    
    @Column(name="designation")
    private String designation;
    
    @Column(name="bio")
    private String bio;
    
    @Column(name="electionid")
    private String electionid;
    
    @Column(name="counts")
    private int counts;
 
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public String getElectionid() {
		return electionid;
	}

	public void setElectionid(String electionid) {
		this.electionid = electionid;
	}
	   
    public int getCounts() {
		return counts;
	}

	public void setCounts(int counts) {
		this.counts = counts;
	}

}
