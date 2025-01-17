import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, of, map, delay } from 'rxjs'
import { Country } from '../interfaces/countries.interface'

@Injectable({
    providedIn: 'root',
})
export class CountriesService {
    private apiUrl: string = 'https://restcountries.com/v3.1'

    constructor(private _http: HttpClient) {}

    private getCountriesRequest(url: string): Observable<Country[]> {
        return this._http.get<Country[]>(url).pipe(
            catchError(() => of([]))
            // delay(2000)
        )
    }

    searchCountryAlphaCode(code: string): Observable<Country | null> {
        const url = `${this.apiUrl}/alpha/${code}`

        return this._http.get<Country[]>(url).pipe(
            map((countries) => (countries.length > 0 ? countries[0] : null)),
            catchError(() => of(null))
        )
    }

    searchCapital(term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${term}`

        return this.getCountriesRequest(url)
    }

    searchCountry(term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${term}`

        return this.getCountriesRequest(url)
    }

    searchRegion(term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${term}`

        return this.getCountriesRequest(url)
    }
}
