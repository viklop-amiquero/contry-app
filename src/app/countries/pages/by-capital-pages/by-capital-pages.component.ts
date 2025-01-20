import { Component, OnInit } from '@angular/core'
import { CountriesService } from '../../services/countries.service'
import { Country } from '../../interfaces/countries.interface'

@Component({
    selector: 'app-by-capital-pages',
    templateUrl: './by-capital-pages.component.html',
    styleUrl: './by-capital-pages.component.css',
})
export class ByCapitalPagesComponent implements OnInit {
    public countries: Country[] = []
    public isLoading: boolean = false
    public initialValue: string = ''

    constructor(private _countriesService: CountriesService) {}

    ngOnInit(): void {
        this.countries = this._countriesService.cacheStore.byCapital.countries
        this.initialValue = this._countriesService.cacheStore.byCapital.term
    }

    searchByCapital(term: string): void {
        this.isLoading = true
        this._countriesService.searchCapital(term).subscribe((resp) => {
            this.countries = resp
            this.isLoading = false
        })
    }
}
