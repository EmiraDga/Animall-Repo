package com.wct.animall.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wct.animall.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {


	Optional<User> findByUsername(String username);
	
}
