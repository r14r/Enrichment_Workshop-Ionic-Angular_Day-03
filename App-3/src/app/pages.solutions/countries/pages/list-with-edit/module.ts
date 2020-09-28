import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListWithEditPage } from './page';

const routes: Routes = [
	{
		path: '',
		component: ListWithEditPage
	}
];

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
	declarations: [ListWithEditPage]
})
export class ListWithEditPageModule { }
