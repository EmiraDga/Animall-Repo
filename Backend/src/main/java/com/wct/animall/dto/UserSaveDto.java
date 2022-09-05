package com.wct.animall.dto;

public class UserSaveDto {

	private String email;

	private String lastname;

	private String firstname;

	private String phone;

	private String password;

	private String username;

	private String city;

	private String addresse;

	public UserSaveDto(String email, String lastname, String firstname, String phone, String password, String username,
			String city, String addresse) {
		super();
		this.email = email;
		this.lastname = lastname;
		this.firstname = firstname;
		this.phone = phone;
		this.password = password;
		this.username = username;
		this.city = city;
		this.addresse = addresse;
	}

	public UserSaveDto() {
		super();
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddresse() {
		return addresse;
	}

	public void setAddresse(String addresse) {
		this.addresse = addresse;
	}

}
