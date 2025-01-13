import { Component, Input } from '@angular/core'
import { Country } from '../../interfaces/countries.interface'

@Component({
    selector: 'countries-country',
    templateUrl: './country-table.component.html',
    styleUrl: './country-table.component.css',
})
export class CountryTableComponent {
    @Input()
    public countries: Country[] = []
}
