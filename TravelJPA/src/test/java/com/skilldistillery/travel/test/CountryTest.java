package com.skilldistillery.travel.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.travel.entities.Country;

class CountryTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Country country;
	
	@BeforeAll
	public static void setupAll() {
			emf = Persistence.createEntityManagerFactory("travelPU");
	}
	
	@AfterAll
	public static void closeAll() {
		emf.close();
	}

	@BeforeEach
	public void setUp() throws Exception {
		em = emf.createEntityManager();
		country = em.find(Country.class, 1);
		
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		country = null;
	}
	
	@Test
	void test_Country_Mappings() {
		assertEquals(1, country.getId());
		assertEquals("England", country.getName());
		assertEquals("2015-02-01", country.getDateVisited().toString());
		
	}
	
}
