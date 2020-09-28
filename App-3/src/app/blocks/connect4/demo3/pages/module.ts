import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Connect4Demo3PageRoutingModule } from './routing-module';
import { Connect4Demo3Page } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		Connect4Demo3PageRoutingModule
	],
	declarations: [Connect4Demo3Page]
})
export class Connect4Demo3PageModule { }
