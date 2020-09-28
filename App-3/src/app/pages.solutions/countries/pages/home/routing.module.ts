import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesHomePage } from './page';

const routes: Routes = [{ path: '', component: CountriesHomePage }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CountriesHomePageRoutingModule { }
