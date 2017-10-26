package com.shaya.woo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Image {

	@Id
	@GeneratedValue
	private Long id;

	@Column(nullable = false)
	private String url;

	private String title;

	private String link;

	@ManyToOne
	@JsonIgnore
	private Company company;

	@ManyToOne
	@JsonIgnore
	private Product product;

	@ManyToOne
	@JsonIgnore
	private Press press;

	protected Image() {
	}

	public Image(String url, String title, String link) {
		this.url = url;
		this.title = title;
		this.link = link;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public Press getPress() {
		return press;
	}

	public void setPress(Press press) {
		this.press = press;
	}

}
