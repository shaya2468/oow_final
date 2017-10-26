package com.shaya.woo.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Product {
	
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String title;
	private String sentance1;
	private String sentance2;
	
	@OneToMany(mappedBy = "product")
	private List<Image> images = new ArrayList<>();

	@OneToMany(mappedBy = "product")
	private List<Position> positions = new ArrayList<>();
	
	protected Product(){}
	
	protected Product(String title, String sentance1, String sentance2) {
		this.title = title;
		this.sentance1 = sentance1;
		this.sentance2 = sentance2;
	}
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSentance1() {
		return sentance1;
	}
	public void setSentance1(String sentance1) {
		this.sentance1 = sentance1;
	}
	public String getSentance2() {
		return sentance2;
	}
	public void setSentance2(String sentance2) {
		this.sentance2 = sentance2;
	}
	
	public List<Position> getPositions() {
		return positions;
	}

	public void setPositions(List<Position> positions) {
		this.positions = positions;
	}
	
	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}

}
