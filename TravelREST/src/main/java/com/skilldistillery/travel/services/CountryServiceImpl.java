package com.skilldistillery.travel.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.travel.entities.Country;
import com.skilldistillery.travel.repositories.CountryRepository;

@Service
public class CountryServiceImpl implements CountryService {

	@Autowired
	private CountryRepository repo;

	@Override
	public List<Country> listAllCountries() {
		return repo.findAll();
	}

	@Override
	public Country createCountry(Country country) {
		repo.saveAndFlush(country);
		return country;
	}

	@Override
	public Country replaceCountry(int id, Country country) {
		Country newC;
		newC = repo.findById(id).get();
		newC.setName(country.getName());
		newC.setDateVisited(country.getDateVisited());
		newC.setNotes(country.getNotes());
		newC.setVisited(country.getVisited());
		repo.saveAndFlush(newC);
		return newC;
	}

	@Override
	public Boolean deleteById(Country country, int id) {
		Boolean deleted = false;
		
		
		try {
			country = repo.findById(id).get();
			repo.delete(country);
			deleted = true;
		} catch (Exception e) {
			System.out.println("Country not found");
		}
		return deleted;
		
	}


}
