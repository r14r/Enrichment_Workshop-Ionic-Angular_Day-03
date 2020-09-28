import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Connect4Step2PageRoutingModule } from './routing-module';
import { Connect4Step2Page } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		Connect4Step2PageRoutingModule
	],
	declarations: [Connect4Step2Page]
})
export class Connect4Step2PageModule { }
