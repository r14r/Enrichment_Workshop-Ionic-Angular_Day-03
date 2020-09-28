import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Connect4Demo1Page } from './page';

const routes: Routes = [{ path: '', component: Connect4Demo1Page }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class Connect4Demo1PageRoutingModule { }
