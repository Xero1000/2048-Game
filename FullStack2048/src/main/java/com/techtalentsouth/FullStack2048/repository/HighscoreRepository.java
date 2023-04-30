package com.techtalentsouth.FullStack2048.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.techtalentsouth.FullStack2048.models.UserHighscore;

@Repository 
public interface HighscoreRepository extends CrudRepository<UserHighscore, Long>{
	
	@Override
	List<UserHighscore> findAll();
}
