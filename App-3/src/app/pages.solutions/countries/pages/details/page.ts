import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data/service';

@Component({
	selector: 'app-details',
	templateUrl: './page.html',
	styleUrls: ['./page.scss']
})
export class CountriesDetailsPage implements OnInit {
	item: any;

	constructor(public dataService: DataService) {
		this.item = dataService.currentItem;

		console.log(this.item);
	}

	ngOnInit() { }

	delete(item) {
		console.log('ListWithEditPage::delete | item=', item);
	}
}
