import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiLevelSidemenuPageRoutingModule } from './multi-level-sidemenu-routing.module';

import { MultiLevelSidemenuPage } from './multi-level-sidemenu.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		MultiLevelSidemenuPageRoutingModule
	],
	declarations: [MultiLevelSidemenuPage]
})
export class MultiLevelSidemenuPageModule { }
