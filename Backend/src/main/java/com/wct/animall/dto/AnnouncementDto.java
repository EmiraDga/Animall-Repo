package com.wct.animall.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import com.wct.animall.model.StateType;

public class AnnouncementDto {

	private Long id;

	private StateType state;

	private String location;

	@JsonFormat(pattern = "yyyy-MM-dd", shape = Shape.STRING)
	private String dateCreated;

	private String description;

	private UserDto userDto;

	private Integer animalId;
	private String animalName;
	private int animalAge;
	private String animalColor;
	private String animalGender;
	private String animalBreed;
	private String animalImage;
	private boolean animalVaccinated;
	private boolean animalTrained;
	private String animalCategoryName;
	private Long animalCategoryId;

	public AnnouncementDto() {
	}

	public AnnouncementDto(Long id, StateType state, String location, String dateCreated, String description,
			UserDto userDto, Integer animalId, String animalName, int animalAge, String animalColor,
			String animalGender, String animalBreed, String animalImage, boolean animalVaccinated,
			boolean animalTrained, String animalCategoryName, Long animalCategoryId) {
		super();
		this.id = id;
		this.state = state;
		this.location = location;
		this.dateCreated = dateCreated;
		this.description = description;
		this.userDto = userDto;
		this.animalId = animalId;
		this.animalName = animalName;
		this.animalAge = animalAge;
		this.animalColor = animalColor;
		this.animalGender = animalGender;
		this.animalBreed = animalBreed;
		this.animalImage = animalImage;
		this.animalVaccinated = animalVaccinated;
		this.animalTrained = animalTrained;
		this.animalCategoryName = animalCategoryName;
		this.animalCategoryId = animalCategoryId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public StateType getState() {
		return state;
	}

	public void setState(StateType state) {
		this.state = state;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(String dateCreated) {
		this.dateCreated = dateCreated;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public UserDto getUserDto() {
		return userDto;
	}

	public void setUserDto(UserDto userDto) {
		this.userDto = userDto;
	}

	public Integer getAnimalId() {
		return animalId;
	}

	public void setAnimalId(Integer animalId) {
		this.animalId = animalId;
	}

	public String getAnimalName() {
		return animalName;
	}

	public void setAnimalName(String animalName) {
		this.animalName = animalName;
	}

	public int getAnimalAge() {
		return animalAge;
	}

	public void setAnimalAge(int animalAge) {
		this.animalAge = animalAge;
	}

	public String getAnimalColor() {
		return animalColor;
	}

	public void setAnimalColor(String animalColor) {
		this.animalColor = animalColor;
	}

	public String getAnimalGender() {
		return animalGender;
	}

	public void setAnimalGender(String animalGender) {
		this.animalGender = animalGender;
	}

	public String getAnimalBreed() {
		return animalBreed;
	}

	public void setAnimalBreed(String animalBreed) {
		this.animalBreed = animalBreed;
	}

	public String getAnimalImage() {
		return animalImage;
	}

	public void setAnimalImage(String animalImage) {
		this.animalImage = animalImage;
	}

	public boolean isAnimalVaccinated() {
		return animalVaccinated;
	}

	public void setAnimalVaccinated(boolean animalVaccinated) {
		this.animalVaccinated = animalVaccinated;
	}

	public boolean isAnimalTrained() {
		return animalTrained;
	}

	public void setAnimalTrained(boolean animalTrained) {
		this.animalTrained = animalTrained;
	}

	public String getAnimalCategoryName() {
		return animalCategoryName;
	}

	public void setAnimalCategoryName(String animalCategoryName) {
		this.animalCategoryName = animalCategoryName;
	}

	public Long getAnimalCategoryId() {
		return animalCategoryId;
	}

	public void setAnimalCategoryId(Long animalCategoryId) {
		this.animalCategoryId = animalCategoryId;
	}

}
