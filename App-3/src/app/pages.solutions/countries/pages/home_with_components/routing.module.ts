import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesWithComponentsHomePage } from './page';

const routes: Routes = [{ path: '', component: CountriesWithComponentsHomePage }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CountriesWithComponentsHomePageRoutingModule { }
