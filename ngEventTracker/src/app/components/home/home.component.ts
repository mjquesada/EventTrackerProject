import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Fields
  countryList: Country[] = [];
  editCountry = null;
  // haveVisited: number;
  // toVisit: number;
  // total: number;

  // Constructor
  constructor(private countryService: CountryService) {}

  // Methods
  ngOnInit() {
    this.loadAllCountries();
  }

  loadAllCountries() {
    this.countryService.listAllCountries().subscribe(
      good => {
        console.log('A good thing happened');
        this.countryList = good;
      },
      bad => {
        console.log('A bad thing happened');
      },
      () => {}
    );
  }

  addNewCountry(form: NgForm) {
    const newCountry = new Country();
    newCountry.id = form.value.id;
    newCountry.name = form.value.name;
    newCountry.dateVisited = form.value.dateVisited;
    newCountry.visited = form.value.visited;
    newCountry.notes = form.value.notes;
    this.countryService.create(newCountry).subscribe(
      good => {
        console.log('Country Added');
        this.loadAllCountries();
      },
      bad => {
        console.log('Couldn\'t add country');
        this.loadAllCountries();
      }
    );
    form.reset();
  }

  updateCountry(country: Country) {
    this.countryService.update(country).subscribe(good => {}, bad => {});
  }

  deleteCountry(id: number) {
    console.log(id);
    this.countryService.destroy(id).subscribe(
      good => {
        this.loadAllCountries();
      },
      bad => {
       console.log(bad);
      }
    );
  }

  aggregate(country: Country): string {
    let haveVisited = 0;
    let toVisit = 0;
    const total = this.countryList.length;
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.countryList.length; i++) {
      const visited = this.countryList[i].visited;
      if (visited === true) {
        haveVisited++;
      } else if (visited === false) {
        toVisit++;
      }
    }
    return 'You have visited ' + haveVisited + ' out of ' + total + ' countries,' +
            ' you have ' + toVisit + ' left to visit.';

  }
}
