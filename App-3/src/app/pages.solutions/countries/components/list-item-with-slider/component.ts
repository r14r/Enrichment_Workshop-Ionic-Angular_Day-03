import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

import { HelperService } from 'src/app/helpers/helper.service';
import { CountriesDataModel } from '../../model/data.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
	selector: 'custom-countries-list-item-with-slider',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})
export class CountriesListItemWithSliderComponent implements OnInit {

	theTitle: string;
	@Input() set title(val: string) {
		this.toolbox.log('constructor', 'set title=' + val);
		this.theTitle = val !== undefined && val !== null ? val : '';
	}

	@Input() subtitle: string;

	@Input() item: CountriesDataModel;

	private ID = 'CountriesListItemWithSliderComponent';
	private toolbox = new HelperService(this.ID);

	constructor(private elementRef: ElementRef, private renderer: Renderer2) {
		// this.toolbox.log('constructor', 'title=' + this.theTitle);
		// this.toolbox.log('constructor', 'item =' + this.item);
	}

	ngOnInit() { }

	unread(item: IonItemSliding) {
		this.toolbox.log('unread', 'item=' + item);
		item.close();
	}
}
