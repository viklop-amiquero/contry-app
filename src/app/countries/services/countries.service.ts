import { Injectable, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, of, map, tap } from 'rxjs'
import { Country } from '../interfaces/countries.interface'
import { CacheStore } from '../interfaces/cache-store.interface'
import { Region } from '../interfaces/region.type'

@Injectable({
    providedIn: 'root',
})
export class CountriesService {
    private apiUrl: string = 'https://restcountries.com/v3.1'

    public cacheStore: CacheStore = {
        byCapital: {
            term: '',
            countries: [],
        },
        byCountries: {
            term: '',
            countries: [],
        },
        byRegion: {
            countries: [],
        },
    }

    constructor(private _http: HttpClient) {
        this.loadLocalStorage()
    }

    private getCountriesRequest(url: string): Observable<Country[]> {
        return this._http.get<Country[]>(url).pipe(catchError(() => of([])))
    }

    private saveLocalStorage(): void {
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
    }

    private loadLocalStorage(): void {
        if (!localStorage.getItem('cacheStore')) return

        this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
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

        return this.getCountriesRequest(url).pipe(
            tap(
                (countries) => (this.cacheStore.byCapital = { term, countries })
            ),
            tap(() => this.saveLocalStorage())
        )
    }

    searchCountry(term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${term}`

        return this.getCountriesRequest(url).pipe(
            tap(
                (countries) =>
                    (this.cacheStore.byCountries = { term, countries })
            ),
            tap(() => this.saveLocalStorage())
        )
    }

    searchRegion(term: Region): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${term}`

        return this.getCountriesRequest(url).pipe(
            tap(
                (countries) => (this.cacheStore.byRegion = { term, countries })
            ),
            tap(() => this.saveLocalStorage())
        )
    }
}
