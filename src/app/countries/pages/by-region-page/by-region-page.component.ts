import { Component } from '@angular/core'
import { CountriesService } from '../../services/countries.service'
import { Country } from '../../interfaces/countries.interface'

type Region = 'america' | 'africa' | 'oceania' | 'europe' | 'asia'

@Component({
    selector: 'app-by-region-page',
    templateUrl: './by-region-page.component.html',
    styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
    public countries: Country[] = []
    public regions: Region[] = [
        'america',
        'africa',
        'oceania',
        'europe',
        'asia',
    ]

    public regionSelected?: Region

    constructor(private _countriesService: CountriesService) {}

    searchByRegion(term: Region): void {
        this.regionSelected = term
        this._countriesService.searchRegion(term).subscribe((resp) => {
            this.countries = resp
        })
    }
}
