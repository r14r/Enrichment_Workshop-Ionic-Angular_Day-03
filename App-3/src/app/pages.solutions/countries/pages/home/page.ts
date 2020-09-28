import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesDataModel } from '../../model/data.model';
import { DataService } from '../../service/data/service';
import { ComponentsModule } from '../../components/components.module';
import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-list',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class CountriesHomePage implements OnInit {
	private selectedItem: any;

	public items: Array<CountriesDataModel> = [];

	private ID = 'CountriesHomePage';
	private toolbox = new HelperService(this.ID);

	constructor(public router: Router, public dataService: DataService) {
		this.toolbox.log('constructor');

		dataService.getData().subscribe(data => {
			this.toolbox.log('getData', 'subscribe');

			this.items = data;
			this.toolbox.log('getData', 'items =' + this.items.length);
		});
	}

	ngOnInit() { }

	navigateTo(item: CountriesDataModel) {
		console.log('ListPaCountriesDataModelge::navigateTo | item=', item.name);

		this.dataService.currentItem = item;
		this.router.navigateByUrl('details');
	}

	addItem() {
		console.log('ListPage::addItem | ');

		this.dataService.addItem('New Item');
	}

	editItem() {
		console.log('ListPage::editItem | ');
	}
}
