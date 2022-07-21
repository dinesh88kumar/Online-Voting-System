package com.example.register.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Records")
public class Users {
	
	  @Id
	    @Column(name="id")
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;
		
	    @Column(name="name")
	    private String name;

	    
	    @Column(name="password")
	    private String 	password;
	    
	    @Column(name="email")
	    private String email;
	    
	    @Column(name="phone")
	    private String phone;
	    

		public long getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getname() {
			return name;
		}

		public void setname(String name) {
			this.name = name;
		}

		

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}
		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}


}
