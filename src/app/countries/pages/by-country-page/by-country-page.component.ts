import { Component } from '@angular/core'
import { CountriesService } from '../../services/countries.service'
import { Country } from '../../interfaces/countries.interface'

@Component({
    selector: 'app-by-country-page',
    templateUrl: './by-country-page.component.html',
    styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent {
    public countries: Country[] = []

    constructor(private _countriesService: CountriesService) {}

    searchByCountry(term: string): void {
        this._countriesService.searchCountry(term).subscribe((resp) => {
            this.countries = resp
        })
    }
}
