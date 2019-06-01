package com.skilldistillery.travel.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.travel.entities.Country;

public interface CountryRepository extends JpaRepository<Country, Integer> {

	Optional<Country> findById(int id);
	Country findByName(String name);
	List<Country> getCountryByVisited(Boolean visited);
	
}
