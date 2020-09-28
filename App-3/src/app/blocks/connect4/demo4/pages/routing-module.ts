import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Connect4Demo4Page } from './page';

const routes: Routes = [{ path: '', component: Connect4Demo4Page }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class Connect4Demo4PageRoutingModule { }
