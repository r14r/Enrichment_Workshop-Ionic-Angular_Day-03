import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiLevelSidemenuPageRoutingModule } from './routing.module';

import { MultiLevelSidemenuPage } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		MultiLevelSidemenuPageRoutingModule,
	],
	declarations: [MultiLevelSidemenuPage],
})
export class MultiLevelSidemenuPageModule {}
