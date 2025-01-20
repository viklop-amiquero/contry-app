import { Component, OnInit } from '@angular/core'
import { CountriesService } from '../../services/countries.service'
import { Country } from '../../interfaces/countries.interface'
import { Region } from '../../interfaces/region.type'

@Component({
    selector: 'app-by-region-page',
    templateUrl: './by-region-page.component.html',
    styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent implements OnInit {
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

    ngOnInit(): void {
        this.countries = this._countriesService.cacheStore.byRegion.countries
        this.regionSelected = this._countriesService.cacheStore.byRegion.term
    }

    searchByRegion(term: Region): void {
        this.regionSelected = term
        this._countriesService.searchRegion(term).subscribe((resp) => {
            this.countries = resp
        })
    }
}
