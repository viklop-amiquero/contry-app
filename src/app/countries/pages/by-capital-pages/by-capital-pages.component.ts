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
    public isLoading: boolean = false

    constructor(private _countriesService: CountriesService) {}

    searchByCapital(term: string): void {
        this.isLoading = true
        this._countriesService.searchCapital(term).subscribe((resp) => {
            this.countries = resp
            this.isLoading = false
        })
    }
}
