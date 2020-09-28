import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CountriesListItemComponent } from './list-item/component';
import { CountriesListItemWithSliderComponent } from './list-item-with-slider/component';

@NgModule({
	declarations: [CountriesListItemComponent, CountriesListItemWithSliderComponent],
	imports: [IonicModule],
	exports: [CountriesListItemComponent, CountriesListItemWithSliderComponent]
})
export class ComponentsModule { }
