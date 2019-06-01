package com.skilldistillery.travel.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.travel.entities.Country;
import com.skilldistillery.travel.services.CountryService;

@RestController
@RequestMapping("api")
public class CountryController {

	@GetMapping("ping")
	public String ping() {
		return "pong";
	}
	
	@Autowired
	private CountryService svc;
	
	
	@GetMapping("countries")
	public List<Country> listAllCountries(){
		return svc.listAllCountries();
	}
	
}
