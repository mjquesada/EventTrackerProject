import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../models/country';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  // Fields
  private baseUrl = 'http://localhost:8087/';
  private url = this.baseUrl + 'api/countries';

  // Constructor
  constructor(private http: HttpClient) {}

  // Methods
  handleError(error: any) {
    console.error('Something Broke');
    return throwError(error.json().error || 'Server Error');
  }

  listAllCountries() {
    return this.http.get<Country[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('NOOOOOOO');
      })
    );
  }

  create(country: Country) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http
      .post<Country>(this.url, country, httpOptions)
      .pipe(catchError(this.handleError));
  }

  update(updateCountry: Country) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http
      .put(this.url + '/' + updateCountry.id, updateCountry, httpOptions)
      .pipe(catchError(this.handleError));
  }

  destroy(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete(this.url + '/' + id, httpOptions)
    .pipe(catchError(this.handleError));
  }
}
