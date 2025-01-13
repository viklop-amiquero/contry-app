import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component'
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component'
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component'
import { CountryPageComponent } from './pages/country-page/country-page.component'
import { CountriesRouting } from './countries-routing.module'
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component'

@NgModule({
    declarations: [
        ByCapitalPagesComponent,
        ByCountryPageComponent,
        ByRegionPageComponent,
        CountryPageComponent,
        CountryTableComponent,
    ],
    imports: [CommonModule, CountriesRouting, SharedModule],
})
export class CountriesModule {}
