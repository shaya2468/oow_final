package com.shaya.woo.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Address {

	@Id
	@GeneratedValue
	private Long id;

	@OneToOne(fetch=FetchType.LAZY, mappedBy="address")
	@JsonIgnore
	private Company company;

	private String city;
	private String street;
	private String image;

	protected Address() {
	}

	public Address(String city, String street, String image) {
		this.city = city;
		this.street = street;
		this.image = image;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}
}
