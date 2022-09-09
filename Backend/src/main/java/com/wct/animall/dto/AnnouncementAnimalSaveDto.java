package com.wct.animall.dto;

public class AnnouncementAnimalSaveDto {

	private String animalName;
	private int animalAge;
	private String animalColor;
	private String animalGender;
	private String animalBreed;
	private String animalImage;
	private boolean animalVaccinated;
	private boolean animalTrained;
	private String animalCategoryName;
	private String announcementLocation;
	private String announcementDescription;
	private Integer animalId;

	public AnnouncementAnimalSaveDto() {
		super();
	}

	public AnnouncementAnimalSaveDto(String animalName, int animalAge, String animalColor, String animalGender,
			String animalBreed, String animalImage, boolean animalVaccinated, boolean animalTrained,
			String animalCategoryName, String location, String description) {
		super();
		this.animalName = animalName;
		this.animalAge = animalAge;
		this.animalColor = animalColor;
		this.animalGender = animalGender;
		this.animalBreed = animalBreed;
		this.animalImage = animalImage;
		this.animalVaccinated = animalVaccinated;
		this.animalTrained = animalTrained;
		this.animalCategoryName = animalCategoryName;
		this.announcementLocation = location;
		this.announcementDescription = description;
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

	public String getLocation() {
		return announcementLocation;
	}

	public void setLocation(String location) {
		this.announcementLocation = location;
	}

	public String getDescription() {
		return announcementDescription;
	}

	public void setDescription(String description) {
		this.announcementDescription = description;
	}

	public Integer getAnimalId() {
		return animalId;
	}

	public void setAnimalId(Integer animalId) {
		this.animalId = animalId;
	}

}
