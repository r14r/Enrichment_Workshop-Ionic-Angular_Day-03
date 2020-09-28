import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TEMPLATEPage } from './page';

const routes: Routes = [{ path: '', component: TEMPLATEPage }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TEMPLATEPageRoutingModule { }
