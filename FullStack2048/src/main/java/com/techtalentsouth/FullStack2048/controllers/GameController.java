package com.techtalentsouth.FullStack2048.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.techtalentsouth.FullStack2048.models.SaveData;
import com.techtalentsouth.FullStack2048.models.UserHighscore;
import com.techtalentsouth.FullStack2048.repository.HighscoreRepository;
import com.techtalentsouth.FullStack2048.repository.SaveGameRepository;

@RestController
public class GameController {
	
	@Autowired
	private HighscoreRepository highscoreRepository;
	@Autowired
	private SaveGameRepository saveGameRepository;
	
	private List<UserHighscore> highscores = new ArrayList<>();
	private final int MAX_HIGHSCORE_ENTRIES = 5;
	
	// Get request for sorted highscore data
	@GetMapping("/highscores")
	public List<UserHighscore> getHighscores() {
		highscores = highscoreRepository.findAll();
		sort(highscores);
		return highscores;
	}
	
	// Post request to add a new highscore
	@PostMapping("/highscores")
	public void addHighscore(@RequestBody UserHighscore highscore) {
		highscores = highscoreRepository.findAll();
		sort(highscores);
		
		// If database is empty or has less than 5 entries
		if (highscores.size() == 0 || highscores.size() < MAX_HIGHSCORE_ENTRIES) {
			highscoreRepository.save(highscore);
		}
		// if database has 5 entries and the new highscore is greater than the minimum highscore
		// The new highscore is saved and the minimum highscore is deleted
		else if (highscore.getHighscore() > highscores.get(MAX_HIGHSCORE_ENTRIES - 1).getHighscore()) {
			highscoreRepository.save(highscore);
			
			if (highscoreRepository.count() > MAX_HIGHSCORE_ENTRIES) {
				highscoreRepository.deleteById(highscores.get(MAX_HIGHSCORE_ENTRIES - 1).getId());
			}
		}
	}
	
	// Get request to load a saved game
	// Searches for data to load with a provided save key 
	@GetMapping("/loadGame")
	public SaveData loadGame(@RequestParam(value="saveKey", required=true) String saveKey) {
		SaveData dataToLoad = saveGameRepository.findBySaveKey(saveKey);
		return dataToLoad;
	}
	
	// Post data to save a game
	// Score, board data, and corresponding save key is posted to database
	@PostMapping("/saveGame")
	public void saveGame(@RequestBody SaveData saveData) {
			saveGameRepository.save(saveData);
	}
	
	// sorts the highscores in descending order
	public void sort(List<UserHighscore> highscores) {
		highscores.sort((score2, score1) -> score1.getHighscore().compareTo(score2.getHighscore()));
	}
}
