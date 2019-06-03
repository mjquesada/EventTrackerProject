## Overview
The purpose of this program is to function as an online travel journal.
## Program Purpose
The purpose of this program is to act as an online journal for all of the destinations you have visited, as well as the ones that you would like to visit.
## Installation
The first requirement is to obtain a copy of the database from Github/mjquesada. The project incorporates Gradle as well as Spring, so both of those most be installed in your IDE in order to run the program successfully.

## Link to deployed app
Currently deployed on EC2 - ( http://3.19.15.5:8080/TravelREST/api/ )

### Paths

- Get all countries ("api/countries")
- Search country by Id ("api/countries/{id}")
- Get all the countries you have visited ("api/countries/visited")
- Get all the countries you would like to visit ("api/countries/toVisit")
- Search country by name ("api/countries/search/{name}")
- Create new country ("api/countries/new")
- Replace a country ("api/countries/replace/{id}")
- Delete country by Id ("api/countries/{id}")

## UML

## How To Use
At the moment, the only functionality is through the back-end, as the front-end has not yet been built out.  However, when the program is complete, you will have multiple options.

You have the ability to find all the countries in the database (db), all the countries you have visited, and all the countries you want to visit.

You can search the database by country name or by its id.

You can replace a country with a different country, or you can delete the country entirely.
## Concepts / Technologies Used
- Built in Spring Tool Suite (STS/Eclipse)
- Java
- Gradle
- MySQL
- Spring REST
- Full C.R.U.D Functionality
- MAMP (MacOS, Apache, MySQL, PHP/Python/Perl(Not used))
- HTML
- CSS
- JavaScript
- MySQL WorkBench
- Atom
- Bash Terminal

## Lessons Learned
- Reinforced Object Oriented Programming fundamentals
- Working with RequestMapping, Autowiring, and Entity management
- Working with repositories and services
