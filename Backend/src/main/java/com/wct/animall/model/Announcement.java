package com.wct.animall.model;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@Entity
@Table(name = "announcement")
public class Announcement {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private StateType state;

	private int nb_announncment;

	private String location;

	@JsonFormat(pattern = "yyyy-MM-dd", shape = Shape.STRING)
	private LocalDateTime dateCreated;

	@Column(length = 512)
	private String description;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "User_id", referencedColumnName = "id")
	private User user;

	@OneToOne
	@JoinColumn(name = "animal_id", referencedColumnName = "id")
	private Animal animal;

	public Announcement() {
	}

	public Announcement(Long id, StateType state, int nb_announncment, String location, LocalDateTime dateCreated,
			String description, User user, Animal animal) {
		super();
		this.id = id;
		this.state = state;
		this.nb_announncment = nb_announncment;
		this.location = location;
		this.dateCreated = dateCreated;
		this.description = description;
		this.user = user;
		this.animal = animal;
	}

	public StateType getState() {
		return state;
	}

	public void setState(StateType state) {
		this.state = state;
	}

	public int getNb_announncment() {
		return nb_announncment;
	}

	public void setNb_announncment(int nb_announncment) {
		this.nb_announncment = nb_announncment;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDateTime getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(LocalDateTime dateCreated) {
		this.dateCreated = dateCreated;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Animal getAnimal() {
		return animal;
	}

	public void setAnimal(Animal animal) {
		this.animal = animal;
	}

}
