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
On the home page, you are presented with a couple of options.  At the very top of the page, you can see the number of countries you have visited, in relation to all of the countries in the database.

You will also see the full list of all the countries in the database underneath that.

You have a couple of options from the front-end.  You can add a a new country in the input box, and that country will be added to the database, and you can view it in the list.

If you click on an existing country, you will be presented with the option to either edit that country, or delete it.  If you choose to edit it, the country that you input will replace the country that you clicked on.  Deleting it will remove it entirely.

## Concepts / Technologies Used
- Built in Spring Tool Suite (STS/Eclipse)
- Angular
- Java
- JavaScript
- XHR Request
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
- Learning full-stack development with XHR
- Learned how to work in Anuglar to build a front-end
