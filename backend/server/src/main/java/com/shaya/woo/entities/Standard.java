package com.shaya.woo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Standard {
	@Id
	@GeneratedValue
	private Long id;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private Boolean met;

	@ManyToOne
	private Position position;

	protected Standard() {
	}

	public Standard(String name, Boolean met) {
		this.name = name;
		this.met = met;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Boolean getMet() {
		return met;
	}

	public void setMet(Boolean met) {
		this.met = met;
	}

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}
}
