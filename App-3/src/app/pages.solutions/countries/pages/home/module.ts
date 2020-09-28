import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { CountriesHomePage } from './page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [{ path: '', component: CountriesHomePage }];

@NgModule({
	imports: [
		CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes),
		ComponentsModule
	],

	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [CountriesHomePage]
})
export class CountriesHomePageModule { }
