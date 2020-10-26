import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiLevelSidemenuPage } from './page';

const routes: Routes = [
	{
		path: '',
		component: MultiLevelSidemenuPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MultiLevelSidemenuPageRoutingModule {}
