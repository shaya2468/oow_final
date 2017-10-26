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
	
	@OneToMany(mappedBy = "position")
	private List<Description> descriptions = new ArrayList<>();

	@ManyToOne
	private Product product;

	@OneToMany(mappedBy = "position")
	private List<Standard> standards = new ArrayList<>();

	@OneToMany(mappedBy = "position")
	private List<Requirement> requirements = new ArrayList<>();
	
	@OneToMany(mappedBy = "position")
	private List<Stack> stacks = new ArrayList<>();

	@OneToMany(mappedBy = "position")
	private List<Benefit> benefits = new ArrayList<>();
	
	protected Position() {
	}

	public Position(String name, String note) {
		this.name = name;
		this.note = note;
	}
	
	public List<Requirement> getRequirements() {
		return requirements;
	}

	public void setRequirements(List<Requirement> requirements) {
		this.requirements = requirements;
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
	
	public List<Description> getDescriptions() {
		return descriptions;
	}

	public void setDescriptions(List<Description> descriptions) {
		this.descriptions = descriptions;
	}
	
	public List<Stack> getStacks() {
		return stacks;
	}

	public void setStacks(List<Stack> stacks) {
		this.stacks = stacks;
	}

	public List<Benefit> getBenefits() {
		return benefits;
	}

	public void setBenefits(List<Benefit> benefits) {
		this.benefits = benefits;
	}
}
