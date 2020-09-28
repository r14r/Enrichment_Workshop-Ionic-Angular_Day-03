import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherPage } from './page';

const routes: Routes = [{ path: '', component: WeatherPage }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class WeatherPageRoutingModule { }
