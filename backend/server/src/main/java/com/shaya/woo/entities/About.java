package com.shaya.woo.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class About {

	@Id
	@GeneratedValue
	private Long id;

	private String title;

	private int employeesNum;

	private int founded;

	private String funding;

	@OneToOne(fetch = FetchType.LAZY, mappedBy = "about")
	@JsonIgnore
	private Company company;

	protected About() {
	}

	protected About(String title, int employeesNum, int founded, String funding) {
		super();
		this.title = title;
		this.employeesNum = employeesNum;
		this.founded = founded;
		this.funding = funding;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getEmployeesNum() {
		return employeesNum;
	}

	public void setEmployeesNum(int employeesNum) {
		this.employeesNum = employeesNum;
	}

	public int getFounded() {
		return founded;
	}

	public void setFounded(int founded) {
		this.founded = founded;
	}

	public String getFunding() {
		return funding;
	}

	public void setFunding(String funding) {
		this.funding = funding;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

}
