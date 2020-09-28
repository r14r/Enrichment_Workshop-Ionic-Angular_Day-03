import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountriesOfTheWorldPageRoutingModule } from './countries-of-the-world-routing.module';

import { CountriesOfTheWorldPage } from './countries-of-the-world.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		CountriesOfTheWorldPageRoutingModule
	],
	declarations: [CountriesOfTheWorldPage]
})
export class CountriesOfTheWorldPageModule { }
