package com.techtalentsouth.FullStack2048.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techtalentsouth.FullStack2048.models.UserHighscore;
import com.techtalentsouth.FullStack2048.repository.GameRepository;

@RestController
public class GameController {
	
	@Autowired
	GameRepository gameRepository;
	
	@GetMapping("/test")
	public String endpoint() {
		return "Hello friend";
	}
	
	@GetMapping("/highscores")
	public List<UserHighscore> getHighscores() {
		List<UserHighscore> highscores = gameRepository.findAll();
		return highscores;
	}
	
	@PostMapping("/highscores")
	public void addHighscore(@RequestBody UserHighscore highscore) {
		gameRepository.save(highscore);
	}
}
