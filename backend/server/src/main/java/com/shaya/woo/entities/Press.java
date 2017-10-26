package com.shaya.woo.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Press {
	
	@Id
	@GeneratedValue
	private Long id;
	
	protected Press(){}
	
	@OneToMany(mappedBy = "press")
	private List<Image> images = new ArrayList<>();
	
	@OneToOne(fetch = FetchType.LAZY, mappedBy = "press")
	@JsonIgnore
	private Company company;

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}
}
