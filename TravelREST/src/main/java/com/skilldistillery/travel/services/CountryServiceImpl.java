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
		return null;
	}

	@Override
	public Boolean deleteById(int id) {
		return null;
	}

	@Override
	public Country replaceCountry(int id, Country country) {
		return null;
	}

}
