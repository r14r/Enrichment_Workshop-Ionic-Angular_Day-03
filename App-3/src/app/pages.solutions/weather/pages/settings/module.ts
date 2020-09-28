import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { WeatherSettingsPage } from './page';

const routes: Routes = [{ path: '', component: WeatherSettingsPage }];

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
	declarations: [WeatherSettingsPage]
})
export class WeatherSettingsPageModule { }
