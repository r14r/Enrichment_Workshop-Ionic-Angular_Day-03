import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HelperService } from 'src/app/helpers/helper.service';

import { CountriesDataModel } from '../../model/data.model';
import { DataService } from '../../service/data/service';

@Component({
	selector: 'app-list',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class CountriesWithComponentsHomePage implements OnInit {
	private selectedItem: any;

	public items: Array<CountriesDataModel> = [];

	private ID = 'CountriesWithComponentsHomePage';
	private toolbox = new HelperService(this.ID);

	constructor(public router: Router, public dataService: DataService) {
		this.toolbox.log('constructor');

		dataService.getData().subscribe(data => {
			this.toolbox.log('constructor.dataService.getData', 'subscribe');

			this.items = data;
			this.toolbox.log('constructor.dataService.getData', 'items=' + this.items.length);
		});
	}

	ngOnInit() { }

	navigateTo(item: CountriesDataModel) {
		this.toolbox.log('navigateTo', 'item=' + item.name);

		this.dataService.currentItem = item;
		this.router.navigateByUrl('solutions/countries/details');
	}

	addItem() {
		this.toolbox.log('addItem | ');

		this.dataService.addItem('New Item');
	}

	editItem() {
		this.toolbox.log('editItem | ');
	}
}
