package com.techtalentsouth.FullStack2048.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.techtalentsouth.FullStack2048.models.SaveData;

@Repository
public interface SaveGameRepository extends CrudRepository<SaveData, Long>{
	
	SaveData findBySaveKey(String saveKey);
}
