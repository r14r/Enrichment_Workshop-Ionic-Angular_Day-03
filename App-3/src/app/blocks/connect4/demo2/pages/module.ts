import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Connect4Demo2PageRoutingModule } from './routing-module';
import { Connect4Demo2Page } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		Connect4Demo2PageRoutingModule
	],
	declarations: [Connect4Demo2Page]
})
export class Connect4Demo2PageModule { }
