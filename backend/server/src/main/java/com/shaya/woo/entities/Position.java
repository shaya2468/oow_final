package com.shaya.woo.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Position {

	@Id
	@GeneratedValue
	private Long id;

	@ManyToOne
	private Company company;

	@Column(nullable = false)
	private String name;

	private String note;

	@ManyToOne
	private Product product;

	@OneToMany(mappedBy = "position")
	private List<Standard> standards = new ArrayList<>();

	protected Position() {
	}

	public Position(String name, String note) {
		this.name = name;
		this.note = note;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public List<Standard> getStandards() {
		return standards;
	}

	public void setStandards(List<Standard> standards) {
		this.standards = standards;
	}
}
