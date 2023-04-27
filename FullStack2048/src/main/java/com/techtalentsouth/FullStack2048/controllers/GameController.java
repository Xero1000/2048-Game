package com.techtalentsouth.FullStack2048.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.techtalentsouth.FullStack2048.models.UserHighscore;
import com.techtalentsouth.FullStack2048.repository.GameRepository;

@RestController
public class GameController {
	
	@Autowired
	private GameRepository gameRepository;
	private List<UserHighscore> highscores = new ArrayList<>();
	private final int MAX_HIGHSCORE_ENTRIES = 5;
	
	@GetMapping("/test")
	public String endpoint() {
		return "Hello friend";
	}
	
	@GetMapping("/highscores")
	public List<UserHighscore> getHighscores() {
		highscores = gameRepository.findAll();
		sort(highscores);
		return highscores;
	}
	
	@PostMapping("/highscores")
	public void addHighscore(@RequestBody UserHighscore highscore) {
		highscores = gameRepository.findAll();
		sort(highscores);
		if (highscores.size() == 0 || highscores.size() < MAX_HIGHSCORE_ENTRIES) {
			gameRepository.save(highscore);
		}
		else if (highscore.getHighscore() > highscores.get(0).getHighscore()) {
			gameRepository.save(highscore);
			
			if (gameRepository.count() > MAX_HIGHSCORE_ENTRIES) {
				gameRepository.deleteById(highscores.get(0).getId());
			}
		}
	}
	
	public void sort(List<UserHighscore> highscores) {
		highscores.sort((score1, score2) -> score1.getHighscore().compareTo(score2.getHighscore()));
	}
}
