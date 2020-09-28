import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Connect4Step1PageRoutingModule } from './routing-module';

import { Connect4Step1Page } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		Connect4Step1PageRoutingModule
	],
	declarations: [Connect4Step1Page]
})
export class Connect4Step1PageModule { }
