package com.techtalentsouth.FullStack2048.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserHighscore {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	private Integer highscore;
	
	public UserHighscore() {
		
	}
	
	public UserHighscore(String name, Integer highscore) {
		this.name = name;
		this.highscore = highscore;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getHighscore() {
		return highscore;
	}

	public void setHighscore(Integer highscore) {
		this.highscore = highscore;
	}

	public Long getId() {
		return id;
	}
}
