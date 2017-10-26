package com.shaya.woo.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Company {

	@Id
	@GeneratedValue
	private Long id;

	@Column(nullable = false)
	private String name;

	@Column(name = "main_image")
	private String mainImage;
	
	private String logo;

	@OneToMany(mappedBy = "company")
	private List<Link> links = new ArrayList<>();

	@OneToMany(mappedBy = "company")
	private List<Description> descriptions = new ArrayList<>();

	@OneToMany(mappedBy = "company")
	private List<Requirement> requirements = new ArrayList<>();

	@OneToMany(mappedBy = "company")
	private List<Stack> stacks = new ArrayList<>();
	
	@OneToMany(mappedBy = "company")
	private List<Benefit> benefits = new ArrayList<>();

	@OneToMany(mappedBy = "company")
	private List<Image> images = new ArrayList<>();

	@OneToMany(mappedBy = "company")
	private List<Position> positions = new ArrayList<>();

	@OneToOne(fetch = FetchType.EAGER)
	private Address address;

	@OneToOne(fetch = FetchType.EAGER)
	private About about;

	@OneToOne(fetch = FetchType.EAGER)
	private Press press;

	public Press getPress() {
		return press;
	}

	public void setPress(Press press) {
		this.press = press;
	}

	public About getAbout() {
		return about;
	}

	public void setAbout(About about) {
		this.about = about;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	protected Company() {
	}

	public Company(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Link> getLinks() {
		return links;
	}

	public void setLinks(List<Link> links) {
		this.links = links;
	}

	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}

	public String getMainImage() {
		return mainImage;
	}

	public void setMainImage(String mainImage) {
		this.mainImage = mainImage;
	}

	public List<Position> getPositions() {
		return positions;
	}

	public void setPositions(List<Position> positions) {
		this.positions = positions;
	}

	public List<Description> getDescriptions() {
		return descriptions;
	}

	public void setDescriptions(List<Description> descriptions) {
		this.descriptions = descriptions;
	}

	public List<Requirement> getRequirements() {
		return requirements;
	}

	public void setRequirements(List<Requirement> requirements) {
		this.requirements = requirements;
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

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}
}
