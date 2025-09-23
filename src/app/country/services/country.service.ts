import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/country.interface';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { CountryMap } from '../mappers/country.mapper';
import { Country } from '../interfaces/data-country.interface';

const Api_Url = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient)

  constructor() { }

  busquedaByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase()

    return this.http.get<RESTCountry[]>(`${Api_Url}/capital/${query}`).pipe(

      map((resp) => CountryMap.mapeoItemRestCountry(resp)),

      catchError((error) => {
        console.log('Error fetching', error);
        return throwError(
          () => new Error(`No se puede obtener paises con ese query: ${query}`,)
        )
      })

    )

  }

  //busqueda pais
  SearchByCountry(query: string) {

    const url = `${Api_Url}/name/${query}`;

    query = query.toLowerCase()

    return this.http.get<RESTCountry[]>(url).pipe(

      map((resp) => CountryMap.mapeoItemRestCountry(resp)),
      delay(2500),
      catchError((error) => {
        console.log('Error fetching', error);
        return throwError(
          () => new Error(`No se puede obtener paises con ese query: ${query}`,)
        )
      })

    )


  }





}
