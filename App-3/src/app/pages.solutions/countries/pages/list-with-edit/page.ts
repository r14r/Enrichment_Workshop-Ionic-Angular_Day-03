import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HelperService } from 'src/app/helpers/helper.service';

import { CountriesDataModel } from '../../model/data.model';
import { DataService } from '../../service/data/service';

@Component({
	selector: 'app-list-with-edit',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class ListWithEditPage implements OnInit {
	private selectedItem: any;

	public items: Array<CountriesDataModel> = [];

	private ID = 'ListWithEditPage';
	private toolbox = new HelperService(this.ID);

	constructor(public router: Router, public dataService: DataService) {
		this.toolbox.log('constructor');

		dataService.getData().subscribe(data => {
			this.toolbox.log(':getData', 'subscribe');

			this.items = data;
			this.toolbox.log(':getData', 'items =' + this.items.length);
		});
	}

	ngOnInit() {
	}

	navigateTo(item) {
		this.toolbox.log('navigateTo', 'item=' + item);

		this.toolbox.log('navigateTo', item.title + ',' + item.note + ', ' + item.icon);

		this.dataService.currentItem = item;
		this.router.navigateByUrl('details');
	}

	delete(item) {
		this.toolbox.log('delete', 'item=' + item);
	}

}
