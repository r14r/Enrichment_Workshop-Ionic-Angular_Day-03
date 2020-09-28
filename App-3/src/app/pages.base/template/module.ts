import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TEMPLATEPageRoutingModule } from './routing.module';

import { TEMPLATEPage } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		TEMPLATEPageRoutingModule
	],
	declarations: [TEMPLATEPage]
})
export class TEMPLATEPageModule { }
