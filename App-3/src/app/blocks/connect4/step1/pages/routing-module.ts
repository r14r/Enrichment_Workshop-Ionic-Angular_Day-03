import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Connect4Step1Page } from './page';

const routes: Routes = [
	{
		path: '',
		component: Connect4Step1Page
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class Connect4Step1PageRoutingModule { }
