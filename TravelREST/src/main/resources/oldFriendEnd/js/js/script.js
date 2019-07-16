window.addEventListener('load', function(e) {
	var editForm = document.getElementById("editTravelDiv");
	editForm.style.display = "none";
	var deleteForm = document.getElementById("deleteTravelDiv");
	deleteForm.style.display = "none";
	getAllEvents();
	document.addTravelForm.submit.addEventListener('click', addCountry);
	document.editTravelForm.submit.addEventListener('click', editCountry);
	document.deleteTravelForm.submit.addEventListener('click', deleteCountry);
});

function getAllEvents() {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/countries');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			let travelObject = JSON.parse(xhr.responseText);
			console.log(travelObject);
			displayAllEvents(travelObject);
			
			  var haveVisited = 0;
			  var toVisit = 0;
			  var total = travelObject.length;
			for (var i = 0; i < travelObject.length; i++) {
				  var country = travelObject[i];
				  var visited = country.visited;
	
				  if (visited == true){
					  haveVisited++;
				  }
				  else if(visited == false){
					  toVisit++
				  }
				}
			agg.textContent = "You have visited " + haveVisited + " countries, out of " + total + " countries";

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			console.log("Events not found.");
		}
	};

	xhr.send(null);

}

function displayAllEvents(countries) {

	var travelDiv = document.getElementById('travelObj');
	travelDiv.textContent = '';

	let table = document.createElement('table');
	travelDiv.appendChild(table);

	let th = document.createElement('th');
	table.appendChild(th);
	let idTd = document.createElement('td');
	idTd.textContent = "id        ";
	th.appendChild(idTd);
	
	let th2 = document.createElement('th');
	table.appendChild(th2);
	let nameTd = document.createElement('td');
	nameTd.textContent = "Name          ";
	th2.appendChild(nameTd);
	
	let th3 = document.createElement('th');
	table.appendChild(th3);
	let dateTd = document.createElement('td');
	dateTd.textContent = "Date Visited       ";
	th3.appendChild(dateTd);
	
	let th4 = document.createElement('th');
	table.appendChild(th4);
	let visitedTd = document.createElement('td');
	visitedTd.textContent = "Visited        ";
	th4.appendChild(visitedTd);

	let th5 = document.createElement('th');
	table.appendChild(th5);
	let notesTd = document.createElement('td');
	notesTd.textContent = "Notes";
	th5.appendChild(notesTd);

	

	let td = document.createElement('td');
	table.appendChild(td);

	for (var i = 0; i < countries.length; i++) {
		let country = countries[i];
		
		let tr = document.createElement('tr');
		table.appendChild(tr);
		tr.style.borderstyle = 'solid';

		let td = document.createElement('td');
		table.appendChild(td);

		let id = document.createElement('td');
		id.textContent = country.id;
		tr.appendChild(id);
		tr.addEventListener('click', showEditForm);
		tr.id = country.id;
	

		let name = document.createElement('td');
		name.textContent = country.name;
		tr.appendChild(name);
		name.id = country.id;

		let dateVisited = document.createElement('td');
		dateVisited.textContent = country.dateVisited;
		tr.appendChild(dateVisited);
		dateVisited.id = country.id;

		let visited = document.createElement('td');
		visited.textContent = country.visited;
		tr.appendChild(visited);
		visited.id = country.id;

		let notes = document.createElement('td');
		notes.textContent = country.notes;
		tr.appendChild(notes);
		notes.id = country.id;

	}

}
function addCountry(e) {
	e.preventDefault();
	var xhr = new XMLHttpRequest();

	xhr.open('POST', 'http://localhost:8087/api/countries/');
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			let countryObject = JSON.parse(xhr.responseText);
			// getFilm(filmObject.id);
			// console.log(filmObject);
			getAllEvents();

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			console.log("Country not found");
		}
	};

	let countryObject = {
		name : document.addTravelForm.name.value,
		dateVisited : document.addTravelForm.date.value,
		notes : document.addTravelForm.notes.value,
		visited : document.addTravelForm.visited.value,

	}

	xhr.send(JSON.stringify(countryObject));

}

function editCountry(e) {
	e.preventDefault();
	var xhr = new XMLHttpRequest();
	console.log(e);
	xhr.open('PUT', 'http://localhost:8087/api/countries/' + e.target.id);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			let editCountryObject = JSON.parse(xhr.responseText);
			console.log(editCountryObject);
			getAllEvents();
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			console.log("Country not found");
		}
	};

	let editCountryObject = {
		name : document.editTravelForm.name.value,
		dateVisited : document.editTravelForm.date.value,
		notes : document.editTravelForm.notes.value,
		visited : document.editTravelForm.visited.value,

	}

	xhr.send(JSON.stringify(editCountryObject));

}

function showEditForm(e) {
	var editForm = document.getElementById("editTravelDiv");
	editForm.style.display = "flex";
	document.editTravelForm.submit.id = e.target.id;
	document.deleteTravelForm.submit.id = e.target.id;

	var editForm = document.getElementById("deleteTravelDiv");
	editForm.style.display = "flex";
	document.editTravelForm.submit.id = e.target.id;
	document.deleteTravelForm.submit.id = e.target.id;
}

function deleteCountry(e) {
	e.preventDefault();
	var xhr = new XMLHttpRequest();
	console.log(e);
	xhr.open('DELETE', 'http://localhost:8087/api/countries/' + e.target.id);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			let deleteCountryObject = JSON.parse(xhr.responseText);
			console.log(deleteCountryObject);
			getAllEvents();
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			console.log("Country not found");
		}
	};


	xhr.send(null);

}