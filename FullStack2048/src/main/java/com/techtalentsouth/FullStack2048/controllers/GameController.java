package com.techtalentsouth.FullStack2048.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techtalentsouth.FullStack2048.repository.GameRepository;

@RestController
public class GameController {
	
	@Autowired
	GameRepository gameRepository;
	
	@GetMapping("/test")
	public String endpoint() {
		return "Hello friend";
	}
}
