package com.example.election.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Election")
public class Election 
{	
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    
   


	@Column(name="title")
  
    private String title;
    
    @Column(name="category")
    private String category;

    
    @Column(name="description")
    private String 	description;
    @Column(name="electionid")
    private String electionid;



	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}
	
    public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}

    public String getElectionid() {
		return electionid;
	}


	public void setElectionid(String electionid) {
		this.electionid = electionid;
	}
	
	
}
