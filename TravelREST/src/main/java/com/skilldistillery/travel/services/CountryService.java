package com.skilldistillery.travel.services;

import java.util.List;

import com.skilldistillery.travel.entities.Country;

public interface CountryService {

	List<Country> listAllCountries();
	Country createCountry(Country country);
	Country replaceCountry(int id, Country country);
	Boolean deleteById(int id);
	
}
