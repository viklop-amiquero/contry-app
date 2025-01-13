import { Component } from '@angular/core'
import { CountriesService } from '../../services/countries.service'
import { Country } from '../../interfaces/countries.interface'

@Component({
    selector: 'app-by-capital-pages',
    templateUrl: './by-capital-pages.component.html',
    styleUrl: './by-capital-pages.component.css',
})
export class ByCapitalPagesComponent {
    public countries: Country[] = []

    constructor(private _countriesService: CountriesService) {}

    searchByCapital(term: string): void {
        this._countriesService.searchCapital(term).subscribe((resp) => {
            this.countries = resp
        })
    }
}
