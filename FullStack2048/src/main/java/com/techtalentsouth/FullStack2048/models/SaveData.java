package com.techtalentsouth.FullStack2048.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class SaveData {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String saveKey;
	private Integer[] row1;
	private Integer[] row2;
	private Integer[] row3;
	private Integer[] row4;
	
	public SaveData() {
		
	}
	
	public SaveData(String saveKey, Integer[] row1, Integer[] row2, Integer[] row3, Integer[] row4) {
		this.saveKey = saveKey;
		this.row1 = row1;
		this.row2 = row2;
		this.row3 = row3;
		this.row4 = row4;
	}

	public String getSaveKey() {
		return saveKey;
	}

	public void setSaveKey(String saveKey) {
		this.saveKey = saveKey;
	}

	public Integer[] getRow1() {
		return row1;
	}

	public void setRow1(Integer[] row1) {
		this.row1 = row1;
	}

	public Integer[] getRow2() {
		return row2;
	}

	public void setRow2(Integer[] row2) {
		this.row2 = row2;
	}

	public Integer[] getRow3() {
		return row3;
	}

	public void setRow3(Integer[] row3) {
		this.row3 = row3;
	}

	public Integer[] getRow4() {
		return row4;
	}

	public void setRow4(Integer[] row4) {
		this.row4 = row4;
	}	
}
