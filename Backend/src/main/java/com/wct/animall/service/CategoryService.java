package com.wct.animall.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wct.animall.converter.CategoryConverter;
import com.wct.animall.dto.CategoryDto;
import com.wct.animall.dto.CategorySaveDto;
import com.wct.animall.dto.CategoryUpdateDto;
import com.wct.animall.model.Category;
import com.wct.animall.repository.AnimalRepository;
import com.wct.animall.repository.CategoryRepository;

@Service
public class CategoryService {

	// private List<Category> categories = new ArrayList<>();

	@Autowired
	CategoryConverter converter;

	@Autowired
	private CategoryRepository CatRepo;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private AnimalRepository animalRepo;

	// GET ALL
	public List<CategoryDto> findAll() {
		List<CategoryDto> categoryDtoList = new ArrayList<>();
		CatRepo.findAll().forEach(categroy -> categoryDtoList.add(converter.convertToDto(categroy)));
		return categoryDtoList;
	}

	// Return Single User
	public Category findById(Long id) {
		return CatRepo.findById(id).get();
	}

	public void RemoveCategory(Long id) {
		CatRepo.deleteById(id);
	}

	public CategorySaveDto saveCategoryDto(CategorySaveDto dto) throws Exception {
		Category category = modelMapper.map(dto, Category.class);
		return converter.convertToDtoSave(CatRepo.save(category));

	}

	public CategoryUpdateDto updateCategoryDto(Long id, CategoryUpdateDto dto) {
		Category SavedCategory = CatRepo.findById(id).get();
		Category CategoryToUpdate = converter.convertToEntityUpdate(dto);
		SavedCategory.setName(CategoryToUpdate.getName());
		return converter.convertToDtoUpdate(CatRepo.save(SavedCategory));
	}

}
