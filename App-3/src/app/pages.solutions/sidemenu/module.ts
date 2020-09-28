import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiLevelSideMenuPageRoutingModule } from './routing.module';

import { MultiLevelSideMenuPage } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		MultiLevelSideMenuPageRoutingModule
	],
	declarations: [MultiLevelSideMenuPage]
})
export class MultiLevelSideMenuPageModule { }
