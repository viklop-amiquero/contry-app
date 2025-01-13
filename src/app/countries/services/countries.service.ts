import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, of } from 'rxjs'
import { Country } from '../interfaces/countries.interface'

@Injectable({
    providedIn: 'root',
})
export class CountriesService {
    private apiUrl: string = 'https://restcountries.com/v3.1'

    constructor(private _http: HttpClient) {}

    searchCapital(term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${term}`

        return this._http.get<Country[]>(url).pipe(catchError(() => of([])))
    }
}
