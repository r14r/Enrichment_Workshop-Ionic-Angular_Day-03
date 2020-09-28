import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Connect4Demo2Page } from './page';

const routes: Routes = [{ path: '', component: Connect4Demo2Page }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class Connect4Demo2PageRoutingModule { }
