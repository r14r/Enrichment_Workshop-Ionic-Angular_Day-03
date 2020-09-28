import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Connect4Demo1PageRoutingModule } from './module.routing';
import { Connect4Demo1Page } from './page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, Connect4Demo1PageRoutingModule],
	declarations: [Connect4Demo1Page]
})
export class Connect4Demo1PageModule { }
