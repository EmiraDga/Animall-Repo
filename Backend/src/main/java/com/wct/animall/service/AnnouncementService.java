package com.wct.animall.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wct.animall.converter.AnnouncementConverter;
import com.wct.animall.dto.AnnouncementAnimalSaveDto;
import com.wct.animall.dto.AnnouncementDto;
import com.wct.animall.dto.AnnouncementSaveDto;
import com.wct.animall.dto.AnnouncementUpdateDto;
import com.wct.animall.model.Animal;
import com.wct.animall.model.Announcement;
import com.wct.animall.model.User;
import com.wct.animall.repository.AnimalRepository;
import com.wct.animall.repository.AnnouncementRepository;
import com.wct.animall.repository.UserRepository;

@Service
public class AnnouncementService {

	@Autowired
	AnnouncementConverter converter;

	@Autowired
	private AnnouncementRepository announcRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private AnimalRepository animalRepository;

	// Get all the users
	public List<AnnouncementDto> findAll() {
		List<AnnouncementDto> AnnouncementDtoList = new ArrayList<>();
		announcRepository.findAll().forEach(category -> AnnouncementDtoList.add(converter.convertToDto(category)));
		return AnnouncementDtoList;
	}

	// Get one user
	public Announcement findById(Long id) {
		return announcRepository.findById(id).get();
	}

	public void RemoveAnnouncement(Long id) {
		announcRepository.deleteById(id);
	}

	public AnnouncementSaveDto saveAnnouncementDto(AnnouncementSaveDto dto) throws Exception {
		modelMapper.getConfiguration().setAmbiguityIgnored(true);
		Announcement announcement = modelMapper.map(dto, Announcement.class);

		User user = userRepository.findById(dto.getUserId()).orElseThrow(() -> new Exception("User Not found"));
		announcement.setUser(user);

		Animal animal = animalRepository.findById(dto.getAnimalId())
				.orElseThrow(() -> new Exception("Animal Not found"));
		announcement.setAnimal(animal);

		return converter.convertToSaveDto(announcRepository.save(announcement));

	}

	public AnnouncementDto updateAnnouncementDto(Long id, AnnouncementUpdateDto dto) {

		Announcement SavedAnnouncement = announcRepository.findById(id).get();
		Announcement AnnouncementToUpdate = converter.convertToEntityUpdate(dto);

		SavedAnnouncement.setState(AnnouncementToUpdate.getState());
		SavedAnnouncement.setDateCreated(AnnouncementToUpdate.getDateCreated());
		SavedAnnouncement.setLocation(AnnouncementToUpdate.getLocation());
		SavedAnnouncement.setDescription(AnnouncementToUpdate.getDescription());
		SavedAnnouncement.setUser(AnnouncementToUpdate.getUser());
		SavedAnnouncement.setAnimal(AnnouncementToUpdate.getAnimal());

		return converter.convertToDto(announcRepository.save(SavedAnnouncement));
	}

	// NEW ADDED
	public AnnouncementAnimalSaveDto saveAnnouncementAnimalDto(AnnouncementAnimalSaveDto dto) throws Exception {
		// modelMapper.getConfiguration().setAmbiguityIgnored(true);
		Animal animal = modelMapper.map(dto, Animal.class);
		animal = animalRepository.save(animal);

		Announcement announcement = modelMapper.map(dto, Announcement.class);
		announcement.setAnimal(animal);
		announcement.setDateCreated(LocalDateTime.now());
		return converter.convertToSaveAnimalAnnouncementDto(announcRepository.save(announcement));

	}

}
