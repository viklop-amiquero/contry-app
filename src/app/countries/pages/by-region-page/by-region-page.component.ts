import { Component } from '@angular/core'
import { CountriesService } from '../../services/countries.service'
import { Country } from '../../interfaces/countries.interface'

@Component({
    selector: 'app-by-region-page',
    templateUrl: './by-region-page.component.html',
    styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
    public countries: Country[] = []

    constructor(private _countriesService: CountriesService) {}

    searchByRegion(term: string): void {
        this._countriesService.searchRegion(term).subscribe((resp) => {
            this.countries = resp
            console.log(this.countries)
        })
    }
}
