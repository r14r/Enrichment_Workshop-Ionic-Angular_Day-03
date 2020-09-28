import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Connect4Demo4PageRoutingModule } from './routing-module';
import { Connect4Demo4Page } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		Connect4Demo4PageRoutingModule
	],
	declarations: [Connect4Demo4Page]
})
export class Connect4Demo4PageModule { }
